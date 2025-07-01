import { useRouter } from "@/i18n/navigation";
import {
  Button,
  Group,
  Image,
  Paper,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconArmchair,
  IconChevronRight,
  IconCircleDashedCheck,
  IconClock,
  IconClockFilled,
  IconGasStationFilled,
  IconKey,
  IconManualGearbox,
  IconManualGearboxFilled,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React, { FC } from "react";

import classes from "../Rental.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { RentalType } from "@/store/products/rental";

const RentalListCard: FC<{
  rental: RentalType;
  onSelect: () => void;
}> = ({ rental, onSelect }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const matchesXs = useMediaQuery("(max-width: 36em)");
  const matchesSm = useMediaQuery("(max-width: 48em)");
  const matchesMd = useMediaQuery("(max-width: 62em)");

  const Parent = matchesSm ? Stack : Group

  return (
    <Paper p="md" withBorder className={classes.rentalListCard}>
      <Group
        wrap={matchesMd ? "wrap" : "nowrap"}
        justify="space-between"
        align="stretch"
      >
        <Stack w={matchesSm ? "100%" : undefined} align={matchesSm ? "center" : undefined}>
          <Text fw={500}>
            {rental.carDetail[0].brand} {rental.carDetail[0].model}
          </Text>
          <Parent align={matchesSm ? "center" : undefined}>
            <Image w={202} src={rental.carDetail[0].image.medium} />
            <Stack align={matchesSm ? "center" : undefined} gap="xs">
              <Group>
                <Group gap={6}>
                  <IconManualGearboxFilled
                    size={16}
                    color="var(--mantine-color-blue-7)"
                  />
                  <Text size="sm" fw={500} c="gray.7">
                    {rental.carDetail[0].transmission}
                  </Text>
                </Group>
                <Group gap={6}>
                  <IconGasStationFilled
                    size={16}
                    color="var(--mantine-color-blue-7)"
                  />
                  <Text size="sm" fw={500} c="gray.7">
                    {rental.carDetail[0].fuel}
                  </Text>
                </Group>
                <Group gap={6}>
                  <IconArmchair size={16} color="var(--mantine-color-blue-7)" />
                  <Text size="sm" fw={500} c="gray.7">
                    {rental.carDetail[0].seats}
                  </Text>
                </Group>
              </Group>
              <Group gap={6}>
                <IconKey size={16} color="var(--mantine-color-blue-7)" />
                <Text size="sm" fw={500} c="gray.7">
                  {rental.officeInfo.pickupLocation.deliveryType}
                </Text>
              </Group>
              <Parent align={matchesSm ? "center" : undefined}>
                <Group gap={6}>
                  <Text size="sm" fw={500} c="blue">
                    {t("Deposit")}
                  </Text>
                  <Text size="sm" fw={500} c="gray.7">
                    {rental.priceDetail[0].provision.toLocaleString(locale)}{" "}
                    {rental.priceDetail[0].currency}
                  </Text>
                </Group>
                <Group gap={6}>
                  <Text size="sm" fw={500} c="blue">
                    {t("Total Range Limit")}
                  </Text>
                  <Text size="sm" fw={500} c="gray.7">
                    {rental.rules.totalRangeLimit} KM
                  </Text>
                </Group>
              </Parent>
            </Stack>
          </Parent>

          <Group>
            <Image w="auto" radius="sm" h={30} src={rental.vendor.logoUrl} />

            {/* <Group gap={4}>
              <Text
                size="sm"
                c="white"
                fw={500}
                bg="blue.9"
                px="xs"
                py={6}
                lh={1}
                style={{ borderRadius: 8 }}
              >
                4.7
              </Text>
              <Rating value={4.7} fractions={2} readOnly />
            </Group> */}

            <Group gap={4} c="green.7">
              <IconClockFilled size={16} />
              <Text size="sm" fw={500} lh={1}>
                Anında Onay
              </Text>
            </Group>

            {/* <Group gap={4} c="green.7">
              <IconCircleDashedCheck size={16} />
              <Text size="sm" fw={500} lh={1}>
                Ücretsiz İptal
              </Text>
            </Group> */}
          </Group>
        </Stack>

        <Stack w={matchesXs ? "100%" : undefined} gap={6}>
          <Paper h="100%" bg="gray.1" radius="sm" p="sm">
            <Stack
              gap={6}
              h="100%"
              justify="center"
              align={matchesXs ? "center" : "flex-end"}
            >
              <Group gap={4}>
                <Text size="xs" c="gray.7">
                  {t("Total Price")}:{" "}
                </Text>
                <Text size="xs">
                  {rental.rentalPeriod.count} {rental.rentalPeriod.unit}
                </Text>
              </Group>
              <Text size="lg" fw={600}>
                {(rental.priceDetail[0].salesPrice * rental.rentalPeriod.count).toLocaleString(locale)} TRY
              </Text>
              <Group gap={4} c="green">
                <Text size="xs" fw={500}>
                  {t("Daily Price")}:{" "}
                </Text>
                <Text size="xs" fw={500}>
                  {(rental.priceDetail[0].salesPrice).toLocaleString(locale)} TRY
                </Text>
              </Group>
            </Stack>
          </Paper>
          <Button
            rightSection={<IconChevronRight size={16} />}
            style={{ flexShrink: 0 }}
            onClick={onSelect}
          >
            Aracı Şimdi Kirala
          </Button>
        </Stack>
      </Group>
    </Paper>
  );
};

export default RentalListCard;
