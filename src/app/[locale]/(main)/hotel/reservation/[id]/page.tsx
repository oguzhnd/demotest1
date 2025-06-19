"use client";

import Payment from "@/components/FlightPageElements/_Booking/Payment";
import Cancellation from "@/components/HotelPageElements/_Booking/Cancellation";
import HotelDetails from "@/components/HotelPageElements/_Booking/HotelDetails";
import PriceDetails from "@/components/HotelPageElements/_Booking/PriceDetails";
import ReservationInformations from "@/components/HotelPageElements/_Booking/ReservationInformations";
import RoomGuestInformations from "@/components/HotelPageElements/_Booking/RoomGuestInformations";
import SpecialRequests from "@/components/HotelPageElements/_Booking/SpecialRequests";
import { useRouter } from "@/i18n/navigation";
import { Checkbox, Container, Grid, Paper, Stack } from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";

const HotelReservation = () => {
  const t = useTranslations();

  const { push } = useRouter()

  return (
    <Container w="100%" size="xl" py={20}>
      <Grid gutter="xs">
        <Grid.Col span={9}>
          <Stack>
            <ReservationInformations />
            <RoomGuestInformations />
            <SpecialRequests />

            <Stack gap="xs">
              <Checkbox label={t("I approve the Clarification Text")} />
              <Checkbox label={t("I approve the text of Explicit Consent")} />
            </Stack>
            <Payment onSubmit={() => push("/hotel/reservation/completed")}/>
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
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
