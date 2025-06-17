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

const FlightDatePicker: FC<{
  compact?: boolean;
  type: "one-way" | "round-trip";
  setType: (type: "one-way" | "round-trip") => void;
  departureDate: Date | null;
  returnDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}> = ({
  compact = false,
  type,
  setType,
  departureDate,
  returnDate,
  onChange,
}) => {
  const t = useTranslations();
  const locale = useLocale();

  const [opened, setOpened] = useState(false);

  console.log(departureDate, returnDate);

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
                {t("Departure")}
              </Text>
              {!compact && (
                <Text size="xl" fw={700}>
                  {departureDate?.toLocaleDateString(locale, {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  })}
                </Text>
              )}
              <Text size="sm" c={compact ? "white" : "gray.7"}>
                {compact
                  ? departureDate?.toLocaleDateString(locale, {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })
                  : departureDate?.toLocaleDateString(locale, {
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
                if (type === "one-way") {
                  setType("round-trip");
                }
                setOpened((o) => !o);
              }}
            >
              {type === "round-trip" && (
                <Text size="sm" c={compact ? "blue.9" : undefined}>
                  {t("Return")}
                </Text>
              )}
              {type === "one-way" ? (
                <>
                  <Group h="100%" align="center" gap="sm" c={compact ? "gray.3" : "gray.7"}>
                    <IconPlus size={20} />
                    <Text size="md" fw={500} lh={1}>
                      {t("Add Return")}
                    </Text>
                  </Group>
                </>
              ) : (
                <>
                  {!compact && (
                    <Text size="xl" fw={700}>
                      {returnDate?.toLocaleDateString(locale, {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                      }) || "-"}
                    </Text>
                  )}

                  <Text size="sm" c={compact ? "white" : "gray.7"}>
                    {compact
                      ? returnDate?.toLocaleDateString(locale, {
                          day: "2-digit",
                          month: "short",
                          year: "2-digit",
                        })
                      : returnDate?.toLocaleDateString(locale, {
                          weekday: "long",
                        })}
                  </Text>
                </>
              )}
            </Stack>
          </Grid.Col>
        </Grid>
      </Popover.Target>
      <Popover.Dropdown>
        <DatePicker
          numberOfColumns={2}
          type={type === "one-way" ? "default" : "range"}
          value={
            type === "one-way" ? departureDate : [departureDate, returnDate]
          }
          onChange={(dates) =>
            type === "one-way"
              ? onChange([getValidDate(dates as string), null])
              : onChange([getValidDate(dates[0]), getValidDate(dates[1])])
          }
        />
      </Popover.Dropdown>
    </Popover>
  );
};

export default FlightDatePicker;
