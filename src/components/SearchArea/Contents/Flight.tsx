import { useRouter } from "@/i18n/navigation";
import {
  Button,
  CheckIcon,
  Grid,
  Group,
  Radio,
  Stack,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconSearch } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { FC, useCallback } from "react";

import classes from "../SearchArea.module.css";
import AirportInput from "../Inputs/AirportInput";
import { useForm } from "@mantine/form";
import FlightDatePicker from "../Inputs/FlightDatePicker";
import FlightPassengersInput from "../Inputs/FlightPassengersInput";

const FlightSearch: FC<{
  compact?: boolean;
}> = ({ compact = false }) => {
  const t = useTranslations();

  const { push } = useRouter();

  const form = useForm<{
    type: "one-way" | "round-trip";
    departureDate: Date | null;
    returnDate: Date | null;
    passengers: {
      adult: number
      child: number
      baby: number
    }
    class: "economy" | "business"
  }>({
    initialValues: {
      type: "one-way",
      departureDate: new Date(),
      returnDate: null,
      passengers: {
        adult: 1,
        child: 0,
        baby: 0
      },
      class: "economy"
    },
  });

  const handleSubmit = useCallback(() => {}, []);

  const Parent = compact ? Group : Stack;

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Parent
        pos="relative"
        wrap="nowrap"
        pb={compact ? 0 : 8}
        gap={8}
        align={compact ? "flex-end" : undefined}
      >
        <Stack w="100%" gap={8}>
          <Radio.Group {...form.getInputProps("type")}>
            <Group gap="xs">
              <Radio
                className={classes.flightTypeRadio}
                data-compact={compact}
                value="one-way"
                label={t("One Way")}
                icon={CheckIcon}
                c={compact ? "white" : undefined}
              />
              <Radio
                className={classes.flightTypeRadio}
                data-compact={compact}
                value="round-trip"
                label={t("Round Trip")}
                icon={CheckIcon}
                c={compact ? "white" : undefined}
              />
            </Group>
          </Radio.Group>
          <Grid
            w="100%"
            columns={10}
            gutter={0}
            style={{
              borderRadius: "var(--mantine-radius-md)",
              border: "1px solid var(--mantine-color-gray-3)",
              overflow: "hidden",
            }}
          >
            <Grid.Col span={2}>
              <AirportInput compact={compact} label="From" />
            </Grid.Col>
            <Grid.Col span={2}>
              <AirportInput compact={compact} label="To" />
            </Grid.Col>
            <Grid.Col span={4}>
              <FlightDatePicker
                compact={compact}
                type={form.getValues().type}
                setType={(type) => form.setFieldValue("type", type)}
                departureDate={form.getValues().departureDate}
                returnDate={form.getValues().returnDate}
                onChange={(dates) => {
                  form.setFieldValue("departureDate", dates[0]);

                  if (form.getValues().type === "round-trip") {
                    form.setFieldValue("returnDate", dates[1]);
                  } else {
                    form.setFieldValue("returnDate", null);
                  }
                }}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <FlightPassengersInput compact={compact} />
            </Grid.Col>
          </Grid>
        </Stack>
        <Stack h={compact ? 60.59 : "auto"} justify="center">
          <Group
            justify="center"
            pos={compact ? "relative" : "absolute"}
            w={compact ? "auto" : "100%"}
            bottom={compact ? undefined : -40}
          >
            <Button
              type="submit"
              size="compact-lg"
              px="xl"
              h={40}
              radius="xl"
              style={{ flexShrink: 0 }}
              onClick={() => push("/flight/list")}
            >
              {t("Search Flight")}
            </Button>
          </Group>
        </Stack>
      </Parent>
    </form>
  );
};

export default FlightSearch;
