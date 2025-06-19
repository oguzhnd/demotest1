import FilterWrapper from "@/components/Filter/FilterWrapper";
import { Button, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import {
  IconAirConditioning,
  IconBarbell,
  IconBath,
  IconBedFlat,
  IconBus,
  IconChargingPile,
  IconDice6,
  IconGlassFull,
  IconGolf,
  IconMicrowave,
  IconParkingCircle,
  IconPaw,
  IconPlant2,
  IconRipple,
  IconSwimming,
  IconToolsKitchen2,
  IconWashMachine,
  IconWaterpolo,
  IconWifi,
  IconWindow,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import classes from "../../Hotel.module.css";

export const facilities = [
  {
    icon: IconBus,
    label: "Havaalanı ulaşım servisi dahil",
  },
  {
    icon: IconSwimming,
    label: "Havuz",
  },
  {
    icon: IconAirConditioning,
    label: "Klima",
  },
  {
    icon: IconWifi,
    label: "Kablosuz internet dahil",
  },
  {
    icon: IconBarbell,
    label: "Spor Salonu",
  },
  {
    icon: IconPlant2,
    label: "Spa",
  },
  {
    icon: IconPaw,
    label: "Evcil hayvan dostu",
  },
  {
    icon: IconBath,
    label: "Jakuzi",
  },
  {
    icon: IconToolsKitchen2,
    label: "Restoran",
  },
  {
    icon: IconMicrowave,
    label: "Mutfak",
  },
  {
    icon: IconParkingCircle,
    label: "Otopark",
  },
  {
    icon: IconGolf,
    label: "Golf sahası",
  },
  {
    icon: IconGlassFull,
    label: "Bar",
  },
  {
    icon: IconWashMachine,
    label: "Çamaşır makinesi ve kurutma makinesi",
  },
  {
    icon: IconWindow,
    label: "Açık alan",
  },
  {
    icon: IconChargingPile,
    label: "Elektrikli otomobil şarj istasyonu",
  },
  {
    icon: IconBedFlat,
    label: "Beşik",
  },
  {
    icon: IconRipple,
    label: "Okyanus manzarası",
  },
  {
    icon: IconDice6,
    label: "Kumarhane",
  },
  {
    icon: IconWaterpolo,
    label: "Su parkı",
  },
];

const FacilitiesAndFeatures = () => {
  const t = useTranslations();

  const [value, setValue] = useState<number[]>([]);

  return (
    <FilterWrapper label={t("Facilities & Features")}>
      <SimpleGrid cols={2} spacing={4}>
        {facilities.map(({ icon: Icon, label }, i) => (
          <Paper
            key={`item-${i}`}
            withBorder
            p="xs"
            className={classes.featureCard}
            data-active={value.includes(i)}
            onClick={() =>
              setValue((value) =>
                value.includes(i)
                  ? value.filter((e) => e !== i)
                  : value.concat(i)
              )
            }
          >
            <Stack gap={4} align="center ">
              <Icon size={20} />
              <Text size="xs" fw={500} ta="center">
                {label}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </FilterWrapper>
  );
};

export default FacilitiesAndFeatures;
