import {
  Button,
  Divider,
  Grid,
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import PassengersInput from "./PassengersInput";
import { useSearchStore } from "@/store/search";
import Hotel, { HotelType } from "./Hotel";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconCalendarMonth,
  IconLocationFilled,
  IconMoon,
  IconPlane,
  IconSun,
} from "@tabler/icons-react";
import { useRouter } from "@/i18n/navigation";

const TourReservation = () => {
  const t = useTranslations();

  const { tourSearch, setSearch } = useSearchStore();

  const { push } = useRouter()

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const [activeHotel, setActiveHotel] = useState(1);
  const hotels: HotelType[] = [
    {
      id: 1,
      name: "3 Yıldızlı Otel",
      location: "Üsküp",
      price: 377,
    },
    {
      id: 2,
      name: "4 Yıldızlı Otel",
      location: "Üsküp",
      price: 377,
    },
  ];

  return (
    <Paper p="md" bg="gray.0" withBorder>
      <Grid>
        <Grid.Col
          span={{
            base: 12,
            sm: 9,
          }}
          style={{
            [matchesSm ? "borderBottom" : "borderRight"]:
              "1px solid var(--mantine-color-gray-3)",
          }}
        >
          <Stack>
            <SimpleGrid
              cols={{
                base: 1,
                xs: 2,
                sm: 3,
              }}
              spacing="xs"
            >
              <Select label={t("Departure Point")} data={["Antalya"]} />
              <Select
                label={t("Departure Date")}
                data={["27 Mar - 04 Nis 2025"]}
              />
              <PassengersInput
                value={tourSearch.passengers}
                setValue={(key, value) =>
                  setSearch("tourSearch", {
                    ...tourSearch,
                    passengers: {
                      ...tourSearch.passengers,
                      [key]: value,
                    },
                  })
                }
              />
            </SimpleGrid>
            <Divider />
            <Stack gap="xs">
              {hotels.map((hotel, i) => (
                <Hotel
                  key={`hotel-${i}`}
                  {...hotel}
                  active={activeHotel === hotel.id}
                  onClick={() => setActiveHotel(hotel.id)}
                />
              ))}
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col
          span={{
            base: 12,
            sm: 3,
          }}
        >
          <Stack>
            <Text size="sm" fw={500}>
              {t("Reservation Details")}
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
                <IconLocationFilled
                  size={16}
                  color="var(--mantine-color-red-7)"
                />
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
                <IconCalendarMonth
                  size={16}
                  color="var(--mantine-color-green-7)"
                />
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

            <Divider />
            <Stack gap="xs" align="center">
              <Text size="xl" fw={600}>
                {377} TRY
              </Text>
              <Button fullWidth onClick={() => push("/tour/reservation/1")}>{t("Make a reservation")}</Button>
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default TourReservation;
