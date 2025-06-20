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
import { UseFormReturnType } from "@mantine/form";
import { FlightSearchFormProps } from "../Contents/Flight";

interface PopularCityType {
  city: string;
  country: string;
  name: string;
  code: string;
  onClick: () => void;
}

const AirportOption: FC<PopularCityType> = ({
  city,
  code,
  country,
  name,
  onClick,
}) => {
  return (
    <Stack gap={0} p={8} className={classes.airportOption} onClick={onClick}>
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

const AirportInput: FC<{
  label: string;
  compact?: boolean;
  form: UseFormReturnType<FlightSearchFormProps>;
}> = ({ label, compact = false, form }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);

  const popularCities: Omit<PopularCityType, "onClick">[] = [
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
          style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          onClick={() => setOpened((o) => !o)}
        >
          <Text size="sm" c={compact ? "blue.7" : undefined}>
            {label && t(label)}
          </Text>
          {!compact && (
            <Text size="xl" fw={700}>
              Delhi
            </Text>
          )}
          <Text size="sm" c={compact ? "white" : "gray.7"}>
            DEL, Delhi Airport India
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
              <AirportOption
                key={`airport-${i}`}
                {...airport}
                onClick={() =>
                  form.setFieldValue(
                    label === "From" ? "from" : "to",
                    airport.name
                  )
                }
              />
            ))}
          </Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default AirportInput;
