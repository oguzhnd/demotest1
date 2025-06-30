import { useRentalStore } from "@/store/products/rental";
import { Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { IconBed, IconMoon, IconUser, IconX } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";

const PriceDetails = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { bookingRental } = useRentalStore();

  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Text size="sm" fw={500}>
          {t("Price Details")}
        </Text>
        <Stack gap={4}>
          <Group justify="space-between" wrap="nowrap" align="flex-start">
            <Group gap={4} c="gray.7">
              <Text size="sm">
                Araç Kiralama Hizmeti ({bookingRental?.rentalPeriod.count}{" "}
                {bookingRental?.rentalPeriod.unit})
              </Text>
            </Group>

            <Text size="sm" fw={500} lineClamp={1} style={{ flexShrink: 0 }}>
              {(
                (bookingRental?.priceDetail[0].salesPrice || 0) *
                (bookingRental?.rentalPeriod.count || 1)
              ).toLocaleString(locale)}{" "}
              {bookingRental?.priceDetail[0].currency}
            </Text>
          </Group>
          <Divider />
          <Group justify="space-between">
            <Group gap={4} c="gray.7">
              <Text size="sm" fw={500}>
                {t("Total")}
              </Text>
            </Group>

            <Text size="sm" fw={600}>
              {(
                (bookingRental?.priceDetail[0].salesPrice || 0) *
                (bookingRental?.rentalPeriod.count || 1)
              ).toLocaleString(locale)}{" "}
              {bookingRental?.priceDetail[0].currency}
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PriceDetails;
