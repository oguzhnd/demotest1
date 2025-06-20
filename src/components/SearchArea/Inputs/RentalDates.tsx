"use client";

import {
  Divider,
  Grid,
  Group,
  Popover,
  Stack,
  Text,
  TextInput,
  TextInputProps,
} from "@mantine/core";
import React, { FC, useState } from "react";

import classes from "../SearchArea.module.css";
import { useLocale, useTranslations } from "next-intl";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { DatePicker, getTimeRange, TimeGrid, TimePicker } from "@mantine/dates";
import { locale } from "dayjs";
import { getValidDate } from "@/utils/tools";
import { UseFormReturnType } from "@mantine/form";
import { RentalSearchForm } from "../Contents/Rental";
import { useMediaQuery } from "@mantine/hooks";

const RentalDatesPicker: FC<{
  compact?: boolean;
  form: UseFormReturnType<RentalSearchForm>;
}> = ({ compact = false, form }) => {
  const t = useTranslations();
  const locale = useLocale();

  const [opened, setOpened] = useState(false);
  const matchesSm = useMediaQuery("(max-width: 48em)");

  return (
    <Popover shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>
        <Grid gutter={0}>
          <Grid.Col
            span={{
              base: 12,
              sm: 3,
            }}
          >
            <Stack
              className={classes.searchInputTarget}
              data-compact={compact}
              data-focused={opened}
              gap={0}
              px="sm"
              py="xs"
              style={{ [matchesSm ? "borderBottom" : "borderRight"]:
              "1px solid var(--mantine-color-gray-3)", }}
              onClick={() => setOpened((o) => !o)}
            >
              <Text size="sm" c={compact ? "blue.7" : undefined}>
                {t("Pickup Date")}
              </Text>
              {!compact && (
                <Text size="xl" fw={700}>
                  {form.getValues()?.deliveryDate?.toLocaleDateString(locale, {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })}
                </Text>
              )}
              <Text size="sm" c={compact ? "white" : "gray.7"}>
                {compact
                  ? form.getValues()?.pickupDate?.toLocaleDateString(locale, {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })
                  : form.getValues()?.pickupDate?.toLocaleDateString(locale, {
                      weekday: "long",
                    })}
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 3,
            }}
          >
            <Stack
              h="100%"
              className={classes.searchInputTarget}
              data-compact={compact}
              data-focused={opened}
              gap={0}
              px="sm"
              py="xs"
              style={{ [matchesSm ? "borderBottom" : "borderRight"]:
              "1px solid var(--mantine-color-gray-3)", }}
              onClick={() => setOpened((o) => !o)}
            >
              <Text size="sm" c={compact ? "blue.7" : undefined}>
                {t("Pickup Time")}
              </Text>
              {!compact ? (
                <Text size="xl" fw={700}>
                  {form.getValues().pickupTime}
                </Text>
              ) : (
                <Text size="sm" c="white">
                  {form.getValues().pickupTime}
                </Text>
              )}
            </Stack>
          </Grid.Col>
          <Grid.Col
            h="100%"
            span={{
              base: 12,
              sm: 3,
            }}
          >
            <Stack
              h={compact ? 60.59 : 93.59}
              className={classes.searchInputTarget}
              data-compact={compact}
              data-focused={opened}
              gap={0}
              px="sm"
              py="xs"
              style={{ [matchesSm ? "borderBottom" : "borderRight"]:
              "1px solid var(--mantine-color-gray-3)", }}
              onClick={() => {
                setOpened((o) => !o);
              }}
            >
              <Text size="sm" c={compact ? "blue.9" : undefined}>
                {t("Delivery Date")}
              </Text>
              {!compact && (
                <Text size="xl" fw={700}>
                  {form.getValues().deliveryDate?.toLocaleDateString(locale, {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  }) || "-"}
                </Text>
              )}

              <Text size="sm" c={compact ? "white" : "gray.7"}>
                {compact
                  ? form.getValues().deliveryDate?.toLocaleDateString(locale, {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })
                  : form.getValues().deliveryDate?.toLocaleDateString(locale, {
                      weekday: "long",
                    })}
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 3,
            }}
          >
            <Stack
              h="100%"
              className={classes.searchInputTarget}
              data-compact={compact}
              data-focused={opened}
              gap={0}
              px="sm"
              py="xs"
              style={{ [matchesSm ? "borderBottom" : "borderRight"]:
              "1px solid var(--mantine-color-gray-3)", }}
              onClick={() => setOpened((o) => !o)}
            >
              <Text size="sm" c={compact ? "blue.7" : undefined}>
                {t("Delivery Time")}
              </Text>
              {!compact ? (
                <Text size="xl" fw={700}>
                  {form.getValues().deliveryTime}
                </Text>
              ) : (
                <Text size="sm" c="white">
                  {form.getValues().deliveryTime}
                </Text>
              )}
            </Stack>
          </Grid.Col>
        </Grid>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack>
          <DatePicker
            numberOfColumns={2}
            type={"range"}
            value={[form.getValues().pickupDate, form.getValues().deliveryDate]}
            onChange={(dates) => {
              form.setFieldValue("pickupDate", getValidDate(dates[0]));
              form.setFieldValue("deliveryDate", getValidDate(dates[1]));
            }}
          />
          <Group wrap="nowrap" gap="xs">
            <TimePicker
              w="100%"
              label={t("Pickup Time")}
              popoverProps={{ withinPortal: false }}
              presets={getTimeRange({
                startTime: "00:00",
                endTime: "23:30",
                interval: "00:30",
              })}
              value={form.getValues().pickupTime}
              onChange={(time) => form.setFieldValue("pickupTime", time)}
            />
            <TimePicker
              w="100%"
              label={t("Delivery Time")}
              popoverProps={{ withinPortal: false }}
              presets={getTimeRange({
                startTime: "00:00:00",
                endTime: "23:30:00",
                interval: "00:30:00",
              })}
              value={form.getValues().deliveryTime}
              onChange={(time) => form.setFieldValue("deliveryTime", time)}
            />
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default RentalDatesPicker;
