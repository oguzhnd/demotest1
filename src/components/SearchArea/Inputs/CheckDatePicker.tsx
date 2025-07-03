"use client";

import {
  Center,
  Divider,
  Grid,
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
import { useLocale, useTranslations } from "next-intl";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { DatePicker } from "@mantine/dates";
import { locale } from "dayjs";
import { getValidDate } from "@/utils/tools";
import { useMediaQuery } from "@mantine/hooks";
import { isDate } from "lodash";

const CheckDatePicker: FC<{
  compact?: boolean;
  checkIn: Date | null;
  checkOut: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
  disabled?: boolean;
}> = ({ compact = false, checkIn, checkOut, onChange }) => {
  const t = useTranslations();
  const locale = useLocale();

  const [opened, setOpened] = useState(false);
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const Target = (
    <Grid gutter={0}>
      <Grid.Col
        span={{
          base: 12,
          sm: 6,
        }}
      >
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
          <Text size="sm" c={compact ? "gray.7" : undefined}>
            {t("Check-In")}
          </Text>
          {!compact && (
            <Text size="xl" fw={700}>
              {getValidDate(checkIn)?.toLocaleDateString(locale, {
                day: "2-digit",
                month: "short",
                year: "2-digit",
              })}
            </Text>
          )}
          <Text size="sm" c={compact ? "dark.9" : "gray.7"}>
            {compact
              ? getValidDate(checkIn)?.toLocaleDateString(locale, {
                  day: "2-digit",
                  month: "short",
                  year: "2-digit",
                })
              : getValidDate(checkIn)?.toLocaleDateString(locale, {
                  weekday: "long",
                })}
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col
        h="100%"
        span={{
          base: 12,
          sm: 6,
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
          style={{
            [matchesSm ? "borderBottom" : "borderRight"]:
              "1px solid var(--mantine-color-gray-3)",
          }}
          onClick={() => {
            setOpened((o) => !o);
          }}
        >
          <Text size="sm" c={compact ? "gray.7" : undefined}>
            {t("Check-Out")}
          </Text>
          {!compact && (
            <Text size="xl" fw={700}>
              {getValidDate(checkOut)?.toLocaleDateString(locale, {
                day: "2-digit",
                month: "short",
                year: "2-digit",
              }) || "-"}
            </Text>
          )}

          <Text size="sm" c={compact ? "dark.9" : "gray.7"}>
            {compact
              ? getValidDate(checkOut)?.toLocaleDateString(locale, {
                  day: "2-digit",
                  month: "short",
                  year: "2-digit",
                })
              : getValidDate(checkOut)?.toLocaleDateString(locale, {
                  weekday: "long",
                })}
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );

  const Content = (
    <DatePicker
      numberOfColumns={matchesSm ? 1 : 2}
      type={"range"}
      value={[checkIn, checkOut]}
      minDate={new Date()}
      onChange={(dates) => {
        const date1 = getValidDate(dates[0])
        const date2 = getValidDate(dates[1])

        onChange([date1, date2]);
        
        if (isDate(date1) && isDate(date2)) {
          setOpened(false);
        }
      }}
    />
  );

  return matchesSm ? (
    <>
      {Target}
      <Modal
        size="xs"
        opened={opened}
        onClose={() => setOpened(false)}
        centered
      >
        <Center>{Content}</Center>
      </Modal>
    </>
  ) : (
    <Popover shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>{Target}</Popover.Target>
      <Popover.Dropdown>{Content}</Popover.Dropdown>
    </Popover>
  );
};

export default CheckDatePicker;
