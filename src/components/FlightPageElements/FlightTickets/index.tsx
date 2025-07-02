import {
  Container,
  Group,
  ScrollArea,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";

import classes from "../Flight.module.css";
import { groupBy, keys } from "lodash";
import TicketCard from "./TicketCard";

export interface FlightTicketType {
  airline: {
    image: string;
    name: string;
  };
  from: string;
  to: string;
  dates: [Date, Date];
  class: string;
  price: number;
}

const flightTickets: Record<string, FlightTicketType[]> = {
  "Cheapest Flight Tickets": [
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
  ],
  "Most Popular Flight Tickets": [
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
    {
      airline: {
        image: "https://admin.nttreservation.com/AirlineLogo/icon/VF.png",
        name: "AJet",
      },
      from: "New York",
      to: "Miami",
      dates: [new Date(), new Date()],
      class: "Economy",
      price: 152,
    },
  ],
};

const FlightTickets = () => {
  const t = useTranslations();

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack gap={0}>
        <Text size="xl" fw={500}>
          {t("Most Visited Destinations")}
        </Text>
        <Text size="sm" c="gray.7">
          {t(
            "Exploring the Globe's Most Popular Destinations: From Iconic Cities to Breathtaking Wonders"
          )}
        </Text>
        <Tabs
          defaultValue={keys(flightTickets)[0]}
          mt="lg"
          variant="pills"
          classNames={{ tab: classes.mostVisitedTab }}
        >
          <Tabs.List mb="md">
            <ScrollArea offsetScrollbars scrollbarSize={7}>
              <Group gap="xs" wrap="nowrap">
                {keys(flightTickets).map((tab, i) => (
                  <Tabs.Tab key={`tab-${i}`} value={tab}>
                    {t(tab)}
                  </Tabs.Tab>
                ))}
              </Group>
            </ScrollArea>
          </Tabs.List>

          {keys(flightTickets).map((tab, i) => (
            <Tabs.Panel key={`tab-${i}`} value={tab}>
              <SimpleGrid
                cols={{
                  base: 1,
                  xs: 2,
                  sm: 4,
                }}
              >
                {flightTickets[tab].map((destination, j) => (
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

export default FlightTickets;
