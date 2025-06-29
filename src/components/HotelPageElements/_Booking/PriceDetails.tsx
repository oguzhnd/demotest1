import { useHotelStore } from "@/store/products/hotel";
import { Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { IconBed, IconMoon, IconUser, IconX } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";

const PriceDetails = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { bookingHotel, bookingOffer, bookingRoom } = useHotelStore();

  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Text size="sm" fw={500}>
          {t("Price Details")}
        </Text>
        <Stack gap={4}>
          <Group justify="space-between">
            <Group gap={4} c="gray.7">
              <Text size="sm">1 Oda</Text>
              <IconX size={14} />
              <IconMoon size={14} color="var(--mantine-color-blue-7)" />
              <Text size="sm">{bookingRoom?.night} gece</Text>
            </Group>

            <Text size="sm" fw={500}>
              {(+(bookingOffer?.priceDetail?.roomPrice || 0)).toLocaleString(
                locale
              )}{" "}
              {bookingOffer?.priceDetail?.salesCurrency}
            </Text>
          </Group>
          <Group justify="space-between">
            <Group gap={4} c="gray.7">
              <Text size="sm">Gecelik</Text>
            </Group>

            <Text size="sm" fw={500}>
              {(+(
                bookingOffer?.priceBreakdowns[0].price.amount || 0
              )).toLocaleString(locale)}{" "}
              {bookingOffer?.priceDetail?.salesCurrency}
            </Text>
          </Group>
          <Group justify="space-between">
            <Group gap={4} c="gray.7">
              <Text size="sm">Komisyom</Text>
            </Group>

            <Text size="sm" fw={500}>
              {(+(bookingOffer?.priceDetail?.nttCom || 0)).toLocaleString(
                locale
              )}{" "}
              {bookingOffer?.priceDetail?.salesCurrency}
            </Text>
          </Group>
          <Divider />
          <Group justify="space-between">
            <Group gap={4} c="gray.7">
              <Text size="sm" fw={500}>
                Toplam
              </Text>
            </Group>

            <Text size="sm" fw={600}>
              {(
                +(bookingOffer?.priceDetail?.salesPrice || 0) *
                (bookingRoom?.travellers.length || 1)
              ).toLocaleString(locale)}{" "}
              {bookingOffer?.priceDetail?.salesCurrency}
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PriceDetails;
