"use client";

import ContactInformations from "@/components/FlightPageElements/_Booking/ContactInformations";
import FlightInformations from "@/components/FlightPageElements/_Booking/FlightInformations";
import InvoiceInformations from "@/components/FlightPageElements/_Booking/InvoiceInformations";
import PassengerInformations from "@/components/FlightPageElements/_Booking/PassengerInformations";
import Payment from "@/components/FlightPageElements/_Booking/Payment";
import { useRouter } from "@/i18n/navigation";
import { Container, Grid, Paper, Stack } from "@mantine/core";
import React from "react";

const FlightReservation = () => {
  const { push } = useRouter();

  return (
    <Container w="100%" size="xl" py={20}>
      <Stack>
        <FlightInformations />
        <PassengerInformations />
        <ContactInformations />
        <InvoiceInformations />
        <Payment onSubmit={() => push("/flight/reservation/completed")} />
      </Stack>
    </Container>
  );
};

export default FlightReservation;
