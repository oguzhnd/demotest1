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

const RentalListFilters = () => {
  const t = useTranslations();

  return (
    <Stack gap={0}>
      <CheckboxFilter
        label={t("Gear Type")}
        options={[
          {
            value: "Manuel",
            label: "Manuel",
          },
          {
            value: "Otomatik",
            label: "Otomatik",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Rental Company")}
        options={[
          {
            value: "724Rent",
            label: "724Rent",
          },
          {
            value: "Autoland",
            label: "Autoland",
          },
          {
            value: "Avis",
            label: "Avis",
          },
          {
            value: "Biwatt",
            label: "Biwatt",
          },
          {
            value: "Budget",
            label: "Budget",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Fuel Type")}
        options={[
          {
            value: "Benzin/Dizel",
            label: "Benzin/Dizel",
          },
          {
            value: "Benzin",
            label: "Benzin",
          },
          {
            value: "Dizel",
            label: "Dizel",
          },
          {
            value: "Elektrik",
            label: "Elektrik",
          },
          {
            value: "Hybrid",
            label: "Hybrid",
          },
          {
            value: "LPG",
            label: "LPG",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Vehicle Brand")}
        options={[
          {
            value: "Audi",
            label: "Audi",
          },
          {
            value: "BMW",
            label: "BMW",
          },
          {
            value: "BYD",
            label: "BYD",
          },
          {
            value: "Chery",
            label: "Chery",
          },
          {
            value: "Citroen",
            label: "Citroen",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Vehicle Model")}
        options={[
          {
            value: "2 Series",
            label: "2 Series",
          },
          {
            value: "2008",
            label: "2008",
          },
          {
            value: "3 Series",
            label: "3 Series",
          },
          {
            value: "Accent Blue",
            label: "Accent Blue",
          },
          {
            value: "Astra Sedan",
            label: "Astra Sedan",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Total Kilometer Limit")}
        options={[
          {
            value: "Sınırsız Kilometre",
            label: "Sınırsız Kilometre",
          },
          {
            value: "500-1000 km",
            label: "500-1000 km",
          },
          {
            value: "1000-1500 km",
            label: "1000-1500 km",
          },
          {
            value: "1500-2000 km",
            label: "1500-2000 km",
          },
          {
            value: "2500 +",
            label: "2500 +",
          },
        ]}
      />
      <Divider />
      <PriceFilter min={0} max={100} />
      <Divider />
      <CheckboxFilter
        label={t("Seat Count")}
        options={[
          {
            value: "5",
            label: "5",
          },
          {
            value: "4",
            label: "4",
          },
          {
            value: "8",
            label: "8",
          },
          {
            value: "9",
            label: "9",
          },
          {
            value: "7",
            label: "7",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Vehicle Delivery Method")}
        options={[
          {
            value: "Havalimanı içi ofis",
            label: "Havalimanı içi ofis",
          },
          {
            value: "Havalimanı dışı servis aracı ile transfer",
            label: "Havalimanı dışı servis aracı ile transfer",
          },
          {
            value: "Havalimanı dışı vale hizmeti",
            label: "Havalimanı dışı vale hizmeti",
          },
          {
            value: "Buluşma & Karşılaşma",
            label: "Buluşma & Karşılaşma",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Deposit")}
        options={[
          {
            value: "TRY 1500-2500",
            label: "TRY 1500-2500",
          },
          {
            value: "TRY 2500-3500",
            label: "TRY 2500-3500",
          },
          {
            value: "TRY 3500-5000",
            label: "TRY 3500-5000",
          },
          {
            value: "TRY 5000+",
            label: "TRY 5000+",
          },
        ]}
      />
      <Divider />
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
