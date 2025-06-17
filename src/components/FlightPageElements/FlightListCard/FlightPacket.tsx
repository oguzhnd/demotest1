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
import { useLocale, useTranslations } from "next-intl";
import React, { FC } from "react";

export interface FlightPacketType {
  color: MantineColor;
  title: string;
  suggested?: boolean;
  features: {
    label: string;
    description?: string;
  }[];
  price: number;
  onSelect?: () => void;
}

const FlightPacket: FC<FlightPacketType> = ({
  color,
  features,
  price,
  title,
  suggested = false,
  onSelect,
}) => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Paper
      p="md"
      withBorder
      style={{ borderTop: `4px solid var(--mantine-color-${color}-7)` }}
    >
      <Stack h="100%" justify="space-between" gap="lg">
        <Stack gap="xs">
          <Group justify="space-between">
            <Text fw={500}>{title}</Text>

            {suggested && <Badge color="green">{t("Suggested")}</Badge>}
          </Group>
          <List spacing={0}>
            {features.map((item, i) => (
              <List.Item key={`item-${i}`}>
                <Stack gap={0}>
                  <Text size="xs">{item.label}</Text>
                  {item.description && (
                    <Text size="xs" c="gray.7">
                      {item.description}
                    </Text>
                  )}
                </Stack>
              </List.Item>
            ))}
          </List>
        </Stack>

        <Button variant="filled" color={color} onClick={onSelect}>
          {price.toLocaleString(locale)} TRY
        </Button>
      </Stack>
    </Paper>
  );
};

export default FlightPacket;
