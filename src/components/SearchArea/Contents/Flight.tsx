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
import React, { FC, useCallback, useEffect, useState } from "react";

import classes from "../SearchArea.module.css";
import AirportInput, { AirportType } from "../Inputs/AirportInput";
import { useForm } from "@mantine/form";
import FlightDatePicker from "../Inputs/FlightDatePicker";
import FlightPassengersInput from "../Inputs/FlightPassengersInput";
import { useMediaQuery } from "@mantine/hooks";
import { xiorInstance } from "@/utils/xior";
import { isDate } from "lodash";
import { useLoading } from "@/utils/hooks/useLoading";
import { useFlightStore } from "@/store/products/flight";
import { useSearchStore } from "@/store/search";

export interface FlightSearchFormProps {
  type: "one-way" | "round-trip";
  dep: AirportType | undefined;
  arr: AirportType | undefined;
  departureDate: Date | null;
  returnDate: Date | null;
  passengers: {
    adult: number;
    child: number;
    baby: number;
  };
  class: "economy" | "business";
}

const convertDate = (date: Date | null) => {
  return isDate(date)
    ? [date.getFullYear(), date.getMonth(), date.getDate()].join("-")
    : null;
};

const FlightSearch: FC<{
  compact?: boolean;
}> = ({ compact = false }) => {
  const t = useTranslations();

  const { push } = useRouter();
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const { setFlightList, setFilterOpt } = useFlightStore();
  const { flightSearch, setSearch } = useSearchStore();

  const [inputsLoading, setInputsLoading] = useState(true);
  const [loading, startLoading, stopLoading] = useLoading();

  const form = useForm<FlightSearchFormProps>({
    initialValues: {
      type: "one-way",
      dep: undefined,
      arr: undefined,
      departureDate: new Date(),
      returnDate: null,
      passengers: {
        adult: 1,
        child: 0,
        baby: 0,
      },
      class: "economy",
    },
  });

  const handleSubmit = useCallback(async (values: FlightSearchFormProps) => {
    try {
      startLoading();
      const res = await xiorInstance.post("/searchFlight", {
        dep:
          values.dep?.type === 1
            ? values.dep.city?.id
            : values.dep?.airport?.id,
        arr:
          values.arr?.type === 1
            ? values.arr.city?.id
            : values.arr?.airport?.id,
        dDate: convertDate(values.departureDate),
        aDate: convertDate(values.returnDate),
        adt: values.passengers.adult + "",
        chd: values.passengers.child + "",
        inf: values.passengers.baby + "",
        serviceTypes: "",
        nonStop: "0",
      });

      console.log(res)

      setFlightList(res.data.result);
      setFilterOpt(res.data.filterOpt);
      setSearch("flightSearch", values);
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();

      push("/flight/list");
    }
  }, []);

  const Parent = matchesSm ? Stack : compact ? Group : Stack;

  const updateSearchForm = useCallback(() => {
    form.setValues(flightSearch);
    setInputsLoading(false);
  }, [flightSearch]);

  useEffect(() => {
    updateSearchForm();
  }, [flightSearch]);

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Parent
        pos="relative"
        wrap="nowrap"
        pb={compact ? 0 : 8}
        gap={8}
        align={compact ? (matchesSm ? "stretch" : "flex-end") : undefined}
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
            <Grid.Col
              span={{
                base: 12,
                sm: 2,
              }}
            >
              <AirportInput
                disabled={inputsLoading}
                compact={compact}
                title={
                  form.getValues().dep?.type === 1
                    ? form.getValues().dep?.city?.id
                    : form.getValues().dep?.airport?.id
                }
                description={
                  form.getValues().dep?.type === 1
                    ? form.getValues().dep?.city?.name
                    : form.getValues().dep?.airport?.name
                }
                label="From"
                form={form}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                sm: 2,
              }}
            >
              <AirportInput
                compact={compact}
                title={
                  form.getValues().arr?.type === 1
                    ? form.getValues().arr?.city?.id
                    : form.getValues().arr?.airport?.id
                }
                description={
                  form.getValues().arr?.type === 1
                    ? form.getValues().arr?.city?.name
                    : form.getValues().arr?.airport?.name
                }
                label="To"
                form={form}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                sm: 4,
              }}
            >
              <FlightDatePicker compact={compact} form={form} />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                sm: 2,
              }}
            >
              <FlightPassengersInput compact={compact} form={form} />
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
              loading={loading}
              type="submit"
              size="compact-lg"
              px="xl"
              h={40}
              radius="xl"
              style={{ flexShrink: 0 }}
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
