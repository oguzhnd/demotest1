"use client";

// import TourImages from "@/components/TourPageElements/TourDetails/TourImages";
// import TourMapView from "@/components/TourPageElements/TourDetails/TourMapView";
// import Rooms from "@/components/TourPageElements/TourDetails/Rooms";
// import TourMapDetail from "@/components/TourPageElements/TourMapDetail";
import SearchArea from "@/components/SearchArea";
import TourCities from "@/components/TourPageElements/TourDetails/TourCities/page";
import TourGeneralInformations from "@/components/TourPageElements/TourDetails/TourGeneralInformations/page";
import TourImages from "@/components/TourPageElements/TourDetails/TourImages";
import TourPricesAndDates from "@/components/TourPageElements/TourDetails/TourPricesAndDates/page";
import TourProgram from "@/components/TourPageElements/TourDetails/TourProgram/page";
import TourReservation from "@/components/TourPageElements/TourDetails/TourReservation/page";
import { useModalManager } from "@/store/managers/modal";
import { useSearchStore } from "@/store/search";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import {
  Box,
  Button,
  Container,
  Group,
  LoadingOverlay,
  Paper,
  Rating,
  ScrollArea,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  useDocumentTitle,
  useMediaQuery,
  useScrollIntoView,
} from "@mantine/hooks";
import {
  IconMapPin,
  IconMapPinFilled,
  IconSwimming,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const TourDetail = () => {
  const t = useTranslations();
  const locale = useLocale();

  const params = useParams();

  const [title, setTitle] = useState(t("Loading"));
  useDocumentTitle(title);

  const { tourSearch } = useSearchStore();
  const { openModal, closeModal } = useModalManager();

  const [loading, startLoading, stopLoading] = useLoading();
  const [hotelDetails, setTourDetails] = useState<any | undefined>(undefined);

  const matchesSm = useMediaQuery("(max-width: 48em)");
  const matchesXs = useMediaQuery("(max-width: 36em)");

  const { scrollIntoView: scrollToHome, targetRef: homeTarget } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToReservation, targetRef: reservationTarget } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToProgram, targetRef: programTarget } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToPrices, targetRef: pricesTarget } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToCities, targetRef: citiesTarget } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const {
    scrollIntoView: scrollToInformations,
    targetRef: informationsTarget,
  } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  const getTourDetails = useCallback(async () => {
    if (loading) {
      return;
    }

    startLoading();

    try {
      const resDetails = await xiorInstance.post("/getTourInfo", {
        hotelId: params.id,
        language: locale,
      });

      setTitle(resDetails.data.result.name);

      setTourDetails(resDetails.data.result);
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  }, [loading, xiorInstance, params.id, tourSearch]);

  useEffect(() => {
    getTourDetails();
  }, [params.id]);

  const Parent = matchesSm ? Stack : Group;

  return (
    <Stack>
      <LoadingOverlay visible={loading} pos="fixed" />

      {/* <TourMapDetail /> */}

      <SearchArea type="tour" />
      <Container w="100%" size="xl" py={20}>
        <Stack gap="xs">
          <Group justify="space-between">
            <Stack gap="xs">
              <Stack gap={0}>
                <Group>
                  <Text size="xl" fw={500}>
                    Antalya’dan Direkt Sefer İle Büyük Balkan Turu Rotası
                  </Text>
                  <Rating
                    size="xs"
                    fractions={2}
                    value={hotelDetails?.star_rating}
                    count={Math.ceil(hotelDetails?.star_rating || 0)}
                    readOnly
                  />
                </Group>
                <Group gap={4} wrap="nowrap" align="flex-start">
                  <IconMapPinFilled
                    size={16}
                    color="var(--mantine-color-red-7)"
                    style={{ flexShrink: 0 }}
                  />
                  <Text size="sm" c="gray.7" lh={1}>
                    Trebinje - Saraybosna - Üsküp - Ohrid - Belgrad - Mostar -
                    Tiran - Budva - Kotor
                  </Text>
                </Group>
              </Stack>
              <Group gap="xs"></Group>
            </Stack>
            <Button radius="xl" mb="xs" onClick={() => scrollToReservation()}>
              {t("Make a reservation")}
            </Button>
          </Group>

          <Tabs
            defaultValue="Home Page"
            onChange={(value) => {
              if (value === "Home Page") {
                scrollToHome();
              } else if (value === "Reservation") {
                scrollToReservation();
              } else if (value === "Tour Program") {
                scrollToProgram();
              } else if (value === "Prices and Dates") {
                scrollToPrices();
              } else if (value === "Cities") {
                scrollToCities();
              } else if (value === "General Informations") {
                scrollToInformations();
              }
            }}
          >
            <Tabs.List>
              <Parent
                w="100%"
                justify="space-between"
                align={matchesSm ? undefined : "flex-end"}
              >
                <ScrollArea scrollbarSize={7}>
                  <Group gap={0} wrap="nowrap">
                    {[
                      "Home Page",
                      "Reservation",
                      "Tour Program",
                      "Prices and Dates",
                      "General Informations",
                      "Cities",
                    ].map((tab, i) => (
                      <Tabs.Tab
                        key={`tab-${i}`}
                        value={tab}
                        py="sm"
                        px="lg"
                        fw={500}
                        style={{ borderBottomWidth: 3 }}
                      >
                        {t(tab)}
                      </Tabs.Tab>
                    ))}
                  </Group>
                </ScrollArea>
              </Parent>
            </Tabs.List>
          </Tabs>

          <Stack ref={homeTarget} gap="xl">
            <TourImages tourDetails={undefined} />

            <Box ref={reservationTarget}>
              <TourReservation />
            </Box>

            <Box ref={programTarget}>
              <TourProgram />
            </Box>

            <Box ref={pricesTarget}>
              <TourPricesAndDates />
            </Box>

            <Box ref={informationsTarget}>
              <TourGeneralInformations />
            </Box>

            <Box ref={citiesTarget}>
              <TourCities />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default TourDetail;
