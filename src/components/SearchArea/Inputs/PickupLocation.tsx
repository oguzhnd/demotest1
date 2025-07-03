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
import { useTranslations } from "next-intl";
import { IconSearch, IconX } from "@tabler/icons-react";
import { useListState, useMediaQuery } from "@mantine/hooks";
import { RentalSearchForm } from "../Contents/Rental";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import { locale } from "dayjs";
import { isArray, pick } from "lodash";

interface PickupLocationType {
  name: string;
  city: string;
  country: string;
  id: string;
  onClick?: () => void;
}

const LocationOption: FC<PickupLocationType> = ({ name, onClick }) => {
  return (
    <Stack gap={0} p={8} className={classes.airportOption} onClick={onClick}>
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

      const res = await xiorInstance.post("/autocompleteRental", {
        term: searchValue,
        Language: locale,
      });

      console.log(res);

      listHandlers.setState(isArray(res.data) ? res.data : []);
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

  const Target = (
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
      <Text size="sm" c={compact ? "gray.7" : undefined} truncate>
        {label && t(label)}
      </Text>
      {!compact && (
        <Text size="xl" fw={700} truncate>
          {value?.name}
        </Text>
      )}
      <Text size="sm" c={compact ? "dark.9" : "gray.7"} truncate>
        {value?.name}
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

        <Stack gap={0}>
          <LoadingOverlay h={400} visible={loading} />
          {list.map((location, i) => (
            <LocationOption
              key={`location-${i}`}
              {...location}
              onClick={() => {
                onChange(pick(location, ["id", "city", "country", "name"]));
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

export default PickupLocation;
