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
import SearchFilter from "@/components/Filter/Elements/Search";
import FacilitiesAndFeatures from "./Elements/FacilitiesAndFeatures";
import { useHotelStore } from "@/store/products/hotel";
import { useForm } from "@mantine/form";

export interface HotelListFiltersForm {
  boardGroups: string[];
  facilities: string[];
  ratings: string[];
  roomTypes: string[];
  stars: string[];
  themes: string[];
}

const HotelListFilters = () => {
  const t = useTranslations();

  const { filterOpt, setHotelFilters } = useHotelStore();

  const form = useForm<HotelListFiltersForm>({
    initialValues: {
      boardGroups: [],
      facilities: [],
      ratings: [],
      roomTypes: [],
      stars: [],
      themes: [],
    },

    onValuesChange: (values) => {
      setHotelFilters(values);
    },
  });

  return (
    <Stack gap={0}>
      <SearchFilter label={t("Hotel Name")} />
      <Divider />
      {filterOpt.boardGroups && (
        <CheckboxFilter
          label={t("Popular Filters")}
          options={filterOpt.boardGroups.map((e: string) => ({
            value: e,
            label: e,
          }))}
          {...form.getInputProps("boardGroups")}
        />
      )}
      <Divider />
      {filterOpt.roomTypes && (
        <CheckboxFilter
          label={t("Room Types")}
          options={filterOpt.roomTypes.map((e: string) => ({
            value: e,
            label: e,
          }))}
          {...form.getInputProps("roomTypes")}
        />
      )}
      <Divider />
      {filterOpt.themes && (
        <CheckboxFilter
          label={t("Hotel Themes")}
          options={filterOpt.themes.map((e: string) => ({
            value: e,
            label: e,
          }))}
          {...form.getInputProps("themes")}
        />
      )}
      <Divider />
      <PriceFilter max={100} min={0} value={[0, 100]} onChange={() => {}} />
      <Divider />
      {filterOpt.stars && (
        <CheckboxFilter
          label={t("Star Rating")}
          options={filterOpt.stars.map((e: number) => ({
            value: e,
            label: e,
          }))}
          {...form.getInputProps("stars")}
        />
      )}
      <Divider />
      {filterOpt.ratings && (
        <CheckboxFilter
          label={t("Hotel Rating")}
          options={filterOpt.ratings.map((e: number) => ({
            value: e,
            label: e,
          }))}
          {...form.getInputProps("ratings")}
        />
      )}
      <Divider />
      {filterOpt.facilities && (
        <FacilitiesAndFeatures {...form.getInputProps("facilities")} />
      )}
    </Stack>
  );
};

export default HotelListFilters;

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
