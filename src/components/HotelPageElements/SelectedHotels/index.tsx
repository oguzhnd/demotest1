import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import HotelCard from "./HotelCard";
import { Container, Stack, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

export interface SelectedHotelType {
  id: number;
  image: string;
  name: string;
  city: string;
}

const hotels: SelectedHotelType[] = [
  {
    id: 1,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/c1b09a761f29b337389a0b12b85391ea.jpeg",
    name: "AMILLA MALDIVES",
    city: "Baa",
  },
  {
    id: 2,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/0439e098bd0add29b1571b830cd5800e.jpg",
    name: "The Rooms Boutique Hotel",
    city: "Uljanovsk",
  },
  {
    id: 3,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/13e00278859f50dd852713e53416d690.jpg",
    name: "THE LAND OF LEGENDS KİNGDOM",
    city: "ANTALYA",
  },
  {
    id: 4,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/1baef522db7f4587bf39556b78f6f339.jpg",
    name: "THE ROOMS",
    city: "Moscow",
  },
  {
    id: 5,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/69a34f1b27e57947ff84eef2d5b67993.jpeg",
    name: "BURJ AL ARAB ",
    city: "Dubai",
  },
  {
    id: 6,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/2a306846e0531f625cc5be26dbc28e59.jpg",
    name: "MOVENPICK RESORT",
    city: "Bali",
  },
  {
    id: 7,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/c1b09a761f29b337389a0b12b85391ea.jpeg",
    name: "AMILLA MALDIVES",
    city: "Baa",
  },
  {
    id: 8,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/0439e098bd0add29b1571b830cd5800e.jpg",
    name: "The Rooms Boutique Hotel",
    city: "Uljanovsk",
  },
  {
    id: 9,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/13e00278859f50dd852713e53416d690.jpg",
    name: "THE LAND OF LEGENDS KİNGDOM",
    city: "ANTALYA",
  },
  {
    id: 10,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/1baef522db7f4587bf39556b78f6f339.jpg",
    name: "THE ROOMS",
    city: "Moscow",
  },
  {
    id: 11,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/69a34f1b27e57947ff84eef2d5b67993.jpeg",
    name: "BURJ AL ARAB ",
    city: "Dubai",
  },
  {
    id: 12,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/2a306846e0531f625cc5be26dbc28e59.jpg",
    name: "MOVENPICK RESORT",
    city: "Bali",
  },
  {
    id: 13,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/c1b09a761f29b337389a0b12b85391ea.jpeg",
    name: "AMILLA MALDIVES",
    city: "Baa",
  },
  {
    id: 14,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/0439e098bd0add29b1571b830cd5800e.jpg",
    name: "The Rooms Boutique Hotel",
    city: "Uljanovsk",
  },
  {
    id: 15,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/13e00278859f50dd852713e53416d690.jpg",
    name: "THE LAND OF LEGENDS KİNGDOM",
    city: "ANTALYA",
  },
  {
    id: 16,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/1baef522db7f4587bf39556b78f6f339.jpg",
    name: "THE ROOMS",
    city: "Moscow",
  },
  {
    id: 17,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/69a34f1b27e57947ff84eef2d5b67993.jpeg",
    name: "BURJ AL ARAB ",
    city: "Dubai",
  },
  {
    id: 18,
    image:
      "https://www.hotelchick.com/upload/FeaturedHotel/2a306846e0531f625cc5be26dbc28e59.jpg",
    name: "MOVENPICK RESORT",
    city: "Bali",
  },
];

const SelectedHotels = () => {
  const t = useTranslations();

  const [openedCard, setOpenedCard] = useState(5);

  return (
    <Stack py={20} gap={20}>
      <Container w="100%" size="xl">
        <Stack gap={0}>
          <Text size="xl" fw={500}>
            {t("Our selection of hotels")}
          </Text>
          <Text size="sm" c="gray.7">
            {t("Here are some tips for finding the right place to stay")}
          </Text>
        </Stack>
      </Container>
      <Carousel
        slideSize={128}
        withControls={false}
        height={160}
      >
        {hotels.map((hotel, i) => (
          <Carousel.Slide key={`hotel-${i}`}>
            <HotelCard
              isOpen={openedCard === i}
              setOpenedCard={() => setOpenedCard(i)}
              {...hotel}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Stack>
  );
};

export default SelectedHotels;
