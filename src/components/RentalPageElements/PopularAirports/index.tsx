import { Container, SimpleGrid, Stack, Tabs, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";

import classes from "../Rental.module.css";
import { groupBy, keys } from "lodash";
import TicketCard from "./AirportCard";

export interface PopularAirportType {
  category: string;
  image: string;
  name: string;
}

const flightTickets: PopularAirportType[] = [
  {
    category: "Domestic",
    name: "Bodrum Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/5d0ea431f1873b7fa36d5f74b509f391.jpg",
  },
  {
    category: "Domestic",
    name: "Bodrum Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/5d0ea431f1873b7fa36d5f74b509f391.jpg",
  },
  {
    category: "Domestic",
    name: "Bodrum Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/5d0ea431f1873b7fa36d5f74b509f391.jpg",
  },
  {
    category: "Domestic",
    name: "Bodrum Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/5d0ea431f1873b7fa36d5f74b509f391.jpg",
  },
  {
    category: "Domestic",
    name: "Bodrum Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/5d0ea431f1873b7fa36d5f74b509f391.jpg",
  },
  {
    category: "Domestic",
    name: "Bodrum Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/5d0ea431f1873b7fa36d5f74b509f391.jpg",
  },
  {
    category: "Abroad",
    name: "Los Angeles Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/5a1067ae12a3bea2639934f788fa482d.jpeg",
  },
  {
    category: "Abroad",
    name: "Tokyo Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/a7d31309fc248b92de86604f45e1d73c.jpg",
  },
  {
    category: "Abroad",
    name: "Dubai Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/875658156b306498e689123120a7cb9f.jpg",
  },
  {
    category: "Abroad",
    name: "Dubai Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/875658156b306498e689123120a7cb9f.jpg",
  },
];

const PopularAirports = () => {
  const t = useTranslations();

  const items = groupBy(flightTickets, "category");

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack gap={0}>
        <Text size="xl" fw={500}>
          {t("Popular Airports")}
        </Text>
        <Text size="sm" c="gray.7">
          {t("Here are some tips for finding the right airline to fly with")}
        </Text>
        <Tabs
          defaultValue={keys(items)[0]}
          mt="lg"
          variant="pills"
          classNames={{ tab: classes.mostVisitedTab }}
        >
          <Tabs.List mb="md">
            {keys(items).map((tab, i) => (
              <Tabs.Tab key={`tab-${i}`} value={tab}>
                {t(tab)}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {keys(items).map((tab, i) => (
            <Tabs.Panel key={`tab-${i}`} value={tab}>
              <SimpleGrid
                cols={{
                  base: 1,
                  xs: 2,
                  sm: 3,
                }}
              >
                {items[tab].map((destination, j) => (
                  <TicketCard key={`destination-${j}`} {...destination} />
                ))}
              </SimpleGrid>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Stack>
    </Container>
  );
};

export default PopularAirports;
