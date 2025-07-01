"use client";

import {
  ActionIcon,
  Divider,
  Group,
  Modal,
  Popover,
  Stack,
  Text,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import React, { FC, useState } from "react";

import classes from "../SearchArea.module.css";
import { useTranslations } from "next-intl";
import { IconSearch, IconX } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

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

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const countries: CountryType[] = [
    {
      countryCode: "TR",
      name: "Türkiye",
    },
  ];

  const Target = (
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
      <Text size="sm" c={compact ? "gray.7" : undefined}>
        {label && t(label)}
      </Text>
      {!compact && (
        <Text size="xl" fw={700} truncate>
          Türkiye
        </Text>
      )}
      <Text size="sm" c={compact ? "dark.9" : "gray.7"}>
        TR
      </Text>
    </Stack>
  );

  const Content = (
    <Stack gap={0}>
      <Stack bg="white" gap={0} pos="sticky" top={0} style={{ zIndex: 10 }}>
        <Group wrap="nowrap" gap="xs">
          <TextInput
            w="100%"
            leftSection={<IconSearch size={16} />}
            placeholder={t(label)}
            styles={{ input: { border: "none" } }}
          />
          <ActionIcon
            variant="transparent"
            color="dark"
            onClick={() => setOpened(false)}
            hiddenFrom="sm"
          >
            <IconX size={20} />
          </ActionIcon>
        </Group>
        <Divider />
      </Stack>

      <Stack gap={0}>
        <Text size="xs" c="gray.7" p={8}>
          {t("Countries")}
        </Text>
        {countries.map((country, i) => (
          <CountryOption key={`country-${i}`} {...country} />
        ))}
      </Stack>
    </Stack>
  );

  return matchesSm ? (
    <>
      {Target}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        centered
      >
        {Content}
      </Modal>
    </>
  ) : (
    <Popover width={270} shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>{Target}</Popover.Target>
      <Popover.Dropdown p={0}>{Content}</Popover.Dropdown>
    </Popover>
  );
};

export default CountrySelect;
