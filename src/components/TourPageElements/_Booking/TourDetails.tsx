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
  IconCalendarMonth,
  IconLocationFilled,
  IconMapPin,
  IconMoon,
  IconPlane,
  IconSun,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const TourDetails = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { bookingHotel, bookingOffer, bookingRoom } = useHotelStore();

  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Text size="sm" fw={500}>
          Antalya’dan Direkt Sefer İle Büyük Balkan Turu Rotası
        </Text>
        <SimpleGrid
          cols={{
            base: 1,
            xs: 2,
          }}
        >
          <Stack gap={0}>
            <Text size="xs" c="gray.7">
              {t("Departure Date")}
            </Text>
            <Text size="sm" fw={500}>
              27 Mar - 04 Nis 2025
            </Text>
          </Stack>
          <Stack gap={0}>
            <Text size="xs" c="gray.7">
              {t("Tour Duration")}
            </Text>
            <Text size="sm" fw={500}>
              8 Gün, 7 Gece
            </Text>
          </Stack>
        </SimpleGrid>
        <Divider />

        <Stack gap="xs">
          <Group gap={8}>
            <IconLocationFilled size={16} color="var(--mantine-color-red-7)" />
            <Text size="sm" fw={500}>
              Antalya Çıkışlı
            </Text>
          </Group>
          <Group>
            <Group gap={8}>
              <IconSun size={16} color="var(--mantine-color-yellow-7)" />
              <Text size="sm" fw={500}>
                8 Gün
              </Text>
            </Group>
            <Group gap={8}>
              <IconMoon size={16} color="var(--mantine-color-blue-7)" />
              <Text size="sm" fw={500}>
                7 Gece
              </Text>
            </Group>
          </Group>
          <Group gap={8}>
            <IconCalendarMonth size={16} color="var(--mantine-color-green-7)" />
            <Text size="sm" fw={500}>
              27 Mar - 10 Nis 2025 (3 Tur)
            </Text>
          </Group>
          <Group gap={8}>
            <IconPlane size={16} color="var(--mantine-color-violet-7)" />
            <Text size="sm" fw={500}>
              Uçak ile gidiş-dönüş
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default TourDetails;
