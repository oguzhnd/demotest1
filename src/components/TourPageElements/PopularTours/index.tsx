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

import classes from "../Tour.module.css";
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
    name: "Karadeniz Turları",
    image:
      "https://www.odamax.com/omag/wp-content/uploads/2023/10/karadeniz-turu-fiyatlari.jpg",
  },
  {
    category: "Domestic",
    name: "Akdeniz Turları",
    image:
      "https://www.kucukoteller.com.tr/storage/images/2024/05/22/4031f6dbdcb2501e7d7449c974883828a949b9de.webp",
  },
  {
    category: "Domestic",
    name: "Ege Turları",
    image:
      "https://www.datocms-assets.com/64859/1649143017-ege-tatil-bolgeleri.jpg",
  },
  {
    category: "Domestic",
    name: "Marmara Turları",
    image:
      "https://www.kucukoteller.com.tr/storage/images/2025/03/07/marmarada-gezilecek-yerlerwebp-1I8faAC8.webp",
  },
  {
    category: "Domestic",
    name: "İstanbul Çıkışlı Turlar",
    image:
      "https://media.istockphoto.com/id/1499025854/tr/foto%C4%9Fraf/touristic-sightseeing-ships-in-istanbul-city-turkey.jpg?s=612x612&w=0&k=20&c=DACaBiPteLi0jkW2ODo7ehYWNhIs178w4XZhD0UODVc=",
  },
  {
    category: "Domestic",
    name: "Kıbrıs Turları",
    image:
      "https://blog.tatil.com/wp-content/uploads/2018/01/kibrista-gezilecek-5-yer.webp",
  },
  {
    category: "Abroad",
    name: "Los Angeles Otelleri",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/5a1067ae12a3bea2639934f788fa482d.jpeg",
  },
  {
    category: "Abroad",
    name: "İtalya Turları",
    image:
      "https://www.hotelchick.com/upload/HotelDestination/a7d31309fc248b92de86604f45e1d73c.jpg",
  },
  {
    category: "Abroad",
    name: "İspanya Turları",
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

const PopularTours = () => {
  const t = useTranslations();

  const items = groupBy(flightTickets, "category");

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack gap={0}>
        <Text size="xl" fw={500}>
          {t("Popular Tours")}
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
            <ScrollArea offsetScrollbars scrollbarSize={7}>
              <Group gap="xs" wrap="nowrap">
                {keys(items).map((tab, i) => (
                  <Tabs.Tab key={`tab-${i}`} value={tab}>
                    {t(tab)}
                  </Tabs.Tab>
                ))}
              </Group>
            </ScrollArea>
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

export default PopularTours;
