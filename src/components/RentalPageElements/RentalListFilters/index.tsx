import CheckboxFilter from "@/components/Filter/Elements/Checkbox";
import FilterWrapper from "@/components/Filter/FilterWrapper";
import { ActionIcon, Divider, Group, Stack, Text } from "@mantine/core";
import {
  IconBriefcase,
  IconLuggage,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";
import LuggageFilter from "./Elements/Luggage";
import HoursFilter from "./Elements/Hours";
import PriceFilter from "@/components/Filter/Elements/Price";
import { useRentalStore } from "@/store/products/rental";
import { useForm } from "@mantine/form";

export interface RentalListFiltersForm {
  transmission: string[];
  vendor: string[];
  fuel: string[];
  brand: string[];
  model: string[];
  price: [number, number];
  deposit: [number, number];
  deliveryType: string[];
}

const RentalListFilters = () => {
  const t = useTranslations();

  const { filterOpt, setRentalFilters } = useRentalStore();

  const form = useForm<RentalListFiltersForm>({
    initialValues: {
      transmission: [],
      vendor: [],
      fuel: [],
      brand: [],
      model: [],
      price: [0, 100],
      deposit: [0, 100],
      deliveryType: [],
    },
    onValuesChange: (values) => {
      setRentalFilters(values);
    },
  });

  return (
    <Stack gap={0}>
      {filterOpt?.transmission && (
        <CheckboxFilter
          label={t("Gear Type")}
          options={filterOpt?.transmission?.map((e) => ({
            value: e.value,
            label: e.value,
            count: e.count
          }))}
          {...form.getInputProps("transmission")}
        />
      )}
      <Divider />
      {filterOpt?.vendor && (
        <CheckboxFilter
          label={t("Rental Company")}
          options={filterOpt?.vendor?.map((e) => ({
            value: e.value,
            label: e.value,
            count: e.count
          }))}
          {...form.getInputProps("vendor")}
        />
      )}
      <Divider />
      {filterOpt?.fuel && (
        <CheckboxFilter
          label={t("Fuel Type")}
          options={filterOpt?.fuel?.map((e) => ({
            value: e.value,
            label: e.value,
            count: e.count
          }))}
          {...form.getInputProps("fuel")}
        />
      )}
      <Divider />
      {filterOpt?.brand && (
        <CheckboxFilter
          label={t("Vehicle Brand")}
          options={filterOpt?.brand?.map((e) => ({
            value: e.value,
            label: e.value,
            count: e.count
          }))}
          {...form.getInputProps("brand")}
        />
      )}
      <Divider />
      {filterOpt?.model && (
        <CheckboxFilter
          label={t("Vehicle Model")}
          options={filterOpt?.model?.map((e) => ({
            value: e.value,
            label: e.value,
            count: e.count
          }))}
          {...form.getInputProps("model")}
        />
      )}
      <Divider />
      {filterOpt?.provision && (
        <PriceFilter
          label={t("Deposit")}
          min={filterOpt?.provision.minimumValue}
          max={filterOpt?.provision.maximumValue}
          {...form.getInputProps("deposit")}
        />
      )}
      {/* <CheckboxFilter
        label={t("Total Kilometer Limit")}
        options={filterOpt?.distance_limit?.map((e) => ({
            value: e.value,
            label: e.value,
          }))}
      /> */}
      <Divider />
      {filterOpt?.price && (
        <PriceFilter
          min={filterOpt?.price.minimumValue}
          max={filterOpt?.price.maximumValue}
          {...form.getInputProps("price")}
        />
      )}
      <Divider />
      <Divider />
      {filterOpt?.delivery_type && (
        <CheckboxFilter
          label={t("Vehicle Delivery Method")}
          options={filterOpt?.delivery_type?.map((e) => ({
            value: e.value,
            label: e.value,
            count: e.count
          }))}
          {...form.getInputProps("deliveryType")}
        />
      )}
      <Divider />
      {/* <CheckboxFilter
        label={t("Deposit")}
        options={filterOpt?.provision?.map((e) => ({
            value: e.value,
            label: e.value,
          }))}
      /> */}
    </Stack>
  );
};

export default RentalListFilters;

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
