import { useRouter } from "@/i18n/navigation";
import {
  Badge,
  Button,
  Divider,
  Grid,
  Group,
  HoverCard,
  Image,
  Loader,
  Paper,
  Stack,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconCurrencyLira,
  IconGift,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React, { FC, useCallback, useEffect, useState } from "react";
import Room from "./Room";
import { entries, isEqual } from "lodash";
import { localeDateFormat } from "@/utils/tools";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import { useParams } from "next/navigation";
import { convertDate } from "@/components/SearchArea/Contents/Flight";
import { useSearchStore } from "@/store/search";
import { HotelType, useHotelStore } from "@/store/products/hotel";

export interface RoomDetailType {
  roomId: "1a451258-2195-4474-9809-b7088bfcd16d";
  night: 3;
  isAvailable: true;
  availability: 1;
  isRefundable: true;
  offerId: "2$2$TR~^005^~23497~^005^~527.88978000~^005^~~^005^~0~^005^~9fefa7c8-57cb-4d6f-a975-ac3c474aa38a";
  price: "533.20";
  currency: "EUR";
  expiresOn: "2025-06-27T12:16:54.3580382Z";
  checkIn: "2025-07-15T00:00:00";
  providerRoomId: "1207";
  roomName: "Junior Suite";
  boardId: "2";
  boardName: "Ultra All Inclusive";
  provider: "Paximum";
  boardGroupsRooms: "Ultra All Inclusive";
  stopSaleGuaranteed: 0;
  stopSalesStandart: false;
  travellers: [
    {
      type: 1;
      age: 0;
      nationality: "RU";
    },
    {
      type: 1;
      age: 0;
      nationality: "RU";
    }
  ];
  cancellationPolicies: [
    {
      endDate: "2025-07-11T03:00:00";
      price: 527.89;
      currency: "EUR";
    }
  ];
  rooms: [
    {
      roomName: "Junior Suite";
      boardName: "Ultra All Inclusive";
    }
  ];
  priceDetail: {
    roomPrice: 527.89;
    nttCom: "5.28";
    salesPrice: "533.20";
  };
}

const Rooms: FC<{
  hotelName: string;
}> = ({ hotelName }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { hotelSearch } = useSearchStore();
  const { setBookingHotel, setBookingOffer, setBookingRoom } = useHotelStore();

  const { push } = useRouter();
  const params = useParams();

  const [loading, startLoading, stopLoading] = useLoading();

  const [hotel, setHotel] = useState<HotelType | undefined>(undefined);
  const [groupRooms, setGroupRooms] = useState<
    Record<string, RoomDetailType[]> | undefined
  >(undefined);
  const [searchId, setSearchId] = useState<string | undefined>("");

  const getHotelInformations = useCallback(async () => {
    if (loading || !hotelName) {
      return;
    }

    startLoading();

    try {
      console.log("hotelName", hotelName);
      const res = await xiorInstance.post("/searchHotel", {
        product: "1",
        hotel: params.id,
        name: hotelName,
        checkIn: convertDate(hotelSearch.checkIn),
        checkOut: convertDate(hotelSearch.checkOut),
        rooms: hotelSearch.rooms.map((e) => ({
          adult: `${e.adult}`,
          child: e.child,
        })),
        language: locale,
      });

      console.log("rooms", res);

      setSearchId(res.data.searchId);

      setGroupRooms(res.data.groupRooms);
      setHotel(res.data.hotelData[0]);

      setBookingHotel(res.data.hotelData[0]);
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  }, [hotelName, loading, xiorInstance, params.id, hotelSearch]);

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
    getHotelInformations();
  }, [params.id, hotelName]);

  return loading ? (
    <Group justify="center">
      <Paper py="md" px="xl" bg="gray.1">
        <Stack gap="xs" align="center">
          <Loader />
          <Text size="sm" fw={500}>{t("Loading Rooms")}</Text>
        </Stack>
      </Paper>
    </Group>
  ) : (
    <Group w="100%">
      <Stack w="100%">
        <Grid
          visibleFrom="sm"
          styles={{
            inner: {
              borderRadius: "var(--mantine-radius-md)",
              overflow: "hidden",
              background: "var(--mantine-color-blue-0)",
            },
            col: {
              fontSize: "var(--mantine-font-size-sm)",
              fontWeight: 600,
              padding: "8px 10px",
              color: "var(--mantine-color-dark-9)",
            },
          }}
        >
          <Grid.Col
            span={3}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Room informations")}
          </Grid.Col>
          <Grid.Col
            span={4}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Conditions")}
          </Grid.Col>
          <Grid.Col
            span={1}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Number of guests")}
          </Grid.Col>
          <Grid.Col
            span={2}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Price for 1 night")}
          </Grid.Col>
          {/* <Grid.Col
            span={1}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Number of rooms")}
          </Grid.Col> */}
          <Grid.Col span={2}></Grid.Col>
        </Grid>

        {entries(groupRooms).map(([groupName, rooms], i) => {
          return (
            <React.Fragment key={`details-${i}`}>
              {i > 0 && <Divider />}
              <Grid
                w="100%"
                styles={{
                  col: {
                    padding: "8px 10px",
                  },
                }}
              >
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 3,
                  }}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <Stack gap="xs">
                    {/* <Image
                    radius="md"
                    h={160}
                    src={room.images[0].replace("{size}", "x500")}
                  /> */}
                    <Text size="sm" fw={600} c="blue">
                      {groupName}
                    </Text>
                    <Group gap={4}>
                      {/* {details.boardGroupsRooms.split(",").map((item, i) =>
                      item !== "" ? (
                        <Badge
                          key={`item-${i}`}
                          bg="gray.1"
                          c="dark.9"
                          radius="sm"
                          tt="capitalize"
                          fw={500}
                        >
                          {item}
                        </Badge>
                      ) : undefined
                    )}
                    <Tooltip
                      label={t("At a price of Y until date X", {
                        X: localeDateFormat(
                          details.cancellationPolicies[0].endDate,
                          locale
                        ),
                        Y: `${details.cancellationPolicies[0].price.toLocaleString(
                          locale
                        )} ${details.cancellationPolicies[0].currency}`,
                      })}
                    >
                      <Badge
                        bg="red.1"
                        c="red"
                        radius="sm"
                        tt="capitalize"
                        fw={500}
                      >
                        {t("Cancellation Policy")}
                      </Badge>
                    </Tooltip> */}
                    </Group>
                  </Stack>
                </Grid.Col>
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 9,
                  }}
                >
                  <Stack>
                    {rooms.map((room, j) => {
                      return (
                        <Room
                          key={`room-${j}`}
                          room={room.rooms[0]}
                          details={room}
                          onSelect={() => handleRoomSelect(room)}
                        />
                      );
                    })}
                  </Stack>
                </Grid.Col>
              </Grid>
            </React.Fragment>
          );
        })}
      </Stack>
    </Group>
  );
};

export default Rooms;
