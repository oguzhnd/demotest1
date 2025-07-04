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
import { TourSearchForm } from "../Contents/Tour";

const TourDatePicker: FC<{
  compact?: boolean;
  form: UseFormReturnType<TourSearchForm>;
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
          sm: 12,
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
              {getValidDate(form.getValues()?.date)?.toLocaleDateString(
                locale,
                {
                  month: "long",
                }
              )}
            </Text>
          )}
          <Text size="sm" c={compact ? "dark" : "gray.7"} truncate>
            {compact
              ? getValidDate(form.getValues()?.date)?.toLocaleDateString(
                  locale,
                  {
                    month: "long",
                    year: "numeric",
                  }
                )
              : getValidDate(form.getValues()?.date)?.toLocaleDateString(
                  locale,
                  {
                    year: "numeric",
                  }
                )}
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );

  const Content = (
    <DatePicker
      numberOfColumns={matchesSm ? 1 : 2}
      type="default"
      minDate={new Date()}
      value={form.getValues().date}
      onChange={(date) => {
        form.setFieldValue("date", getValidDate(date));
        setOpened(false);
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

export default TourDatePicker;
