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

interface CountryType {
  countryCode: string;
  name: string;
}

const CountryOption: FC<CountryType> = ({ countryCode, name }) => {
  return (
    <Stack gap={0} p={8} className={classes.airportOption}>
      <Group justify="space-between">
        <Text size="sm">{name}</Text>
      </Group>
      <Text size="xs" c="gray.7" truncate>
        {countryCode}
      </Text>
    </Stack>
  );
};

const CountrySelect: FC<{
  label: string;
  compact?: boolean;
  disabled?: boolean;
}> = ({ label, compact = false }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);

  const countries: CountryType[] = [
    {
      countryCode: "TR",
      name: "Türkiye",
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
            <Text size="xl" fw={700} truncate>
              Türkiye
            </Text>
          )}
          <Text size="sm" c={compact ? "white" : "gray.7"}>
            TR
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
              {t("Countries")}
            </Text>
            {countries.map((country, i) => (
              <CountryOption key={`country-${i}`} {...country} />
            ))}
          </Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default CountrySelect;
