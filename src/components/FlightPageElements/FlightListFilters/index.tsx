import CheckboxFilter from "@/components/Filter/Elements/Checkbox";
import PriceFilter from "@/components/Filter/Elements/Price";
import { useFlightStore } from "@/store/products/flight";
import { Divider, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";
import HoursFilter from "./Elements/Hours";
import LuggageFilter from "./Elements/Luggage";
import { useEffect } from "react";

export interface FlightListFiltersForm {
  transfers: Array<"0" | "1" | "2+">;
  cabin: string[];
  baggages: number[];
  airports: string[];
  airlines: string[];
  price: [number, number]
  hours: {
    departure: {
      min: number;
      max: number;
    };
    return?: {
      min: number;
      max: number;
    };
  };
}

const FlightListFilters = () => {
  const t = useTranslations();

  const { filterOpt, setFlightFilters } = useFlightStore();

  const form = useForm<FlightListFiltersForm>({
    initialValues: {
      transfers: [],
      baggages: [],
      cabin: [],
      airports: [],
      airlines: [],
      price: [0, 0],
      hours: {
        departure: {
          min: 0,
          max: 0,
        },
        return: {
          min: 0,
          max: 0,
        },
      },
    },

    onValuesChange: (values) => {
      setFlightFilters(values);
    },
  });

  return (
    <Stack gap={0}>
      <CheckboxFilter
        label={t("Transfers")}
        options={[
          {
            value: "0",
            label: "Direkt",
          },
          {
            value: "1",
            label: "1 Aktarma",
          },
          {
            value: "2+",
            label: "2+ Aktarma",
          },
        ]}
        {...form.getInputProps("transfers")}
      />
      <Divider />
      {filterOpt?.baggages && (
        <CheckboxFilter
          label={t("Luggage")}
          options={filterOpt?.baggages?.map((e: any) => ({
            value: e.BaggageValue,
            label: `${e.BaggageValue} ${e.BaggageUnit}`,
          }))}
          {...form.getInputProps("baggages")}
        />
      )}
      {/* <LuggageFilter /> */}
      <Divider />
      {filterOpt?.classes && (
        <CheckboxFilter
          label={t("Cabin")}
          options={filterOpt?.classes.map((e: any) => ({
            value: e,
            label: t(e),
          }))}
          {...form.getInputProps("cabin")}
        />
      )}
      <Divider />
      <HoursFilter
        dHours={{
          min: filterOpt?.duration?.min || 0,
          max: filterOpt?.duration?.max || 1,
        }}
        {...form.getInputProps("hours")}
      />
      <Divider />
      {filterOpt?.airlines && (
        <CheckboxFilter
          label={t("Airline Companies")}
          options={filterOpt?.airlines.map((e: any) => ({
            value: e.name,
            label: e.name,
          }))}
          {...form.getInputProps("airlines")}
        />
      )}
      <Divider />
      {filterOpt?.airports && (
        <CheckboxFilter
          label={t("Airports")}
          options={filterOpt?.airports.map((e: any) => ({
            value: e.name,
            label: e.name,
          }))}
          {...form.getInputProps("airports")}
        />
      )}
      <Divider />
      {filterOpt?.departureFilters?.price && (
        <PriceFilter
          max={filterOpt.departureFilters?.price?.max}
          min={filterOpt.departureFilters?.price?.min}
          {...form.getInputProps("price")}
        />
      )}
      <Divider />
      <CheckboxFilter
        label={t("Transfer Airports")}
        options={[
          {
            value: "Berlin (BER)",
            label: "Berlin (BER)",
          },
          {
            value: "Dubai (DXB)",
            label: "Dubai (DXB)",
          },
          {
            value: "Ankara (ESB)",
            label: "Ankara (ESB)",
          },
        ]}
      />
    </Stack>
  );
};

export default FlightListFilters;

/* 
<Filter
                schema={[
                  {
                    formKey: "transfers",
                    label: "Transfers",
                    type: "checkbox",
                    options: ["Direkt", "1 Aktarma", "2+ Aktarma"],
                  },
                  {
                    formKey: "luggage",
                    label: "Wage Assistant",
                    type: "custom",
                    component: (
                      <Stack gap={6}>
                        <Group>
                          <Group gap={4}>
                            <IconLuggage size={16} />
                            <Text>{t("")}</Text>
                          </Group>
                        </Group>
                      </Stack>
                    )
                  },
                  {
                    formKey: "cabin",
                    label: "Cabin",
                    type: "checkbox",
                    options: ["Ekonomi", "Business"],
                  },
                ]}
              />
*/
