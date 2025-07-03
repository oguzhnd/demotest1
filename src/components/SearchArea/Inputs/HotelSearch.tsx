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
  IconBuilding,
  IconMapPin,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { useListState, useMediaQuery } from "@mantine/hooks";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import { UseFormReturnType } from "@mantine/form";
import { HotelSearchFormProps } from "../Contents/Hotel";

export interface SearchHotelType {
  id: string;
  type: "City" | "Hotel";
  name: string;
  country: string;
  countryCode: string;
  city: string;
  latitude: string;
  longitude: string;
  onClick?: () => void;
}

const HotelOption: FC<SearchHotelType> = ({
  type,
  city,
  country,
  name,
  onClick,
}) => {
  return (
    <Stack gap={4} p="xs" className={classes.airportOption} onClick={onClick}>
      <Group gap={4} wrap="nowrap">
        {type === "City" ? (
          <IconMapPin size={16} />
        ) : (
          <IconBuilding size={16} />
        )}
        <Text size="sm" lh={1}>
          {name}
        </Text>
      </Group>
      <Text size="xs" c="gray.7" truncate>
        {city}, {country}
      </Text>
    </Stack>
  );
};

const HotelSeachInput: FC<{
  label: string;
  compact?: boolean;
  form: UseFormReturnType<HotelSearchFormProps>;
  disabled?: boolean;
}> = ({ label, compact = false, form }) => {
  const t = useTranslations();
  const locale = useLocale();

  const [opened, setOpened] = useState(false);

  const matchesSm = useMediaQuery("(max-width: 48em)");
  const [loading, startLoading, stopLoading] = useLoading();

  const [searchValue, setSearchValue] = useState("");
  const [list, listHandlers] = useListState<SearchHotelType>([]);

  const searchHotels = useCallback(async () => {
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
  }, [searchValue, locale]);

  useEffect(() => {
    if (opened) {
      if (searchValue.length > 3) {
        searchHotels();
      }
    } else {
      listHandlers.setState([]);
    }
  }, [searchValue, opened]);

  const Target = (
    <Stack
      className={classes.searchInputTarget}
      data-compact={compact}
      data-error={form.errors.hotel}
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
      <Text size="sm" c={compact ? "gray.7" : undefined} truncate>
        {label && t(label)}
      </Text>
      {!compact && (
        <Text
          size="xl"
          fw={700}
          truncate
          c={!form.getValues().hotel?.name ? "gray.5" : undefined}
        >
          {form.getValues().hotel?.name || t("Hotel or City Name")}
        </Text>
      )}
      <Text
        size="sm"
        c={
          compact
            ? !form.getValues().hotel?.city
              ? "gray.5"
              : "dark.9"
            : !form.getValues().hotel?.city
            ? "gray.5"
            : "gray.7"
        }
        truncate
      >
        {(compact
          ? form.getValues().hotel?.name
          : form.getValues().hotel?.city) || t("Click to search")}
      </Text>
    </Stack>
  );

  const Content = (
    <ScrollArea h={400}>
      <Stack gap={0} pos="relative">
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
          {list.map((hotel, i) => (
            <HotelOption
              key={`hotel-${i}`}
              {...hotel}
              onClick={() => {
                form.setFieldValue("hotel", hotel);
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
    <Popover width={270} shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>{Target}</Popover.Target>
      <Popover.Dropdown p={0}>{Content}</Popover.Dropdown>
    </Popover>
  );
};

export default HotelSeachInput;
