import { Grid, Group, Paper, Text, ThemeIcon } from "@mantine/core";
import {
  IconBuilding,
  IconMapPin,
  IconMapPinFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";
import React, { FC } from "react";

import classes from "../../Tour.module.css";

export interface HotelType {
  id: number;
  name: string;
  location: string;
  price: number;
}

const Hotel: FC<
  HotelType & {
    active: boolean;
    onClick: () => void;
  }
> = ({ active, id, location, name, price, onClick }) => {
  const locale = useLocale();

  return (
    <Paper
      p="sm"
      bg="gray.1"
      data-active={active}
      className={classes.hotel}
      onClick={onClick}
    >
      <Grid columns={10}>
        <Grid.Col
          span={{
            base: 10,
            sm: 4,
          }}
        >
          <Group gap="xs">
            <ThemeIcon size="lg" variant="light" radius="xl">
              <IconBuilding size={16} />
            </ThemeIcon>
            <Text size="sm" fw={500}>
              {name}
            </Text>
          </Group>
        </Grid.Col>
        <Grid.Col
          span={{
            base: 10 / 3,
            sm: 2,
          }}
        >
          <Group h="100%" gap={4} align="center" wrap="nowrap">
            <IconMapPinFilled size={16} color="var(--mantine-color-red-7)" />
            <Text size="sm" lh={1}>
              {location}
            </Text>
          </Group>
        </Grid.Col>
        <Grid.Col
          span={{
            base: 10 / 3,
            sm: 2,
          }}
        >
          <Group h="100%" gap={4} align="center" wrap="nowrap">
            <IconUserFilled size={16} color="var(--mantine-color-gray-7)" />
            <Text size="sm" lh={1} truncate>
              1 Kişi
            </Text>
          </Group>
        </Grid.Col>
        <Grid.Col
          span={{
            base: 10 / 3,
            sm: 2,
          }}
        >
          <Group h="100%" gap={4} align="center" justify="flex-end">
            <Text fw={500} lh={1}>
              {price.toLocaleString(locale)} TRY
            </Text>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default Hotel;
