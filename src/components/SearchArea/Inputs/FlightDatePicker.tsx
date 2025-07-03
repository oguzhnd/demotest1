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
import { UseFormReturnType } from "@mantine/form";
import { FlightSearchFormProps } from "../Contents/Flight";
import { useMediaQuery } from "@mantine/hooks";
import { isDate } from "lodash";

const FlightDatePicker: FC<{
  compact?: boolean;
  form: UseFormReturnType<FlightSearchFormProps>;
}> = ({ compact = false, form }) => {
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
          <Text size="sm" c={compact ? "gray.7" : undefined} truncate>
            {t("Departure")}
          </Text>
          {!compact && (
            <Text size="xl" fw={700} truncate>
              {getValidDate(
                form.getValues()?.departureDate
              )?.toLocaleDateString(locale, {
                day: "2-digit",
                month: "short",
                year: "2-digit",
              })}
            </Text>
          )}
          <Text size="sm" c={compact ? "dark" : "gray.7"} truncate>
            {compact
              ? getValidDate(
                  form.getValues()?.departureDate
                )?.toLocaleDateString(locale, {
                  day: "2-digit",
                  month: "short",
                  year: "2-digit",
                })
              : getValidDate(
                  form.getValues()?.departureDate
                )?.toLocaleDateString(locale, {
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
            if (form.getValues().type === "one-way") {
              form.setFieldValue("type", "round-trip");
            }
            setOpened((o) => !o);
          }}
        >
          {form.getValues().type === "round-trip" && (
            <Text size="sm" c={compact ? "gray.7" : undefined} truncate>
              {t("Return")}
            </Text>
          )}
          {form.getValues().type === "one-way" ? (
            <>
              <Group
                h="100%"
                align="center"
                gap="sm"
                c={compact ? "gray.7" : "gray.7"}
              >
                <IconPlus size={compact ? 16 : 20} />
                <Text size={compact ? "sm" : "md"} fw={500} lh={1} truncate>
                  {t("Add Return")}
                </Text>
              </Group>
            </>
          ) : (
            <>
              {!compact && (
                <Text size="xl" fw={700} truncate>
                  {getValidDate(
                    form.getValues()?.returnDate
                  )?.toLocaleDateString(locale, {
                    day: "2-digit",
                    month: "short",
                    year: "2-digit",
                  }) || "-"}
                </Text>
              )}

              <Text size="sm" c={compact ? "dark.9" : "gray.7"} truncate>
                {compact
                  ? getValidDate(
                      form.getValues()?.returnDate
                    )?.toLocaleDateString(locale, {
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                    })
                  : getValidDate(
                      form.getValues()?.returnDate
                    )?.toLocaleDateString(locale, {
                      weekday: "long",
                    })}
              </Text>
            </>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );

  const Content = (
    <DatePicker
      numberOfColumns={matchesSm ? 1 : 2}
      type={form.getValues().type === "one-way" ? "default" : "range"}
      minDate={new Date()}
      value={
        form.getValues().type === "one-way"
          ? form.getValues().departureDate
          : [form.getValues().departureDate, form.getValues().returnDate]
      }
      onChange={(dates) => {
        if (form.getValues().type === "one-way") {
          form.setFieldValue("departureDate", getValidDate(dates as string));
          form.setFieldValue("returnDate", null);
          setOpened(false);
        } else {
          const date1 = getValidDate(dates[0]);
          const date2 = getValidDate(dates[1]);
          form.setFieldValue("departureDate", date1);
          form.setFieldValue("returnDate", date2);

          if (isDate(date1) && isDate(date2)) {
            setOpened(false);
          }
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

export default FlightDatePicker;
