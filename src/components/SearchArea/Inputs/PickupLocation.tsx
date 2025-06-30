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
import React, { FC, useCallback, useEffect, useState } from "react";

import classes from "../SearchArea.module.css";
import { useTranslations } from "next-intl";
import { IconSearch } from "@tabler/icons-react";
import { useListState, useMediaQuery } from "@mantine/hooks";
import { RentalSearchForm } from "../Contents/Rental";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import { locale } from "dayjs";

interface PickupLocationType {
  name: string;
  id: string;
}

const LocationOption: FC<PickupLocationType> = ({ name }) => {
  return (
    <Stack gap={0} p={8} className={classes.airportOption}>
      <Group justify="space-between">
        <Text size="sm" fw={500}>
          {name}
        </Text>
      </Group>
    </Stack>
  );
};

const PickupLocation: FC<{
  label: string;
  compact?: boolean;
  value?: PickupLocationType;
  onChange: (value: PickupLocationType) => void;
}> = ({ label, compact = false, value, onChange }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);
  const matchesSm = useMediaQuery("(max-width: 48em)");
  const [loading, startLoading, stopLoading] = useLoading();

  const [searchValue, setSearchValue] = useState("");
  const [list, listHandlers] = useListState<PickupLocationType>([]);

  const searchLocations = useCallback(async () => {
    try {
      startLoading();

      const res = await xiorInstance.post("/autocomplete", {
        Product: "1",
        Query: searchValue,
        Language: locale,
      });

      listHandlers.setState(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  }, [xiorInstance, searchValue, locale]);

  useEffect(() => {
    if (searchValue.length > 3) {
      searchLocations();
    }
  }, [searchValue]);

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
          <Text size="sm" c={compact ? "blue.7" : undefined}>
            {label && t(label)}
          </Text>
          {!compact && (
            <Text size="xl" fw={700} truncate>
              {value?.name}
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
            value={searchValue}
            onChange={(e) => setSearchValue(e.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
            placeholder={t(label)}
            styles={{ input: { border: "none" } }}
          />
          <Divider />

          <Stack gap={0}>
            <Text size="xs" c="gray.7" p={8}>
              {t("Popular Cities")}
            </Text>
            {list.map((location, i) => (
              <LocationOption key={`location-${i}`} {...location} />
            ))}
          </Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default PickupLocation;
