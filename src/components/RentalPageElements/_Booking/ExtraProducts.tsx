import { useRentalStore } from "@/store/products/rental";
import { xiorInstance } from "@/utils/xior";
import {
  ActionIcon,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { isNumber } from "lodash";
import { useLocale, useTranslations } from "next-intl";
import React, { useCallback, useEffect } from "react";

export interface ExtraProductType {
  extraProductName: string;
  extraProductPrice: number;
  extraProductId: string;
  extraProductCategory: string;
  maxCount: number | "";
  extraRangeAmount: string;
}

const ExtraProducts = () => {
  const t = useTranslations()
  const locale = useLocale();

  const {
    tempId,
    searchId,
    bookingRental,
    extraProducts,
    setExtraProducts,
    selectedExtraProducts,
    setSelectedExtraProducts,
  } = useRentalStore();

  const getExtraProducts = useCallback(async () => {
    try {
      const res = await xiorInstance.post("/extraProducts", {
        tempId,
        searchId,
        productId: bookingRental?.productId,
      });

      console.log(res);

      setExtraProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  }, [xiorInstance, tempId, searchId, bookingRental]);

  useEffect(() => {
    getExtraProducts();
  }, []);

  return (
    <Paper withBorder p="sm">
      <SimpleGrid
        cols={{
          base: 1,
          xs: 2,
          sm: 3,
        }}
        spacing="sm"
      >
        {extraProducts.map((extraProduct, i) => {
          const value = selectedExtraProducts[extraProduct.extraProductId] || 0;

          return (
            <Paper key={`extraProduct-${i}`} bg="gray.1" p="sm">
              <Group justify="space-between">
                <Stack gap={4}>
                  <Group gap={4}>
                    <Text size="sm" fw={500}>
                      {t(extraProduct.extraProductName)}{" "}
                    </Text>
                    <Text size="xs" c="gray">
                      {extraProduct.extraRangeAmount
                        ? `(${extraProduct.extraRangeAmount} KM)`
                        : ""}
                    </Text>
                  </Group>
                  <Text size="sm" c="gray.8" fw={500}>
                    {extraProduct.extraProductPrice.toLocaleString(locale)} TRY
                  </Text>
                </Stack>

                <ActionIcon.Group>
                  <ActionIcon
                    variant="default"
                    radius="sm"
                    disabled={value === 0}
                  >
                    <IconMinus
                      color="var(--mantine-color-red-text)"
                      onClick={() =>
                        setSelectedExtraProducts(
                          extraProduct.extraProductId,
                          Math.max(value - 1, 0)
                        )
                      }
                    />
                  </ActionIcon>
                  <ActionIcon.GroupSection
                    variant="transparent"
                    color="dark"
                    size="md"
                    miw={40}
                  >
                    {value}
                  </ActionIcon.GroupSection>
                  <ActionIcon
                    variant="default"
                    radius="sm"
                    disabled={
                      isNumber(extraProduct.maxCount)
                        ? value >= extraProduct.maxCount
                        : false
                    }
                    onClick={() =>
                      setSelectedExtraProducts(
                        extraProduct.extraProductId,
                        isNumber(extraProduct.maxCount)
                          ? Math.min(value + 1, extraProduct.maxCount)
                          : value + 1
                      )
                    }
                  >
                    <IconPlus color="var(--mantine-color-teal-text)" />
                  </ActionIcon>
                </ActionIcon.Group>
              </Group>
            </Paper>
          );
        })}
      </SimpleGrid>
    </Paper>
  );
};

export default ExtraProducts;
