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

const HotelListFilters = () => {
  const t = useTranslations();

  return (
    <Stack gap={0}>
      <SearchFilter label={t("Hotel Name")} />
      <Divider />
      <CheckboxFilter
        label={t("Popular Filters")}
        options={[
          {
            value: "Kahvaltı Dahil",
            label: "Kahvaltı Dahil",
          },
          {
            value: "Klima",
            label: "Klima",
          },
          {
            value: "Kablosuz İnternet",
            label: "Kablosuz İnternet",
          },
          {
            value: "Spor Salonu",
            label: "Spor Salonu",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Meal Plans")}
        options={[
          {
            value: "Kahvaltı dahil",
            label: "Kahvaltı dahil",
          },
          {
            value: "Akşam yemeği dahil",
            label: "Akşam yemeği dahil",
          },
          {
            value: "Öğle yemeği dahil",
            label: "Öğle yemeği dahil",
          },
          {
            value: "Her şey dahil",
            label: "Her şey dahil",
          },
        ]}
      />
      <Divider />
      <PriceFilter max={100} min={0} />
      <Divider />
      <CheckboxFilter
        label={t("Star Rating")}
        options={[
          {
            value: "5 Yıldızlı",
            label: "5 Yıldızlı",
          },
          {
            value: "4 Yıldızlı",
            label: "4 Yıldızlı",
          },
          {
            value: "3 Yıldızlı",
            label: "3 Yıldızlı",
          },
          {
            value: "2 Yıldızlı",
            label: "2 Yıldızlı",
          },
          {
            value: "1 Yıldızlı",
            label: "1 Yıldızlı",
          },
        ]}
      />
      <Divider />
      <FacilitiesAndFeatures />
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
