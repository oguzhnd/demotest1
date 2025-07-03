"use client";

import HotelListFilters, {
  HotelListFiltersForm,
} from "@/components/HotelPageElements/HotelListFilters";
import { useRouter } from "@/i18n/navigation";
import {
  ActionIcon,
  Button,
  Drawer,
  Group,
  LoadingOverlay,
  Stack,
  Text,
} from "@mantine/core";
import { IconFilter, IconX } from "@tabler/icons-react";
import { InfoWindow, Map } from "@vis.gl/react-google-maps";
import { useLocale, useTranslations } from "next-intl";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CastlesGeojson } from "./hotels";
import { Feature, Point } from "geojson";
import { ClusteredMarkers } from "@/components/HotelPageElements/_MapList/ClusteredMarkers";
import HotelListCard from "@/components/HotelPageElements/HotelListCard";
import { HotelType, useHotelStore } from "@/store/products/hotel";
import { useListState, useMediaQuery } from "@mantine/hooks";
import { filter, pick } from "lodash";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import { useSearchStore } from "@/store/search";
import { convertDate } from "@/components/SearchArea/Contents/Flight";

const defaultMapProps = {
  mapContainerStyle: {
    width: "100%",
    height: "calc(100vh - 60px)",
  },
  center: {
    lat: 41.10711,
    lng: 29.019195,
  },
  zoom: 9,
  options: {
    tilt: 0,
    gestureHandling: "auto",
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  },
};
const filterHotelData = (
  hotel: HotelType,
  filters: HotelListFiltersForm
): boolean => {
  if (filters.boardGroups.length > 0) {
    let result = true;
    const boardGroups = hotel.hotelBoardGroups.split(",");

    boardGroups.map((boardGroup) => {
      if (boardGroup !== "" && !filters.boardGroups.includes(boardGroup)) {
        result = false;
      }
    });

    return result;
  }

  if (filters.stars.length > 0) {
    if (!filters.stars.includes(`${hotel.stars}`)) {
      return false;
    }
  }

  if (filters.facilities.length > 0) {
    let result = true;
    const facilities = hotel.hotelfreeamenities.split(",");

    facilities.map((facility) => {
      if (!filters.facilities.includes(facility)) {
        result = false;
      }
    });

    return result;
  }

  return true;
};

const HotelListMap = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const [loading, startLoading, stopLoading] = useLoading();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const {
    hotelFilters,
    hotelList,
    setBookingHotel,
    setFilterOpt,
    setHotelList,
  } = useHotelStore();
  const { hotelSearch } = useSearchStore();
  const [opened, setOpened] = useState(false);

  const [center, setCenter] = useState({
    lat: 41.10711,
    lng: 29.019195,
  });

  const [geojson, setGeojson] = useState<CastlesGeojson | null>(null);
  const [activeHotel, setActiveHotel] = useState<null | string>(null);

  const [currentHotelList, hotelListHandlers] = useListState<HotelType>([]);

  const activeHotelData = useMemo(
    () => hotelList.find((e) => e.hotelID === activeHotel),
    [activeHotel, hotelList]
  );

  const setCurrentHotelList = useCallback(() => {
    let list = filter(hotelList, (e) => filterHotelData(e, hotelFilters));

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
        rooms: hotelSearch.rooms.map((e) => ({
          adult: `${e.adult}`,
          child: e.child,
        })),
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

  useEffect(() => {
    setCenter({
      lat: +currentHotelList[0]?.latitude || 41.10711,
      lng: +currentHotelList[0]?.longitude || 29.019195,
    });
    setGeojson({
      type: "FeatureCollection",
      features: currentHotelList.map((e) => ({
        type: "Feature",
        id: e.hotelID,
        geometry: {
          type: "Point",
          coordinates: [+e.longitude, +e.latitude],
        },
        properties: {
          name: e.title,
          price:
            +e.roomDetail[0].priceDetail.salesPrice * e.roomDetail[0].night,
        },
      })),
    });
  }, [currentHotelList]);

  return (
    <Stack gap={0}>
      <LoadingOverlay visible={loading} />
      <Group h={60} px="sm" justify="space-between">
        <Group>
          <Button
            leftSection={<IconFilter size={16} />}
            variant="subtle"
            onClick={() => setOpened(true)}
          >
            {t("Filters")}
          </Button>
          <Text fw={500}>Paris, Fransa</Text>
        </Group>

        <ActionIcon
          size="lg"
          variant="subtle"
          onClick={() => push("/hotel/list")}
        >
          <IconX size={16} />
        </ActionIcon>
      </Group>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="sm"
        position="left"
        title={t("Filters")}
      >
        <HotelListFilters />
      </Drawer>

      <Map
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        style={{ width: "100%", height: "calc(100vh - 60px)" }}
        defaultCenter={center}
        center={center}
        onCenterChanged={(event) => {
          setCenter(event.detail.center);
        }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        scaleControl={false}
        onClick={() => setActiveHotel(null)}
      >
        {geojson && (
          <ClusteredMarkers
            geojson={geojson}
            activeHotel={activeHotel}
            onClick={setActiveHotel}
          />
        )}
      </Map>

      {activeHotel && activeHotelData && (
        <HotelListCard
          hotel={activeHotelData}
          onSelect={() => push(`/hotel/detail/${activeHotelData.providerID}`)}
          onClose={() => setActiveHotel(null)}
          style={{
            width: matchesSm ? "calc(100% - 32px)" : undefined,
            position: "fixed",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
    </Stack>
  );
};

export default HotelListMap;
