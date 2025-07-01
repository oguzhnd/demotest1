"use client";

import FlightContent from "@/components/AccountPageElements/MyTravels/FlightContent";
import HotelContent from "@/components/AccountPageElements/MyTravels/HotelContent";
import RentalContent from "@/components/AccountPageElements/MyTravels/RentalContent";
import { SearchAreaTypes } from "@/components/SearchArea";
import {
  Box,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";

const tabs: {
  key: SearchAreaTypes;
  spritePos: {
    default: string;
    active: string;
  };
  label: string;
  content: FC<{
    spritePos: string;
  }>;
}[] = [
  {
    key: "hotel",
    spritePos: {
      active: "-54px -41.5px",
      default: "-52px 0px",
    },
    label: "Hotel",
    content: HotelContent,
  },
  {
    key: "flight",
    spritePos: {
      active: "0px -40px",
      default: "0px 0px",
    },
    label: "Flight",
    content: FlightContent,
  },
  {
    key: "rental",
    spritePos: {
      active: "-104px -120px",
      default: "-104px -80px",
    },
    label: "Car Rental",
    content: RentalContent,
  },
];

const MyTravels = () => {
  const t = useTranslations();

  const [value, setValue] = useState<string | null>(tabs[0].key);

  return (
    <Stack>
      <Text size="lg" fw={500}>
        {t("My Travels")}
      </Text>

      <Tabs variant="outline" value={value} onChange={setValue}>
        <Tabs.List mb="sm">
          <ScrollArea offsetScrollbars scrollbarSize={7}>
            <Group wrap="nowrap">
              {tabs.map((tab, i) => (
                <Tabs.Tab
                  key={`tab-${i}`}
                  value={tab.key}
                  leftSection={
                    <Box
                      w={52}
                      h={40}
                      style={{
                        display: "inline-block",
                        backgroundImage: "url('/icon_sprite.png')",
                        backgroundSize: "260px 450px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition:
                          value === tab.key
                            ? tab.spritePos.active
                            : tab.spritePos.default,
                      }}
                    />
                  }
                >
                  <Text size="sm" fw={500}>
                    {t(tab.label)}
                  </Text>
                </Tabs.Tab>
              ))}
            </Group>
          </ScrollArea>
        </Tabs.List>

        {tabs.map(({ key, content: Content, spritePos }, i) => (
          <Tabs.Panel key={`tab-${i}`} value={key}>
            <Content spritePos={spritePos.active} />
          </Tabs.Panel>
        ))}
      </Tabs>
    </Stack>
  );
};

export default MyTravels;
