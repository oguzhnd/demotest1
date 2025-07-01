"use client";

import FlightListCard from "@/components/FlightPageElements/FlightListCard";
import FlightListFilters, {
  FlightListFiltersForm,
} from "@/components/FlightPageElements/FlightListFilters";
import FlightLoading from "@/components/FlightPageElements/FlightLoading";
import FlightNotFound from "@/components/FlightPageElements/FlightNotFound";
import ReservationNotice from "@/components/FlightPageElements/ReservationNotice";
import SearchArea from "@/components/SearchArea";
import { convertDate } from "@/components/SearchArea/Contents/Flight";
import { useRouter } from "@/i18n/navigation";
import { FlightType, useFlightStore } from "@/store/products/flight";
import { useSearchStore } from "@/store/search";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import {
  ActionIcon,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { useInViewport, useListState } from "@mantine/hooks";
import { IconChevronRight, IconFilter, IconX } from "@tabler/icons-react";
import { filter, isDate } from "lodash";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

const filterFlightData = (
  flight: FlightType,
  filters: FlightListFiltersForm
) => {
  if (filters.transfers.length > 0) {
    const legCount = flight.legCount;
    if (
      !filters.transfers.includes(
        legCount === 1 ? "0" : legCount === 2 ? "1" : "2+"
      )
    ) {
      return false;
    }
  }

  if (filters.cabin.length > 0) {
    let r = false;

    flight.AlternativePrices.map((e) => {
      if (e.Bag.some((c) => filters.baggages.includes(+c.BaggageValue))) {
        r = true;
      }
    });

    if (!r) {
      return false;
    }
  }

  if (filters.cabin.length > 0) {
    const lowerCaseClasses = filters.cabin.map((className) =>
      className.toLowerCase()
    );
    let r = false;

    flight.AlternativePrices.map((e) => {
      if (
        e.class
          .map((c) => c.toLowerCase())
          .some((c) => lowerCaseClasses.includes(c))
      ) {
        r = true;
      }
    });

    if (!r) {
      return false;
    }
  }

  if (filters.price) {
    const totalPrice = parseFloat(flight.totalPrice);
    return totalPrice >= filters.price[0] && totalPrice <= filters.price[1] + 1;
  }

  if (filters.airlines.length > 0) {
    if (!filters.airlines.includes(flight.airway)) {
      return false;
    }
  }

  if (filters.hours) {
    const flightTime = parseFloat(flight.totalTimeM);
    return (
      flightTime >= filters.hours[0] * 60 &&
      flightTime <= filters.hours[1] * 60 + 1
    );
  }

  if (filters.airports.length > 0) {
    let r = false;

    flight.legInfo.map((leg) => {
      if ([leg.dName, leg.aName].some((e) => filters.airports.includes(e))) {
        r = true;
      }
    });

    if (!r) {
      return false;
    }
  }

  return true;
};

const FlightList = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const {
    flightList,
    setFlightList,
    flightFilters,
    setFilterOpt,
    bookingFlight,
    setBookingFlight,
    setReturnFlight,
  } = useFlightStore();

  const { flightSearch } = useSearchStore();

  const [loading, startLoading, stopLoading] = useLoading();
  const [opened, setOpened] = useState(false);

  const [currentFlightList, flightListHandlers] = useListState<FlightType>([]);
  const [departureSelected, setDepartureSelected] = useState(false);

  const { ref, inViewport } = useInViewport();
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    if (inViewport) {
      setPage((p) => p + 1);
      setIsMore(currentFlightList.length > limit * (page + 1));
    }
  }, [inViewport]);

  const setCurrentFlightList = useCallback(() => {
    let list = flightList.filter((e) => {
      return flightSearch.type === "one-way"
        ? true
        : !departureSelected
        ? e.returnFlight === "false"
        : e.returnFlight === "true";
    });

    list = filter(list, (e) => filterFlightData(e, flightFilters));
    setIsMore(list.length > limit);

    flightListHandlers.setState(list);
    stopLoading();
  }, [
    flightFilters,
    flightList,
    flightSearch,
    flightSearch.type,
    departureSelected,
    limit,
  ]);

  const checkFlightList = useCallback(async () => {
    if (loading) {
      return true;
    }

    startLoading();
    
    try {
      setDepartureSelected(false);
      setBookingFlight(undefined);
      setReturnFlight(undefined);

      const res = await xiorInstance.post("/searchFlight", {
        dep:
          flightSearch.dep?.type === 1
            ? flightSearch.dep.city?.id
            : flightSearch.dep?.airport?.id,
        arr:
          flightSearch.arr?.type === 1
            ? flightSearch.arr.city?.id
            : flightSearch.arr?.airport?.id,
        dDate: convertDate(flightSearch.departureDate),
        aDate: convertDate(flightSearch.returnDate),
        adt: flightSearch.passengers.adult + "",
        chd: flightSearch.passengers.child + "",
        inf: flightSearch.passengers.baby + "",
        serviceTypes: "",
        nonStop: "0",
      });

      console.log(res);

      setFlightList(res.data.result);
      setFilterOpt(res.data.filterOpt);
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  }, [xiorInstance, flightSearch, loading]);

  const handleSelectFlight = useCallback(
    (flight: FlightType, packetIndex: number) => {
      if (flightSearch.type === "round-trip") {
        if (!departureSelected) {
          setDepartureSelected(true);
          setBookingFlight({ ...flight, packetIndex });
        } else {
          setReturnFlight({
            ...flight,
            packetIndex,
          });
          push(`/flight/reservation/${flight.searchId}`);
        }
      } else {
        setBookingFlight({
          ...flight,
          packetIndex,
        });
        push(`/flight/reservation/${flight.searchId}`);
      }
    },
    [flightSearch, departureSelected]
  );

  useEffect(() => {
    startLoading();
    setCurrentFlightList();
  }, [flightFilters, flightList, departureSelected]);

  useEffect(() => {
    checkFlightList();
  }, [flightSearch]);

  return (
    <Stack>
      <Stack gap={0}>
        <SearchArea type="flight" />
      </Stack>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t("Filters")}
        position="left"
        size="sm"
      >
        <ReservationNotice />
        <FlightListFilters />
      </Drawer>

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3} visibleFrom="md">
            <Stack gap="xs">
              <ReservationNotice />
              <FlightListFilters />
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

              <Text size="lg" fw={500}>
                {currentFlightList.length} {t("Flights Found")}
              </Text>

              {departureSelected && bookingFlight && (
                <Paper p="sm" bg="gray.0" withBorder radius="md">
                  <Stack gap={8}>
                    <Group justify="space-between">
                      <Group>
                        <Text fw={500}>{t("Departure Flight")}</Text>

                        <Group gap={4} c="gray">
                          <Text size="sm" lh={1}>
                            SAW
                          </Text>
                          <IconChevronRight size={14} />
                          <Text size="sm" lh={1}>
                            AYT
                          </Text>
                        </Group>
                      </Group>

                      <ActionIcon
                        variant="subtle"
                        color="dark"
                        onClick={() => {
                          setBookingFlight(undefined);
                          setDepartureSelected(false);
                        }}
                      >
                        <IconX size={16} />
                      </ActionIcon>
                    </Group>
                    <FlightListCard flight={bookingFlight} />
                  </Stack>
                </Paper>
              )}
              {departureSelected && bookingFlight && <Divider />}

              {departureSelected && bookingFlight && (
                <Group>
                  <Text fw={500}>{t("Return Flight")}</Text>

                  {/* <Group gap={4} c="gray">
                    <Text size="sm" lh={1}>
                      AYT
                    </Text>
                    <IconChevronRight size={14} />
                    <Text size="sm" lh={1}>
                      SAW
                    </Text>
                  </Group> */}
                </Group>
              )}

              {loading
                ? Array(4)
                    .fill("")
                    .map((_, i) => <FlightLoading key={`loading-${i}`} />)
                : currentFlightList
                    .slice(0, limit * page)
                    .map((flight, i) => (
                      <FlightListCard
                        flight={flight}
                        key={`flight-${i}`}
                        onSelect={(pkgIndex) =>
                          handleSelectFlight(flight, pkgIndex)
                        }
                      />
                    ))}

              {!loading && isMore && currentFlightList.length > 1 && (
                <FlightLoading ref={ref} />
              )}

              {(currentFlightList.length === 0 && !loading) && <FlightNotFound />}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default FlightList;
