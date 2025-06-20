"use client";

import {
  Divider,
  Group,
  Popover,
  Stack,
  Text,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import React, { FC, useState } from "react";

import classes from "../SearchArea.module.css";
import { useTranslations } from "next-intl";
import { IconSearch } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

interface PopularCityType {
  city: string;
  country: string;
  name: string;
  code: string;
}

const AirportOption: FC<PopularCityType> = ({ city, code, country, name }) => {
  return (
    <Stack gap={0} p={8} className={classes.airportOption}>
      <Group justify="space-between">
        <Text size="sm">
          {city}, {country}
        </Text>
        <Text size="sm" fw={500}>
          {code}
        </Text>
      </Group>
      <Text size="xs" c="gray.7" truncate>
        {name}
      </Text>
    </Stack>
  );
};

const HotelSeachInput: FC<{
  label: string;
  compact?: boolean;
}> = ({ label, compact = false }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const popularCities: PopularCityType[] = [
    {
      city: "Mumbai",
      country: "India",
      name: "Chhatrapati Shivaji International Airport",
      code: "BOM",
    },
    {
      city: "Mumbai",
      country: "India",
      name: "Chhatrapati Shivaji International Airport",
      code: "BOM",
    },
    {
      city: "Mumbai",
      country: "India",
      name: "Chhatrapati Shivaji International Airport",
      code: "BOM",
    },
  ];

  return (
    <Popover width={270} shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>
        <Stack
          className={classes.searchInputTarget}
          data-compact={compact}
          data-focused={opened}
          gap={0}
          px="sm"
          py="xs"
          style={{
            [matchesSm ? "borderBottom" : "borderRight"]:
              "1px solid var(--mantine-color-gray-3)",
          }}
          onClick={() => setOpened((o) => !o)}
        >
          <Text size="sm" c={compact ? "blue.7" : undefined} truncate>
            {label && t(label)}
          </Text>
          {!compact && (
            <Text size="xl" fw={700} truncate>
              Granada Luxury Resort Okurcalar
            </Text>
          )}
          <Text size="sm" c={compact ? "white" : "gray.7"}>
            Antalya
          </Text>
        </Stack>
      </Popover.Target>
      <Popover.Dropdown p={0}>
        <Stack gap={0}>
          <TextInput
            leftSection={<IconSearch size={16} />}
            placeholder={t(label)}
            styles={{ input: { border: "none" } }}
          />
          <Divider />

          <Stack gap={0}>
            <Text size="xs" c="gray.7" p={8}>
              {t("Popular Cities")}
            </Text>
            {popularCities.map((airport, i) => (
              <AirportOption key={`airport-${i}`} {...airport} />
            ))}
          </Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default HotelSeachInput;
