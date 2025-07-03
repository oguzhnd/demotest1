import { useRentalStore } from "@/store/products/rental";
import { useSearchStore } from "@/store/search";
import { localeDateFormat } from "@/utils/tools";
import {
  Divider,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconArmchair,
  IconCircleDashedCheck,
  IconClockFilled,
  IconGasStationFilled,
  IconManualGearboxFilled,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const RentalDetails = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { rentalSearch } = useSearchStore();
  const { bookingRental } = useRentalStore();

  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Group>
          <Image w={100} src={bookingRental?.carDetail[0].image.medium} />
          <Stack gap={0} align="flex-start">
            <Text size="sm" fw={500}>
              {bookingRental?.carDetail[0].brand}{" "}
              {bookingRental?.carDetail[0].model}
            </Text>
            <Image h={24} w="auto" src={bookingRental?.vendor.logoUrl} />
          </Stack>
        </Group>
        <Divider />
        <Group>
          <Group gap={6} wrap="nowrap">
            <IconManualGearboxFilled
              size={16}
              color="var(--mantine-color-blue-7)"
            />
            <Text size="sm" fw={500} c="gray.7">
              {bookingRental?.carDetail[0].transmission && t(bookingRental?.carDetail[0].transmission)}
            </Text>
          </Group>
          <Group gap={6} wrap="nowrap">
            <IconGasStationFilled
              size={16}
              color="var(--mantine-color-blue-7)"
            />
            <Text size="sm" fw={500} c="gray.7">
              {bookingRental?.carDetail[0].fuel && t(bookingRental?.carDetail[0].fuel)}
            </Text>
          </Group>
          <Group gap={6} wrap="nowrap">
            <IconArmchair size={16} color="var(--mantine-color-blue-7)" />
            <Text size="sm" fw={500} c="gray.7">
              {bookingRental?.carDetail[0].seats}
            </Text>
          </Group>
        </Group>
        <Divider />
        <Group wrap="nowrap">
          <Group w="50%" gap={4} c="green.7">
            <IconClockFilled size={16} />
            <Text size="sm" fw={500} lh={1}>
              Anında Onay
            </Text>
          </Group>
        </Group>
        <Divider />
        <SimpleGrid cols={2}>
          <Stack gap={0} align="flex-start">
            <Text size="xs" fw={500}>
              Alış Tarihi ve Yeri
            </Text>
            <Text size="sm" c="gray">
              {localeDateFormat(rentalSearch?.pickupDate, locale)}
            </Text>
            <Text
              size="sm"
              fw={500}
              bg="blue"
              c="white"
              lh={1}
              py={4}
              px={8}
              style={{ borderRadius: 4 }}
            >
              {rentalSearch?.pickupTime}
            </Text>
            <Text size="sm" mt={4}>
              {bookingRental?.officeInfo.dropoffLocation.address.city},{" "}
              {bookingRental?.officeInfo.dropoffLocation.address.country},
            </Text>
          </Stack>
          <Stack gap={0} align="flex-end">
            <Text size="xs" fw={500}>
              Bırakış Tarihi ve Yeri
            </Text>
            <Text size="sm" c="gray">
              {localeDateFormat(rentalSearch?.pickupDate, locale)}
            </Text>
            <Text
              size="sm"
              fw={500}
              bg="blue"
              c="white"
              lh={1}
              py={4}
              px={8}
              style={{ borderRadius: 4 }}
            >
              {rentalSearch?.deliveryTime}
            </Text>
            <Text size="sm" mt={4} ta="right">
              {bookingRental?.officeInfo.dropoffLocation.address.city},{" "}
              {bookingRental?.officeInfo.dropoffLocation.address.country},
            </Text>
          </Stack>
        </SimpleGrid>
        <Divider />
        <Stack gap={4}>
          <Group justify="space-between">
            <Text size="sm" fw={500}>
              {t("Vehicle Delivery Method")}:
            </Text>
            <Text size="sm" fw={500} c="blue">
              {bookingRental?.officeInfo.dropoffLocation.deliveryType && t(bookingRental?.officeInfo.dropoffLocation.deliveryType)}
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" fw={500}>
              {t("Deposit")}:
            </Text>
            <Text size="sm" fw={500} c="blue">
              {(bookingRental?.priceDetail[0].provision || 0).toLocaleString(
                locale
              )}{" "}
              {bookingRental?.priceDetail[0].currency}
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" fw={500}>
              {t("Total Kilometer Limit")}:
            </Text>
            <Text size="sm" fw={500} c="blue">
              {bookingRental?.rules.totalRangeLimit} KM
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default RentalDetails;
