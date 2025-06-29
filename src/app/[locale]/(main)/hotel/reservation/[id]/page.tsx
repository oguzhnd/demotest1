"use client";

import Payment from "@/components/FlightPageElements/_Booking/Payment";
import Cancellation from "@/components/HotelPageElements/_Booking/Cancellation";
import HotelDetails from "@/components/HotelPageElements/_Booking/HotelDetails";
import PriceDetails from "@/components/HotelPageElements/_Booking/PriceDetails";
import ReservationInformations from "@/components/HotelPageElements/_Booking/ReservationInformations";
import RoomGuestInformations from "@/components/HotelPageElements/_Booking/RoomGuestInformations";
import SpecialRequests from "@/components/HotelPageElements/_Booking/SpecialRequests";
import { useRouter } from "@/i18n/navigation";
import { useHotelStore } from "@/store/products/hotel";
import { Checkbox, Container, Grid, Paper, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import React from "react";

const HotelReservation = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const { bookingHotel, bookingOffer } = useHotelStore()

  const matchesMd = useMediaQuery("(max-width: 62em)")

  return (
    <Container w="100%" size="xl" py={20}>
      <Grid gutter="xs">
        <Grid.Col
          span={{
            base: 12,
            md: 9,
          }}
          order={matchesMd ? 2 : 1}
        >
          <Stack>
            <ReservationInformations />
            <RoomGuestInformations />
            <SpecialRequests />

            
            <Payment onSubmit={() => push("/hotel/reservation/completed")} />
          </Stack>
        </Grid.Col>
        <Grid.Col
          span={{
            base: 12,
            md: 3,
          }}
          order={matchesMd ? 1 : 2}
        >
          <Stack>
            <HotelDetails />
            <PriceDetails />
            <Cancellation />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HotelReservation;
