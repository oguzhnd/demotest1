"use client";

import {
  ActionIcon,
  Divider,
  Group,
  LoadingOverlay,
  Modal,
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
  IconX,
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
  disabled?: boolean;
  label: string;
  title?: string;
  description?: string;
  compact?: boolean;
  form: UseFormReturnType<FlightSearchFormProps>;
}> = ({ disabled, label, title, description, compact = false, form }) => {
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

  const Target = (
    <Stack
      className={classes.searchInputTarget}
      data-compact={compact}
      data-error={form.errors[label === "From" ? "dep" : "arr"]}
      data-focused={opened}
      data-disabled={disabled}
      gap={0}
      px="sm"
      py="xs"
      style={{
        [matchesSm ? "borderBottom" : "borderRight"]:
          "1px solid var(--mantine-color-gray-3)",
      }}
      onClick={() => setOpened((o) => !o)}
    >
      <Text size="sm" c={compact ? "gray.7" : undefined}>
        {label && t(label)}
      </Text>
      {!compact && (
        <Text
          size="xl"
          fw={!title ? 600 : 700}
          c={!title ? "gray.5" : undefined}
        >
          {title || t("City or Airport")}
        </Text>
      )}
      <Text
        size="sm"
        c={
          compact
            ? !title
              ? "gray.5"
              : "dark.9"
            : !title
            ? "gray.5"
            : "gray.7"
        }
        truncate
      >
        {description || t("Click to search")}
      </Text>
    </Stack>
  );

  const Content = (
    <ScrollArea h={400}>
      <Stack gap={0}>
        <Stack bg="white" gap={0} pos="sticky" top={0} style={{ zIndex: 10 }}>
          <Group wrap="nowrap" gap="xs">
            <TextInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
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

        <Stack h="100%" gap={0} pos="relative">
          <LoadingOverlay h={400} visible={loading} />
          {list.map((airport, i) => (
            <AirportOption
              key={`airport-${i}`}
              {...airport}
              onClick={() => {
                form.setFieldValue(label === "From" ? "dep" : "arr", airport);
                setOpened(false);
              }}
            />
          ))}
        </Stack>
      </Stack>
    </ScrollArea>
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
    <Popover width={300} shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>{Target}</Popover.Target>
      <Popover.Dropdown p={0}>{Content}</Popover.Dropdown>
    </Popover>
  );
};

export default AirportInput;
