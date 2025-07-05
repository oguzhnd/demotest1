import {
  Box,
  Divider,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import ImagesModal from "./ImagesModal";
import {
  IconCalendarMonth,
  IconLocation,
  IconLocationFilled,
  IconMapBolt,
  IconMapPin,
  IconMoon,
  IconPlane,
  IconRoute,
  IconSun,
} from "@tabler/icons-react";

const TourImages: FC<{
  tourDetails: any | undefined;
}> = ({ tourDetails }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const images = [
    "https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-General-114764.webp",
    "https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-Web-114780.webp",
    "https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-Web-114767.webp",
    "https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-Web-114773.webp",
    "https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-Web-114776.webp",
    "https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-Web-114773.webp",
  ];

  return (
    <>
      <ImagesModal opened={opened} setOpened={setOpened} images={images} />
      <Grid gutter="xs">
        <Grid.Col
          span={{
            base: 12,
            sm: 6,
          }}
        >
          <Image
            alt="hotel-1"
            h={matchesSm ? 200 : 500}
            radius="md"
            src={images[0].replace("{size}", "x500")}
            onClick={() => setOpened(true)}
          />
        </Grid.Col>
        <Grid.Col
          span={{
            base: 12,
            sm: 3,
          }}
        >
          <SimpleGrid
            cols={{
              base: 3,
              sm: 1,
            }}
            spacing="xs"
          >
            <Image
              alt="hotel-1"
              h={matchesSm ? 100 : 160}
              radius="md"
              src={images[1].replace("{size}", "x500")}
              onClick={() => setOpened(true)}
            />
            <Image
              alt="hotel-1"
              h={matchesSm ? 100 : 160}
              radius="md"
              src={images[2].replace("{size}", "x500")}
              onClick={() => setOpened(true)}
            />
            <Box pos="relative">
              <Image
                alt="hotel-1"
                h={matchesSm ? 100 : 160}
                radius="md"
                src={images[3].replace("{size}", "x500")}
                onClick={() => setOpened(true)}
              />
              <Stack
                pos="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="#00000088"
                style={{
                  borderRadius: "var(--mantine-radius-md)",
                  cursor: "pointer",
                }}
                justify="center"
                align="center"
                onClick={() => setOpened(true)}
              >
                <Text fw={500} c="white">
                  {t("+X Images", {
                    count: images.length - 3,
                  })}
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col
          span={{
            base: 12,
            sm: 3,
          }}
        >
          <Stack h="100%">
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
            <Stack gap="xs" h="100%">
              <Group gap={8}>
                <IconRoute size={16} color="var(--mantine-color-red-7)" />
                <Text size="sm" fw={500}>
                  {t("Tour Itinerary")}
                </Text>
              </Group>
              <Image
                radius="md"
                h="100%"
                src={`https://maps.googleapis.com/maps/api/staticmap?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&center=41.10711,29.019195&size=400x400&zoom=13`}
              />
            </Stack>
          </Stack>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default TourImages;
