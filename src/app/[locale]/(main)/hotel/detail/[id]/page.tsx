"use client";

import HotelImages from "@/components/HotelPageElements/HotelDetails/HotelImages";
import HotelMapView from "@/components/HotelPageElements/HotelDetails/HotelMapView";
import Rooms, {
  RoomDetailType,
} from "@/components/HotelPageElements/HotelDetails/Rooms";
import { facilities } from "@/components/HotelPageElements/HotelListFilters/Elements/FacilitiesAndFeatures";
import HotelMapDetail from "@/components/HotelPageElements/HotelMapDetail";
import SearchArea from "@/components/SearchArea";
import { convertDate } from "@/components/SearchArea/Contents/Flight";
import { useRouter } from "@/i18n/navigation";
import { useModalManager } from "@/store/managers/modal";
import { HotelType, useHotelStore } from "@/store/products/hotel";
import { useSearchStore } from "@/store/search";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Image,
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
import { useMediaQuery } from "@mantine/hooks";
import {
  IconChevronRight,
  IconMapPin,
  IconMapPinFilled,
  IconSpeakerphone,
  IconSwimming,
} from "@tabler/icons-react";
import { merge } from "lodash";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const HotelDetail = () => {
  const t = useTranslations();
  const locale = useLocale();

  const params = useParams();
  const { push } = useRouter();

  const { hotelSearch } = useSearchStore();
  const { setBookingHotel, setBookingOffer, setBookingRoom } = useHotelStore();

  const [loading, startLoading, stopLoading] = useLoading();
  const [hotel, setHotel] = useState<HotelType | undefined>(undefined);
  const [groupRooms, setGroupRooms] = useState<
    Record<string, RoomDetailType[]> | undefined
  >(undefined);
  const [hotelDetails, setHotelDetails] = useState<any | undefined>(undefined);

  const [searchId, setSearchId] = useState<string | undefined>("");

  const matchesSm = useMediaQuery("(max-width: 48em)");
  const matchesXs = useMediaQuery("(max-width: 36em)");

  const getHotelDetails = useCallback(async () => {
    if (loading) {
      return;
    }

    startLoading();

    try {
      const resDetails = await xiorInstance.post("/getHotelInfo", {
        hotelId: params.id,
        language: locale,
      });

      console.log(resDetails);

      setHotelDetails(resDetails.data.result);

      const res = await xiorInstance.post("/searchHotel", {
        product: "1",
        hotel: params.id,
        name: resDetails.data.result.name,
        checkIn: convertDate(hotelSearch.checkIn),
        checkOut: convertDate(hotelSearch.checkOut),
        rooms: hotelSearch.rooms.map((e) => ({
          adult: `${e.adult}`,
          child: e.child,
        })),
        language: locale,
      });

      console.log(res);

      setSearchId(res.data.searchId);

      setGroupRooms(res.data.groupRooms);
      setHotel(res.data.hotelData[0]);
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  }, [loading, xiorInstance, params.id, hotelSearch]);

  const handleRoomSelect = useCallback(
    async (room: RoomDetailType) => {
      startLoading();

      try {
        const res = await xiorInstance.post("/getOfferDetail", {
          tempId: hotel?.hotelID,
          searchId: searchId,
          roomId: room.roomId,
        });

        console.log(res);

        if (res.data.error === false) {
          setBookingHotel(res.data.hotelDetail);
          setBookingOffer(res.data.offers[0]);
          setBookingRoom(room);

          push(`/hotel/reservation/${res.data.offers[0].offerId}`);
        }
      } catch (err) {
        console.error(err);
      } finally {
        stopLoading();
      }
    },
    [hotel, searchId]
  );

  useEffect(() => {
    getHotelDetails();
  }, [params.id]);

  const Parent = matchesSm ? Stack : Group;

  return (
    <Stack pos="relative">
      <LoadingOverlay visible={loading} />

      <HotelMapDetail />

      <SearchArea type="hotel" />
      <Container w="100%" size="xl" py={20}>
        <Stack gap="xs">
          <Group justify="space-between">
            <Stack gap="xs">
              <Stack gap={0}>
                <Group>
                  <Text size="xl" fw={500}>
                    {hotel?.title}
                  </Text>
                  <Text
                    size="sm"
                    c="white"
                    fw={500}
                    bg="green.9"
                    px="xs"
                    py={6}
                    lh={1}
                    style={{ borderRadius: 8 }}
                  >
                    {hotel?.rating}
                  </Text>
                  <Rating
                    size="xs"
                    fractions={2}
                    value={hotel?.stars}
                    count={Math.ceil(hotel?.stars || 0)}
                    readOnly
                  />
                </Group>
                <Text size="xs" c="gray">
                  {hotel?.address}
                </Text>
              </Stack>
              <Group gap="xs"></Group>
            </Stack>
            <Button radius="xl" mb="xs">
              Tekliflere Bak
            </Button>
          </Group>

          <Tabs defaultValue="Ana Sayfa">
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

          <Stack gap="xl">
            <HotelImages hotelDetails={hotelDetails} />

            {groupRooms && hotelDetails?.room_groups && (
              <Rooms
                groupRooms={groupRooms}
                rooms={hotelDetails?.room_groups}
                handleRoomSelect={(room) => handleRoomSelect(room)}
              />
            )}

            <Stack>
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

            <Stack gap={8}>
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

            {matchesSm && <HotelMapView hotelDetails={hotelDetails} />}
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HotelDetail;
