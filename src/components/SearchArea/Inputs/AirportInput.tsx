"use client";

import {
  Divider,
  Group,
  LoadingOverlay,
  Popover,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import React, { FC, useCallback, useEffect, useState } from "react";

import classes from "../SearchArea.module.css";
import { useLocale, useTranslations } from "next-intl";
import {
  IconMapPin,
  IconPlaneDeparture,
  IconSearch,
} from "@tabler/icons-react";
import { UseFormReturnType } from "@mantine/form";
import { FlightSearchFormProps } from "../Contents/Flight";
import { useListState, useMediaQuery } from "@mantine/hooks";
import { xiorInstance } from "@/utils/xior";
import { useLoading } from "@/utils/hooks/useLoading";

export interface AirportType {
  type: number;
  geolocation: {
    longitude: string;
    latitude: string;
  };
  city?: {
    id: string;
    name: string;
  };
  airport?: {
    id: string;
    name: string;
    code: string;
  };
  onClick?: () => void;
}

const AirportOption: FC<AirportType> = ({ type, city, airport, onClick }) => {
  const data = type === 1 ? city : airport;

  return (
    <Stack gap={4} p={12} className={classes.airportOption} onClick={onClick}>
      <Group gap={4}>
        {type === 1 ? (
          <IconMapPin size={16} />
        ) : (
          <IconPlaneDeparture size={16} />
        )}
        <Text size="sm" fw={500}>
          {data?.id}
        </Text>
      </Group>
      <Text size="xs" c="gray.7" truncate>
        {data?.name}
      </Text>
    </Stack>
  );
};

const AirportInput: FC<{
  label: string;
  title?: string;
  description?: string;
  compact?: boolean;
  form: UseFormReturnType<FlightSearchFormProps>;
}> = ({ label, title, description, compact = false, form }) => {
  const t = useTranslations();
  const locale = useLocale();

  const [loading, startLoading, stopLoading] = useLoading();

  const [opened, setOpened] = useState(false);
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const [searchValue, setSearchValue] = useState("");
  const [list, listHandlers] = useListState<AirportType>([]);

  const searchAirports = useCallback(async () => {
    try {
      startLoading();

      const res = await xiorInstance.post("/autocompleteFlight", {
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
  }, [searchValue, locale]);

  useEffect(() => {
    if (searchValue.length > 2) {
      searchAirports();
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
            <Text size="xl" fw={700}>
              {title || "-"}
            </Text>
          )}
          <Text size="sm" c={compact ? "white" : "gray.7"} truncate>
            {description || "-"}
          </Text>
        </Stack>
      </Popover.Target>
      <Popover.Dropdown p={0}>
        <ScrollArea h={400}>
          <Stack gap={0}>
            <TextInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
              leftSection={<IconSearch size={16} />}
              placeholder={t(label)}
              styles={{ input: { border: "none" } }}
            />
            <Divider />

            <Stack h="100%" gap={0} pos="relative">
              <LoadingOverlay h={400} visible={loading} />
              {list.map((airport, i) => (
                <AirportOption
                  key={`airport-${i}`}
                  {...airport}
                  onClick={() => {
                    form.setFieldValue(
                      label === "From" ? "dep" : "arr",
                      airport
                    );
                    setOpened(false);
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </ScrollArea>
      </Popover.Dropdown>
    </Popover>
  );
};

export default AirportInput;
