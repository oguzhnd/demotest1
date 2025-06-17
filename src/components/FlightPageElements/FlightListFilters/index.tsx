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

const FlightListFilters = () => {
  const t = useTranslations();

  return (
    <Stack gap={0}>
      <CheckboxFilter
        label={t("Transfers")}
        options={[
          {
            value: "Direkt",
            label: "Direkt",
          },
          {
            value: "1 Aktarma",
            label: "1 Aktarma",
          },
          {
            value: "2+ Aktarma",
            label: "2+ Aktarma",
          },
        ]}
      />
      <Divider />
      <LuggageFilter />
      <Divider />
      <CheckboxFilter
        label={t("Cabin")}
        options={[
          {
            value: "Ekonomi",
            label: "Ekonomi",
          },
          {
            value: "Business",
            label: "Business",
          },
        ]}
      />
      <Divider />
      <HoursFilter />
      <Divider />
      <CheckboxFilter
        label={t("Airline Companies")}
        options={[
          {
            value: "AJet",
            label: "AJet",
          },
          {
            value: "Pegasus Airlines",
            label: "Pegasus Airlines",
          },
          {
            value: "Turkish Airlines",
            label: "Turkish Airlines",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Airline Companies")}
        options={[
          {
            value: "SAW: Sabiha Gökçen",
            label: "SAW: Sabiha Gökçen",
          },
          {
            value: "IST: İstanbul",
            label: "IST: İstanbul",
          },
          {
            value: "AYT: Antalya",
            label: "AYT: Antalya",
          },
        ]}
      />
      <Divider />
      <PriceFilter />
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
