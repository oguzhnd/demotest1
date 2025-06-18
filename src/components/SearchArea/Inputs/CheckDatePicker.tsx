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
import { DatePicker } from "@mantine/dates";
import { locale } from "dayjs";
import { getValidDate } from "@/utils/tools";

const CheckDatePicker: FC<{
  compact?: boolean;
  checkIn: Date | null;
  checkOut: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}> = ({ compact = false, checkIn, checkOut, onChange }) => {
  const t = useTranslations();
  const locale = useLocale();

  const [opened, setOpened] = useState(false);

  console.log(checkIn, checkOut);

  return (
    <Popover shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>
        <Grid gutter={0}>
          <Grid.Col span={6}>
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
                {t("Check-In")}
              </Text>
              {!compact && (
                <Text size="xl" fw={700}>
                  {checkIn?.toLocaleDateString(locale, {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })}
                </Text>
              )}
              <Text size="sm" c={compact ? "white" : "gray.7"}>
                {compact
                  ? checkIn?.toLocaleDateString(locale, {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })
                  : checkIn?.toLocaleDateString(locale, {
                      weekday: "long",
                    })}
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col h="100%" span={6}>
            <Stack
              h={compact ? 60.59 : 93.59}
              className={classes.searchInputTarget}
              data-compact={compact}
              data-focused={opened}
              gap={0}
              px="sm"
              py="xs"
              style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
              onClick={() => {
                setOpened((o) => !o);
              }}
            >
              <Text size="sm" c={compact ? "blue.9" : undefined}>
                {t("Check-Out")}
              </Text>
              {!compact && (
                <Text size="xl" fw={700}>
                  {checkOut?.toLocaleDateString(locale, {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  }) || "-"}
                </Text>
              )}

              <Text size="sm" c={compact ? "white" : "gray.7"}>
                {compact
                  ? checkOut?.toLocaleDateString(locale, {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })
                  : checkOut?.toLocaleDateString(locale, {
                      weekday: "long",
                    })}
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Popover.Target>
      <Popover.Dropdown>
        <DatePicker
          numberOfColumns={2}
          type={"range"}
          value={[checkIn, checkOut]}
          onChange={(dates) =>
            onChange([getValidDate(dates[0]), getValidDate(dates[1])])
          }
        />
      </Popover.Dropdown>
    </Popover>
  );
};

export default CheckDatePicker;
