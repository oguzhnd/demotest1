import { SimpleGrid, Stack, Text } from "@mantine/core";
import React from "react";
import CityCard from "./CityCard";
import { useTranslations } from "next-intl";

export interface TourCityType {
  id: number;
  image: string;
  name: string;
}

const cities: TourCityType[] = [
  {
    id: 1,
    image:
      "https://www.hotelchick.com/upload/Cities/1783d4d80b84da4b8438cee151f0b687.jpg",
    name: "London",
  },
  {
    id: 2,
    image:
      "https://www.hotelchick.com/upload/Cities/4d5c6570f8862f73e581b035afaefa41.jpg",
    name: "New York",
  },
  {
    id: 3,
    image:
      "https://www.hotelchick.com/upload/Cities/fe5fd9d2cfb12439fca57fb2138ef68e.jpg",
    name: "Tokyo",
  },
  {
    id: 4,
    image:
      "https://www.hotelchick.com/upload/Cities/de8478981e773eff362928c181b84a8c.jpg",
    name: "Rome",
  },
  {
    id: 5,
    image:
      "https://www.hotelchick.com/upload/Cities/9e88353c1a7f8fa9bcbc314de394c3e0.jpg",
    name: "Dubai",
  },
];
const TourCities = () => {
  const t = useTranslations();

  return (
    <Stack>
      <Text size="lg" fw={500}>
        {t("Cities")}
      </Text>
      <SimpleGrid
        cols={{
          base: 1,
          xs: 2,
          sm: 3,
          md: 4,
        }}
      >
        {cities.map((city, i) => (
          <CityCard key={`city-${i}`} {...city} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default TourCities;
