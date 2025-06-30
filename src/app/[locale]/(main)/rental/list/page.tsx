"use client";

import RentalListCard from "@/components/RentalPageElements/RentalListCard";
import RentalListFilters, {
  RentalListFiltersForm,
} from "@/components/RentalPageElements/RentalListFilters";
import RentalLoading from "@/components/RentalPageElements/RentalLoading";
import RentalNotFound from "@/components/RentalPageElements/RentalNotFound";
import SearchArea from "@/components/SearchArea";
import { convertDate } from "@/components/SearchArea/Contents/Flight";
import { useRouter } from "@/i18n/navigation";
import { useFlightStore } from "@/store/products/flight";
import { RentalType, useRentalStore } from "@/store/products/rental";
import { useSearchStore } from "@/store/search";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import {
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { useInViewport, useListState } from "@mantine/hooks";
import { IconFilter } from "@tabler/icons-react";
import { filter } from "lodash";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

const filterFlightData = (
  rental: RentalType,
  filters: RentalListFiltersForm
) => {
  if (filters.transmission.length > 0) {
    if (!filters.transmission.includes(rental.carDetail[0].transmission)) {
      return false;
    }
  }

  if (filters.vendor.length > 0) {
    if (!filters.vendor.includes(rental.vendor.name)) {
      return false;
    }
  }

  if (filters.fuel.length > 0) {
    if (!filters.fuel.includes(rental.carDetail[0].fuel)) {
      return false;
    }
  }

  if (filters.brand.length > 0) {
    if (!filters.brand.includes(rental.carDetail[0].brand.toLowerCase())) {
      return false;
    }
  }

  if (filters.model.length > 0) {
    if (!filters.model.includes(rental.carDetail[0].model.toLowerCase())) {
      return false;
    }
  }

  if (filters.deliveryType.length > 0) {
    if (
      !filters.deliveryType.includes(
        rental.officeInfo.dropoffLocation.deliveryType
      )
    ) {
      return false;
    }
  }

  // if (filters.price) {
  //   const totalPrice = parseFloat(rental.totalPrice);
  //   return totalPrice >= filters.price[0] && totalPrice <= filters.price[1] + 1;
  // }

  return true;
};

const RentalList = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const {
    rentalList,
    setRentalList,
    rentalFilters,
    filterOpt,
    bookingRental,
    setBookingRental,
    setFilterOpt,
    setRentalFilters,
  } = useRentalStore();

  const { rentalSearch } = useSearchStore();

  const [loading, startLoading, stopLoading] = useLoading(true);
  const [opened, setOpened] = useState(false);

  const [currentRentalList, rentalListHandlers] = useListState<RentalType>([]);
  const [searchId, setSearchId] = useState<string | undefined>(undefined);
  const [tempId, setTempId] = useState<string | undefined>(undefined);

  const { ref, inViewport } = useInViewport();
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    if (inViewport) {
      setPage((p) => p + 1);
      setIsMore(currentRentalList.length > limit * (page + 1));
    }
  }, [inViewport]);

  const setCurrentFlightList = useCallback(() => {
    let list = filter(rentalList, (e) => filterFlightData(e, rentalFilters));

    setIsMore(list.length > limit);

    rentalListHandlers.setState(list);
    stopLoading();
  }, [rentalFilters, rentalList, rentalSearch, rentalSearch]);

  useEffect(() => {
    startLoading();
    setCurrentFlightList();
  }, [rentalFilters, rentalList]);

  const checkFlightList = useCallback(async () => {
    startLoading();
    try {
      setBookingRental(undefined);

      const res = await xiorInstance.post("/searchCar", {
        pickupLocation: rentalSearch.pickupLocation?.name,
        pickupLocationId: rentalSearch.pickupLocation?.id,
        dropoffLocationId: rentalSearch.dropoffLocation?.id,
        dropoffLocation: rentalSearch.dropoffLocation?.name,
        pickupDate: convertDate(rentalSearch.pickupDate),
        pickupTime: rentalSearch.pickupTime,
        dropoffDate: convertDate(rentalSearch.deliveryDate),
        dropoffTime: rentalSearch.deliveryTime,
        Language: locale,
      });

      console.log(res);

      setSearchId(res.data.searchId);
      setTempId(res.data.tempId);

      setRentalList(res.data.result);
      setFilterOpt(res.data.carFilter);
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  }, [xiorInstance, rentalSearch, locale]);

  const handleSelectRental = useCallback(
    (rental: RentalType) => {
      setBookingRental(rental, searchId, tempId);
      push(`/rental/reservation/${rental.productId}`);
    },
    [rentalSearch, searchId, tempId]
  );

  useEffect(() => {
    checkFlightList();
  }, [rentalSearch]);

  return (
    <Stack>
      <SearchArea type="rental" />

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t("Filters")}
        position="left"
        size="sm"
      >
        <RentalListFilters />
      </Drawer>

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3} visibleFrom="md">
            <Stack gap="xs">
              <RentalListFilters />
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 9,
            }}
          >
            <Stack gap="xs">
              <ScrollArea offsetScrollbars scrollbarSize={7} hiddenFrom="md">
                <Group gap="xs" wrap="nowrap">
                  <Button
                    onClick={() => setOpened(true)}
                    leftSection={<IconFilter size={16} />}
                    hiddenFrom="md"
                    variant="default"
                  >
                    {t("Filters")}
                  </Button>
                </Group>
              </ScrollArea>

              {loading
                ? Array(4)
                    .fill("")
                    .map((_, i) => <RentalLoading key={`loading-${i}`} />)
                : currentRentalList.map((rental, i) => (
                    <RentalListCard
                      key={`rental-${i}`}
                      rental={rental}
                      onSelect={() => {
                        handleSelectRental(rental);
                      }}
                    />
                  ))}

              {!loading && isMore && currentRentalList.length > 1 && (
                <RentalLoading ref={ref} />
              )}

              {currentRentalList.length === 0 && !loading && <RentalNotFound />}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default RentalList;
