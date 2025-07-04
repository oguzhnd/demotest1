"use client";

import SearchArea from "@/components/SearchArea";
import TourListCard from "@/components/TourPageElements/TourListCard";
import TourListFilters, {
  TourListFiltersForm,
} from "@/components/TourPageElements/TourListFilters";
import TourLoading from "@/components/TourPageElements/TourLoading";
import TourNotFound from "@/components/TourPageElements/TourNotFound";
import { useRouter } from "@/i18n/navigation";
import { useModalManager } from "@/store/managers/modal";
import { TourType, useTourStore } from "@/store/products/tour";
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
import { useDocumentTitle, useInViewport, useListState } from "@mantine/hooks";
import { IconFilter } from "@tabler/icons-react";
import { filter } from "lodash";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

const filterTourData = (
  tour: TourType,
  filters: TourListFiltersForm
): boolean => {
  return true;
};

const TourList = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const [title, setTitle] = useState(t("Loading"));
  useDocumentTitle(title);

  const {
    bookingTour,
    filterOpt,
    setBookingTour,
    setFilterOpt,
    setTourFilters,
    setTourList,
    tourFilters,
    tourList,
  } = useTourStore();
  const { tourSearch } = useSearchStore();
  const { openModal, closeModal } = useModalManager();

  const [loading, startLoading, stopLoading] = useLoading();
  const [opened, setOpened] = useState(false);

  const [currentTourList, tourListHandlers] = useListState<TourType>([]);

  const { ref, inViewport } = useInViewport();
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(true);

  useEffect(() => {
    if (inViewport) {
      setPage((p) => p + 1);
      setIsMore(currentTourList.length > limit * (page + 1));
    }
  }, [inViewport]);

  const setCurrentTourList = useCallback(() => {
    let list = filter(tourList, (e) => filterTourData(e, tourFilters));

    setIsMore(list.length > limit);

    tourListHandlers.setState(list);
    stopLoading();
  }, [tourList, tourFilters, limit]);

  const checkHotelList = useCallback(async () => {
    if (loading) {
      return true;
    }

    openModal("tourLoadingModal");
    startLoading();

    tourSearch.tour && setTitle(t("X Hotels", { X: tourSearch.tour }));

    try {
      // const res = await xiorInstance.post("/searchLocation", {
      //   product: "1",
      //   location: tourSearch.tour?.id,
      //   name: tourSearch.tour?.name,
      //   checkIn: convertDate(tourSearch.checkIn),
      //   checkOut: convertDate(tourSearch.checkOut),
      //   rooms: tourSearch.rooms.map((e) => ({
      //     adult: `${e.adult}`,
      //     child: e.child,
      //   })),
      //   language: locale,
      // });
      // console.log(res);
      // setTourList(res.data.list);
      // setFilterOpt(
      //   pick(res.data, [
      //     "boardGroups",
      //     "facilities",
      //     "iconList",
      //     "ratings",
      //     "roomTypes",
      //     "stars",
      //     "themes",
      //   ])
      // );
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
      closeModal("tourLoadingModal");
    }
  }, [loading, xiorInstance, tourSearch]);

  useEffect(() => {
    startLoading();
    setCurrentTourList();
  }, [tourFilters, tourList]);

  useEffect(() => {
    checkHotelList();
  }, [tourSearch]);

  return (
    <Stack>
      <SearchArea type="tour" />

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t("Filters")}
        position="left"
        size="sm"
      >
        <TourListFilters />
      </Drawer>

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3} visibleFrom="md">
            <TourListFilters />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 9,
            }}
          >
            <Stack gap="xs">
              {currentTourList.length > 0 && (
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
              )}

              {loading
                ? Array(5)
                    .fill("")
                    .map((_, i) => <TourLoading key={`loading-${i}`} />)
                : currentTourList.slice(0, limit * page).map((tour, i) => (
                    <TourListCard
                      key={`tour-${i}`}
                      tour={tour}
                      onSelect={() => {
                        push(`/tour/detail/${tour}`);
                      }}
                    />
                  ))}

              <TourListCard
                tour={{}}
                onSelect={() => {
                  push(`/tour/detail/1`);
                }}
              />

              {!loading && isMore && currentTourList.length > 1 && (
                <TourLoading ref={ref} />
              )}

              {currentTourList.length === 0 && !loading && <TourNotFound />}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default TourList;
