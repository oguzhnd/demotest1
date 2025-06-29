import { useHotelStore } from "@/store/products/hotel";
import { localeDateFormat } from "@/utils/tools";
import {
  Divider,
  Group,
  Image,
  Paper,
  Rating,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBed,
  IconMapPin,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const HotelDetails = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { bookingHotel, bookingOffer, bookingRoom } = useHotelStore();

  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Group wrap="nowrap" align="flex-start">
          <Image
            w={100}
            h={100}
            radius="md"
            src={bookingHotel?.image_key_full.replace("{size}", "x500")}
          />
          <Stack mih={100} gap={0}>
            <Text size="sm" fw={500}>
              {bookingHotel?.title}
            </Text>
            <Rating value={5} readOnly size="xs" />
            <Group gap={4} c="gray.7">
              <IconMapPin size={14} />
              <Text size="xs">
                {bookingHotel?.cityName}, {bookingHotel?.countryName}
              </Text>
            </Group>
            <Text size="xs">{bookingHotel?.address}</Text>
          </Stack>
        </Group>
        <SimpleGrid cols={2}>
          <Stack gap={0}>
            <Text size="xs" fw={500} c="gray.7">
              Giriş tarihi
            </Text>
            <Text size="sm" fw={500}>
              {localeDateFormat(bookingOffer?.checkIn, locale)}
            </Text>
          </Stack>
          <Stack gap={0}>
            <Text size="xs" fw={500} c="gray.7">
              Çıkış tarihi
            </Text>
            <Text size="sm" fw={500}>
              {localeDateFormat(bookingOffer?.checkOut, locale)}
            </Text>
          </Stack>
        </SimpleGrid>
        <Divider />
        <Stack gap={4}>
          <Group gap={6}>
            <IconUser size={16} />
            <Text size="sm" fw={500}>
              {bookingRoom?.night} gece, {bookingRoom?.travellers.length} {t("Guest")}
            </Text>
          </Group>
          {/* <Group gap={6}>
            <IconBed size={16} />
            <Text size="sm" fw={500} c="gray.7">
              1. Oda:
            </Text>
            <Text size="sm" fw={500}>
              İnfinity Oda
            </Text>
          </Group>
          <Group gap={6}>
            <IconBed size={16} />
            <Text size="sm" fw={500} c="gray.7">
              2. Oda:
            </Text>
            <Text size="sm" fw={500}>
              İnfinity Oda
            </Text>
          </Group> */}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default HotelDetails;
