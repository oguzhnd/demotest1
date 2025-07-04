"use client";

// import TourImages from "@/components/TourPageElements/TourDetails/TourImages";
// import TourMapView from "@/components/TourPageElements/TourDetails/TourMapView";
// import Rooms from "@/components/TourPageElements/TourDetails/Rooms";
// import TourMapDetail from "@/components/TourPageElements/TourMapDetail";
import SearchArea from "@/components/SearchArea";
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
import { IconSwimming } from "@tabler/icons-react";
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
  const { scrollIntoView: scrollToRooms, targetRef: roomsTarget } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToDetails, targetRef: detailsTarget } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToAmenities, targetRef: amenitiesTarget } =
    useScrollIntoView<HTMLDivElement>({
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

      <SearchArea type="hotel" />
      <Container w="100%" size="xl" py={20}>
        <Stack gap="xs">
          <Group justify="space-between">
            <Stack gap="xs">
              <Stack gap={0}>
                <Group>
                  <Text size="xl" fw={500}>
                    {hotelDetails?.name}
                  </Text>
                  {/* <Text
                    size="sm"
                    c="white"
                    fw={500}
                    bg="green.9"
                    px="xs"
                    py={6}
                    lh={1}
                    style={{ borderRadius: 8 }}
                  >
                    {hotelDetails?.rating}
                  </Text> */}
                  <Rating
                    size="xs"
                    fractions={2}
                    value={hotelDetails?.star_rating}
                    count={Math.ceil(hotelDetails?.star_rating || 0)}
                    readOnly
                  />
                </Group>
                <Text size="xs" c="gray">
                  {hotelDetails?.address}
                </Text>
              </Stack>
              <Group gap="xs"></Group>
            </Stack>
            <Button radius="xl" mb="xs" onClick={() => scrollToRooms()}>
              Tekliflere Bak
            </Button>
          </Group>

          <Tabs
            defaultValue="Ana Sayfa"
            onChange={(value) => {
              if (value === "Ana Sayfa") {
                scrollToHome();
              } else if (value === "Odalar") {
                scrollToRooms();
              } else if (value === "Detaylar") {
                scrollToDetails();
              } else if (value === "Olanaklar") {
                scrollToAmenities();
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
                    {["Ana Sayfa", "Odalar", "Detaylar", "Olanaklar"].map(
                      (tab, i) => (
                        <Tabs.Tab
                          key={`tab-${i}`}
                          value={tab}
                          py="sm"
                          px="lg"
                          fw={500}
                          style={{ borderBottomWidth: 3 }}
                        >
                          {tab}
                        </Tabs.Tab>
                      )
                    )}
                  </Group>
                </ScrollArea>
              </Parent>
            </Tabs.List>
          </Tabs>

          <Stack ref={homeTarget} gap="xl">
            {/* <TourImages hotelDetails={hotelDetails} /> */}

            <Box ref={roomsTarget}>
              {/* <Rooms hotelName={hotelDetails?.name} /> */}
            </Box>

            <Stack ref={detailsTarget}>
              {hotelDetails?.description_struct.map(
                (
                  struct: {
                    title: string;
                    paragraphs: string[];
                  },
                  i: number
                ) => (
                  <Stack key={`struct-${i}`} gap={8}>
                    <Text size="lg" fw={500}>
                      {struct.title}
                    </Text>
                    {struct.paragraphs.map((paragraph: string, j: number) => (
                      <Text key={`paragraph-${j}`} size="sm" c="gray.7">
                        {paragraph}
                      </Text>
                    ))}
                  </Stack>
                )
              )}
            </Stack>

            <Stack ref={amenitiesTarget} gap={8}>
              <Text size="lg" fw={500}>
                Olanaklar
              </Text>

              <Box
                style={{
                  columnCount: matchesXs ? 1 : matchesSm ? 2 : 3,
                  gap: 30,
                }}
              >
                {hotelDetails?.amenity_groups.map(
                  (
                    group: {
                      group_name: string;
                      amenities: string[];
                      non_free_amenities: string[];
                    },
                    i: number
                  ) => (
                    <Stack
                      gap="xs"
                      key={`group-${i}`}
                      style={{ overflow: "hidden" }}
                      mb={30}
                    >
                      <Text size="sm" fw={500}>
                        {group.group_name}
                      </Text>

                      <SimpleGrid
                        cols={{
                          base: 3,
                          sm: 4,
                        }}
                        spacing={4}
                      >
                        {group.non_free_amenities?.map((e, j) => (
                          <Tooltip key={`item-${j}`} label={t("Paid")}>
                            <Paper
                              withBorder
                              p="xs"
                              style={{
                                borderColor: "var(--mantine-color-orange-3)",
                              }}
                              bg="orange.0"
                            >
                              <Stack gap={4} align="center ">
                                <IconSwimming size={20} />
                                <Text size="xs" fw={500} ta="center">
                                  {e}
                                </Text>
                              </Stack>
                            </Paper>
                          </Tooltip>
                        ))}
                        {group.amenities?.map((e, j) => (
                          <Paper key={`item-${j}`} withBorder p="xs">
                            <Stack gap={4} align="center ">
                              <IconSwimming size={20} />
                              <Text size="xs" fw={500} ta="center">
                                {e}
                              </Text>
                            </Stack>
                          </Paper>
                        ))}
                      </SimpleGrid>
                    </Stack>
                  )
                )}
              </Box>
            </Stack>

            {/* {matchesSm && <TourMapView hotelDetails={hotelDetails} />} */}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default TourDetail;
