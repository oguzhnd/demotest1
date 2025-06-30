import { useRentalStore } from "@/store/products/rental";
import { Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { IconBed, IconMoon, IconUser, IconX } from "@tabler/icons-react";
import { entries, keys } from "lodash";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

const PriceDetails = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { bookingRental, extraProducts, selectedExtraProducts } =
    useRentalStore();

  const totalPrice = useMemo(() => {
    let res =
      (bookingRental?.priceDetail[0].salesPrice || 0) *
      (bookingRental?.rentalPeriod.count || 1);

    entries(selectedExtraProducts)
      .filter(([_, value]) => value > 0)
      .map(([id, value]) => {
        const product = extraProducts.find((e) => e.extraProductId === id);

        res += (product?.extraProductPrice || 0) * value;
      });

    return res;
  }, [bookingRental, extraProducts, selectedExtraProducts]);

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
          {entries(selectedExtraProducts)
            .filter(([_, value]) => value > 0)
            .map(([id, value], i) => {
              const product = extraProducts.find(
                (e) => e.extraProductId === id
              );
              return (
                <Group
                  key={`extraProduct-${i}`}
                  justify="space-between"
                  wrap="nowrap"
                  align="flex-start"
                >
                  <Group gap={4} c="gray.7">
                    <Text size="sm">{product?.extraProductName && t(product?.extraProductName)}</Text>
                  </Group>

                  <Text
                    size="sm"
                    fw={500}
                    lineClamp={1}
                    style={{ flexShrink: 0 }}
                  >
                    {((product?.extraProductPrice || 0) * value).toLocaleString(
                      locale
                    )}{" "}
                    {bookingRental?.priceDetail[0].currency}
                  </Text>
                </Group>
              );
            })}
          <Divider />
          <Group justify="space-between">
            <Group gap={4} c="gray.7">
              <Text size="sm" fw={500}>
                {t("Total")}
              </Text>
            </Group>

            <Text size="sm" fw={600}>
              {totalPrice.toLocaleString(locale)}{" "}
              {bookingRental?.priceDetail[0].currency}
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PriceDetails;
