import {
  Button,
  Container,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

import classes from "./SearchHistory.module.css";
import { useMediaQuery } from "@mantine/hooks";
import Hotel, { HotelSearchProps } from "./Hotel";
import Flight, { FlightSearchProps } from "./Flight";
import Rental, { RentalSearchProps } from "./Rental";

type SearchTabs = "hotel" | "flight" | "rental" | "tour";

const SearchHistory: FC<{ tabs?: SearchTabs[] }> = ({
  tabs = ["hotel", "flight", "rental", "tour"],
}) => {
  const t = useTranslations();

  const history: {
    hotel: HotelSearchProps[];
    flight: FlightSearchProps[];
    rental: RentalSearchProps[];
    tour: HotelSearchProps[];
  } = {
    hotel: [
      {
        image:
          "https://media.dev.paximum.com/hotelimages/102107/22102009241957.jpg",
        name: "Nashira City Resort Hotel",
      },
    ],
    flight: [
      {
        from: "AYT",
        to: "ESB",
      },
    ],
    rental: [
      {
        image:
          "https://static.yolcu360.com/thumbnails/87/26/8726242c937b041c8759b292e230535c.png",
        name: "Renault Clio",
      },
    ],
    tour: [
      {
        image:
          "https://academic-tour.com/images/tour/1305_vitrin_791249.jpg",
        name: "Karadeniz Turu",
      },
    ],
  };

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack gap={0}>
        <Group justify="space-between">
          <Text size="xl" fw={500}>
            {t("Past Searches")}
          </Text>
        </Group>

        <Tabs variant="pills" mt="lg" defaultValue={tabs[0]}>
          {tabs.length > 1 && (
            <Tabs.List mb="md">
              <ScrollArea offsetScrollbars scrollbarSize={7}>
                <Group gap="xs" wrap="nowrap">
                  {[
                    {
                      value: "hotel",
                      label: "Hotel",
                    },
                    {
                      value: "flight",
                      label: "Flight",
                    },
                    {
                      value: "rental",
                      label: "Car Rental",
                    },
                  ]
                    .filter((e) => tabs.includes(e.value as SearchTabs))
                    .map((tab, i) => (
                      <Tabs.Tab
                        key={`tab-${i}`}
                        value={tab.value}
                        className={classes.tab}
                      >
                        {t(tab.label)}
                      </Tabs.Tab>
                    ))}
                </Group>
              </ScrollArea>
            </Tabs.List>
          )}

          <Tabs.Panel value="hotel">
            <SimpleGrid
              cols={{
                base: 1,
                xs: 2,
                md: 3,
              }}
            >
              {history.hotel.map((hotel, j) => (
                <Hotel key={`hotel-${j}`} {...hotel} />
              ))}
            </SimpleGrid>
          </Tabs.Panel>
          <Tabs.Panel value="flight">
            <SimpleGrid
              cols={{
                base: 1,
                xs: 2,
                md: 3,
              }}
            >
              {history.flight.map((flight, j) => (
                <Flight key={`flight-${j}`} {...flight} />
              ))}
            </SimpleGrid>
          </Tabs.Panel>
          <Tabs.Panel value="rental">
            <SimpleGrid
              cols={{
                base: 1,
                xs: 2,
                md: 3,
              }}
            >
              {history.rental.map((rental, j) => (
                <Rental key={`rental-${j}`} {...rental} />
              ))}
            </SimpleGrid>
          </Tabs.Panel>
          <Tabs.Panel value="tour">
            <SimpleGrid
              cols={{
                base: 1,
                xs: 2,
                md: 3,
              }}
            >
              {history.tour.map((tour, j) => (
                <Rental key={`tour-${j}`} {...tour} />
              ))}
            </SimpleGrid>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  );
};

export default SearchHistory;
