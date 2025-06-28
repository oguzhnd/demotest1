"use client";

import HotelListCard from "@/components/HotelPageElements/HotelListCard";
import HotelListFilters, {
  HotelListFiltersForm,
} from "@/components/HotelPageElements/HotelListFilters";
import CancellationFilter from "@/components/HotelPageElements/HotelListFilters/CancellationFilter";
import FoodFilter from "@/components/HotelPageElements/HotelListFilters/FoodFilter";
import Sorting from "@/components/HotelPageElements/HotelListFilters/Sorting";
import HotelLoading from "@/components/HotelPageElements/HotelLoading";
import ShowOnMap from "@/components/HotelPageElements/ShowOnMap";
import SearchArea from "@/components/SearchArea";
import { convertDate } from "@/components/SearchArea/Contents/Flight";
import { useRouter } from "@/i18n/navigation";
import { HotelType, useHotelStore } from "@/store/products/hotel";
import { useSearchStore } from "@/store/search";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import {
  Button,
  Container,
  Drawer,
  Grid,
  Group,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { useListState } from "@mantine/hooks";
import { IconFilter, IconMapPin } from "@tabler/icons-react";
import { filter, merge, pick } from "lodash";
import { useLocale, useTranslations } from "next-intl";
import { join } from "path";
import { useCallback, useEffect, useState } from "react";

const filterHotelData = (hotel: HotelType, filters: HotelListFiltersForm) => {
  if (filters.boardGroups.length > 0) {
    let result = true
    const boardGroups = hotel.hotelBoardGroups.split(",")

    boardGroups.map((boardGroup) => {
      if(boardGroup !== "" && !filters.boardGroups.includes(boardGroup)) {
        result = false
      }
    })

    return result
  }
  
  if (filters.stars.length > 0) {
    if(!filters.stars.includes(`${hotel.stars}`)) {
      return false
    }
  }

  if (filters.facilities.length > 0) {
    let result = true
    const facilities = hotel.hotelfreeamenities.split(",")

    facilities.map((facility) => {
      if(!filters.facilities.includes(facility)) {
        result = false
      }
    })

    return result
  }

  return true;
};

const HotelList = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const {
    hotelFilters,
    bookingHotel,
    filterOpt,
    hotelList,
    setBookingHotel,
    setFilterOpt,
    setHotelFilters,
    setHotelList,
  } = useHotelStore();
  const { hotelSearch } = useSearchStore();

  const [loading, startLoading, stopLoading] = useLoading();
  const [opened, setOpened] = useState(false);

  const [currentHotelList, hotelListHandlers] = useListState<HotelType>([]);

  const setCurrentHotelList = useCallback(() => {
    let list = filter(hotelList, (e) => filterHotelData(e, hotelFilters));
    
    console.log(hotelFilters)
    console.log(list)

    hotelListHandlers.setState(list);
    stopLoading();
  }, [hotelList, hotelFilters]);

  const checkFlightList = useCallback(async () => {
    if (loading) {
      return true;
    }

    startLoading();
    try {
      setBookingHotel(undefined);

      const res = await xiorInstance.post("/searchLocation", {
        product: "1",
        location: hotelSearch.hotel?.id,
        name: hotelSearch.hotel?.name,
        checkIn: convertDate(hotelSearch.checkIn),
        checkOut: convertDate(hotelSearch.checkOut),
        rooms: hotelSearch.rooms.map((e) =>
          merge(
            { adult: `${e.adult}` },
            e.child > 0 ? { child: `${e.child}` } : {}
          )
        ),
        language: locale,
      });

      console.log(res);

      setHotelList(res.data.list);
      setFilterOpt(
        pick(res.data, [
          "boardGroups",
          "facilities",
          "iconList",
          "ratings",
          "roomTypes",
          "stars",
          "themes",
        ])
      );
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  }, [loading, xiorInstance, hotelSearch]);

  useEffect(() => {
    startLoading();
    setCurrentHotelList();
  }, [hotelFilters, hotelList]);

  useEffect(() => {
    checkFlightList();
  }, [hotelSearch]);

  return (
    <Stack>
      <SearchArea type="hotel" />
      {loading && <HotelLoading />}

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t("Filters")}
        position="left"
        size="sm"
      >
        <HotelListFilters />
      </Drawer>

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3} visibleFrom="md">
            <Stack gap="xs">
              <ShowOnMap />
              <HotelListFilters />
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 9,
            }}
          >
            <Stack gap="xs">
              <ScrollArea offsetScrollbars scrollbarSize={7}>
                <Group gap="xs" wrap="nowrap">
                  <Button
                    onClick={() => push("/hotel/list/map")}
                    leftSection={<IconMapPin size={16} />}
                    hiddenFrom="md"
                  >
                    {t("Show on Map")}
                  </Button>
                  <Button
                    onClick={() => setOpened(true)}
                    leftSection={<IconFilter size={16} />}
                    hiddenFrom="md"
                    variant="default"
                  >
                    {t("Filters")}
                  </Button>
                  <FoodFilter />
                  <CancellationFilter />
                  <Sorting />
                </Group>
              </ScrollArea>
              {currentHotelList.slice(0, 20).map((hotel, i) => (
                <HotelListCard
                  key={`hotel-${i}`}
                  hotel={hotel}
                  onSelect={() => {
                    push(`/hotel/detail/${hotel.providerID}`);
                  }}
                />
              ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default HotelList;
