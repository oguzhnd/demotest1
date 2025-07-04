import { useRouter } from "@/i18n/navigation";
import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Box,
  Button,
  Divider,
  Group,
  HoverCard,
  Image,
  MantineStyleProp,
  Paper,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCalendar,
  IconChevronRight,
  IconInfoCircle,
  IconMapPin,
  IconMapPinFilled,
  IconMoon,
  IconPlane,
  IconRoute,
  IconStarFilled,
  IconSun,
  IconSwimming,
  IconWaterpolo,
  IconX,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React, { FC } from "react";

import classes from "../Tour.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { TourType } from "@/store/products/tour";

const TourListCard: FC<{
  onSelect: () => void;
  onClose?: () => void;
  tour: TourType;
  style?: MantineStyleProp;
}> = ({ onSelect, onClose, tour, style }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const matchesSm = useMediaQuery("(max-width: 48em)");
  const matchesXs = useMediaQuery("(max-width: 36em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.tourListCard}
      style={style}
    >
      <Parent pos="relative" gap={0} wrap="nowrap" align="stretch" h="100%">
        <Box
          h="auto"
          w={matchesSm ? "100%" : 300}
          mah={270}
          style={{ flexShrink: 0 }}
        >
          <Image
            h="100%"
            src="https://api2.gitmeklazim.com/TourImagesFiles/antalyadan-direkt-sefer-ile-buyuk-balkan-turu-rotasi-General-114764.webp"
          />
        </Box>
        <Stack w="100%" p="md" justify="space-between">
          <Stack gap={8}>
            <Group gap={6} wrap="nowrap" align="flex-start">
              <IconMapPinFilled size={14} color="var(--mantine-color-red-7)" />
              <Text size="xs" c="gray.6" lh={1}>
                Trebinje - Saraybosna - Üsküp - Ohrid - Belgrad - Mostar - Tiran
                - Budva - Kotor
              </Text>
            </Group>
            <Text fw={500} lh={1.2}>
              Antalya’dan Direkt Sefer İle Büyük Balkan Turu Rotası
            </Text>
            <Group>
              <Text size="sm" fw={500} c="blue">
                Antalya Çıkışlı
              </Text>
              <Group gap={6}>
                <IconCalendar size={14} color="var(--mantine-color-green-7)" />
                <Text size="sm" lh={1}>
                  27 Mar - 04 Nis 2025
                </Text>
              </Group>
              <Group gap={6}>
                <IconSun size={14} color="var(--mantine-color-yellow-7)" />
                <Text size="sm" lh={1}>
                  8 Gün
                </Text>
              </Group>
              <Group gap={6}>
                <IconMoon size={14} color="var(--mantine-color-blue-7)" />
                <Text size="sm" lh={1}>
                  7 Gece
                </Text>
              </Group>
            </Group>
          </Stack>

          <Parent justify="space-between" align="flex-end" wrap="nowrap">
            <Stack gap="xs">
              <Divider />
              <Group>
                <Group gap={6}>
                  <IconPlane size={14} color="var(--mantine-color-violet-7)" />
                  <Text size="sm" lh={1}>
                    Uçak ile gidiş-dönüş
                  </Text>
                </Group>
                <HoverCard>
                  <HoverCard.Target>
                    <Group gap={6}>
                      <IconRoute
                        size={14}
                        color="var(--mantine-color-yellow-7)"
                      />
                      <Text size="sm" lh={1} c="yellow">
                        Tur Programı
                      </Text>
                    </Group>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Stack>
                      <Group>
                        <Text size="sm" c="gray">
                          1. Gün
                        </Text>
                        <Text size="sm">Antalya - Saraybosna</Text>
                      </Group>
                    </Stack>
                  </HoverCard.Dropdown>
                </HoverCard>
                <HoverCard>
                  <HoverCard.Target>
                    <Group gap={6}>
                      <IconInfoCircle
                        size={14}
                        color="var(--mantine-color-gray-7)"
                      />
                      <Text size="sm" lh={1} c="gray">
                        Diğer Tarihler
                      </Text>
                    </Group>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Stack>
                      <Text size="sm">7 Tem - 15 Tem 2025</Text>
                    </Stack>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </Stack>

            <Stack w={matchesSm ? "100%" : undefined}>
              <Stack gap={0} align={matchesSm ? "center" : "flex-end"}>
                <Text size="xl" fw={600} lh={1}>
                  1.399€
                </Text>
                <Text c="gray.6">57.452,57₺</Text>
              </Stack>
              <Button onClick={onSelect}>{t("Tour Details")}</Button>
            </Stack>
          </Parent>
        </Stack>
      </Parent>
    </Paper>
  );
};

export default TourListCard;
