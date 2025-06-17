import React, { FC } from "react";
import { FlightTicketType } from ".";
import {
  BackgroundImage,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

import classes from "../Flight.module.css";
import { useHover } from "@mantine/hooks";
import { IconChevronRight, IconTransfer } from "@tabler/icons-react";
import { localeDateRangeFormat } from "@/utils/tools";
import { useLocale } from "next-intl";

const TicketCard: FC<FlightTicketType> = ({
  airline,
  class: cabinetClass,
  dates,
  from,
  price,
  to,
}) => {
  const locale = useLocale();

  const { ref, hovered } = useHover();

  return (
    <Paper
      ref={ref}
      withBorder
      radius="lg"
      p="md"
      style={{ cursor: "pointer" }}
    >
      <Stack gap="xs">
        <Group justify="space-between">
          <Group gap="xs">
            <Image src={airline.image} w={24} h={24} />
            <Text size="sm" lh={1}>
              {airline.name}
            </Text>
          </Group>

          <IconChevronRight
            size={20}
            color="var(--mantine-color-blue-7)"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(0px)" : "translateX(-16px)",
              transition: "all .1s ease",
            }}
          />
        </Group>
        <Group gap={4}>
          <Text size="sm" fw={500}>
            {from}
          </Text>
          <IconTransfer size={16} />
          <Text size="sm" fw={500}>
            {to}
          </Text>
        </Group>

        <Group justify="space-between" align="flex-end">
          <Stack gap={0}>
            <Text size="xs">
              {dates[0].toLocaleDateString(locale, {
                weekday: "short",
                month: "short",
                day: "2-digit",
              })}{" "}
              -{" "}
              {dates[1].toLocaleDateString(locale, {
                weekday: "short",
                month: "short",
                day: "2-digit",
              })}
            </Text>
            <Text size="xs">{cabinetClass}</Text>
          </Stack>
          <Text fw={500}>{price.toLocaleString(locale)} $</Text>
        </Group>
      </Stack>
    </Paper>
  );
};

export default TicketCard;
