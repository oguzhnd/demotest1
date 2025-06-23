import { FlightType } from "@/store/products/flight";
import {
  Badge,
  Button,
  Group,
  List,
  MantineColor,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { isArray } from "lodash";
import { useLocale, useTranslations } from "next-intl";
import React, { FC } from "react";

export interface FlightPacketType {
  title: string;
  suggested?: boolean;
  features: {
    label: string;
    description?: string;
  }[];
  price: number;
  onSelect?: () => void;
}

const FlightPacket: FC<
  FlightType["AlternativePrices"][number] & {
    color: MantineColor;
    onSelect?: () => void;
  }
> = (brand) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Paper
      p="md"
      withBorder
      style={{ borderTop: `4px solid var(--mantine-color-${brand.color}-7)` }}
    >
      <Stack h="100%" justify="space-between" gap="lg">
        <Stack gap="xs">
          <Group justify="space-between">
            <Text fw={500}>{brand.BrandName}</Text>

            {/* {suggested && <Badge color="green">{t("Suggested")}</Badge>} */}
          </Group>
          <List spacing={0}>
            {isArray(brand?.Features) &&
              brand?.Features?.map((item, i) => (
                <List.Item key={`item-${i}`}>
                  <Stack gap={0}>
                    <Text size="xs">{item}</Text>
                  </Stack>
                </List.Item>
              ))}
          </List>
        </Stack>

        <Button variant="filled" color={brand.color} onClick={brand.onSelect}>
          {brand.totalPrice.toLocaleString(locale)} TRY
        </Button>
      </Stack>
    </Paper>
  );
};

export default FlightPacket;
