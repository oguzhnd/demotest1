"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import {
  BackgroundImage,
  Box,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { FC, useMemo } from "react";
import HotelSearch from "./Contents/Hotel";
import {
  IconBuilding,
  IconCar,
  IconPlaneDeparture,
  TablerIcon,
} from "@tabler/icons-react";
import FlightSearch from "./Contents/Flight";
import RentalSearch from "./Contents/Rental";

import classes from "./SearchArea.module.css";

export type SearchAreaTypes = "hotel" | "flight" | "rental";

const tabs: {
  key: SearchAreaTypes;
  spritePos: {
    default: string;
    active: string;
  };
  icon: TablerIcon;
  label: string;
  path: string;
  content: FC<{
    compact?: boolean;
  }>;
}[] = [
  {
    key: "hotel",
    spritePos: {
      active: "-54px -41.5px",
      default: "-52px 0px",
    },
    icon: IconBuilding,
    label: "Hotel",
    path: "/",
    content: HotelSearch,
  },
  {
    key: "flight",
    spritePos: {
      active: "0px -40px",
      default: "0px 0px",
    },
    icon: IconPlaneDeparture,
    label: "Flight",
    path: "/flight",
    content: FlightSearch,
  },
  {
    key: "rental",
    spritePos: {
      active: "-104px -120px",
      default: "-104px -80px",
    },
    icon: IconCar,
    label: "Car Rental",
    path: "/rental",
    content: RentalSearch,
  },
];

const SearchArea: FC<{
  type?: SearchAreaTypes;
}> = ({ type: initialType }) => {
  const t = useTranslations();

  const pathname = usePathname();
  const { push } = useRouter();

  const searchType = useMemo(() => {
    let sp = pathname.split("/")[1];

    return (sp === "" ? "hotel" : sp) as SearchAreaTypes;
  }, [pathname]);

  const InitialContent = tabs.find((e) => e.key === initialType)?.content

  return initialType && InitialContent ? (
    <Paper bg="#051422" radius={0}>
      <Container size="xl" py={20}>
        <InitialContent compact />
      </Container>
    </Paper>
  ) : (
    <BackgroundImage src={`/search-bg.jpg`}>
      <Container size="xl" py={100}>
        <Paper p="lg" mt="md" pt={60}>
          <Tabs pos="relative" value={searchType} variant="pills">
            <Group>
              <Paper className={classes.searchTabs} shadow="sm" px="sm">
                <Tabs.List>
                  {tabs.map(
                    ({ icon: Icon, label, key, path, spritePos }, i) => (
                      <Tabs.Tab
                        className={classes.tab}
                        key={`tab-${i}`}
                        value={key}
                        onClick={() => push(path)}
                      >
                        <Stack align="center" gap={6} pb={4}>
                          <Box
                            w={52}
                            h={40}
                            style={{
                              display: "inline-block",
                              backgroundImage: "url('/icon_sprite.png')",
                              backgroundSize: "260px 450px",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition:
                                searchType === key
                                  ? spritePos.active
                                  : spritePos.default,
                            }}
                          />
                          <Text size="sm" className={classes.tabLabel}>
                            {t(label)}
                          </Text>
                        </Stack>
                      </Tabs.Tab>
                    )
                  )}
                </Tabs.List>
              </Paper>
            </Group>

            {tabs.map(({ key, content: Content }, i) => (
              <Tabs.Panel key={`panel-${i}`} value={key}>
                <Content />
              </Tabs.Panel>
            ))}
          </Tabs>
        </Paper>
      </Container>
    </BackgroundImage>
  );
};

export default SearchArea;
