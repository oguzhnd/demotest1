import CheckboxFilter from "@/components/Filter/Elements/Checkbox";
import PriceFilter from "@/components/Filter/Elements/Price";
import { useFlightStore } from "@/store/products/flight";
import { Divider, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";
import HoursFilter from "./Elements/Hours";
import LuggageFilter from "./Elements/Luggage";

export interface FlightListFiltersForm {
  transfers: string[];
}

const FlightListFilters = () => {
  const t = useTranslations();

  const { filterOpt } = useFlightStore();

  const form = useForm<FlightListFiltersForm>({
    initialValues: {
      transfers: [],
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
      />
      <Divider />
      <LuggageFilter />
      <Divider />
      {filterOpt.classes && (
        <CheckboxFilter
          label={t("Cabin")}
          options={filterOpt?.classes.map((e: any) => ({
            value: e,
            label: t(e),
          }))}
        />
      )}
      <Divider />
      <HoursFilter />
      <Divider />
      {filterOpt.airlines && (
        <CheckboxFilter
          label={t("Airline Companies")}
          options={filterOpt?.airlines.map((e: any) => ({
            value: e.code,
            label: e.name,
          }))}
        />
      )}
      <Divider />
      {filterOpt.airports && (
        <CheckboxFilter
          label={t("Airports")}
          options={filterOpt?.airports.map((e: any) => ({
            value: e.code,
            label: e.name,
          }))}
        />
      )}
      <Divider />
      {filterOpt.departureFilters?.price && (
        <PriceFilter
          max={filterOpt.departureFilters.price.max}
          min={filterOpt.departureFilters.price.min}
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
