"use client";

import { Carousel } from "@mantine/carousel";
import { Container, Stack, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import { useState } from "react";
import CityCard from "./CityCard";

export interface PopularCityType {
  id: number;
  image: string;
  name: string;
}

const cities: PopularCityType[] = [
  {
    id: 1,
    image:
      "https://www.hotelchick.com/upload/Cities/1783d4d80b84da4b8438cee151f0b687.jpg",
    name: "London Travel Guide",
  },
  {
    id: 2,
    image:
      "https://www.hotelchick.com/upload/Cities/4d5c6570f8862f73e581b035afaefa41.jpg",
    name: "Everything You Need to Know for Your New York Trip !",
  },
  {
    id: 3,
    image:
      "https://www.hotelchick.com/upload/Cities/fe5fd9d2cfb12439fca57fb2138ef68e.jpg",
    name: "Things You Should Know When Planning Your Trip to Tokyo: Hotels, Flights, Attractions, and Food Recommendations",
  },
  {
    id: 4,
    image:
      "https://www.hotelchick.com/upload/Cities/de8478981e773eff362928c181b84a8c.jpg",
    name: "City Steeped in History: Rome – A Legendary Travel Guide from Ancient Rome to the Vatican",
  },
  {
    id: 5,
    image:
      "https://www.hotelchick.com/upload/Cities/9e88353c1a7f8fa9bcbc314de394c3e0.jpg",
    name: "Dubai: A Rising Star and a Global Metropolis ",
  }
];

const PopularCities = () => {
  const t = useTranslations();

  const [openedCard, setOpenedCard] = useState(2);

  return (
    <Stack py={20} gap={20}>
      <Container w="100%" size="xl">
        <Stack gap={0}>
          <Text size="xl" fw={500}>
            {t("Populer Cities")}
          </Text>
          <Text size="sm" c="gray.7">
            {t("Here are some tips for finding the right place to stay")}
          </Text>
        </Stack>
      </Container>
      <Carousel slideSize={128} withControls={false} height={160}>
        {cities.map((city, i) => (
          <Carousel.Slide key={`city-${i}`}>
            <CityCard
              isOpen={openedCard === i}
              setOpenedCard={() => setOpenedCard(i)}
              {...city}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Stack>
  );
};

export default PopularCities;
