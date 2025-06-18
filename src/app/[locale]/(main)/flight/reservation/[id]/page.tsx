"use client"

import ContactInformations from "@/components/FlightPageElements/_Booking/ContactInformations";
import FlightInformations from "@/components/FlightPageElements/_Booking/FlightInformations";
import InvoiceInformations from "@/components/FlightPageElements/_Booking/InvoiceInformations";
import PassengerInformations from "@/components/FlightPageElements/_Booking/PassengerInformations";
import Payment from "@/components/FlightPageElements/_Booking/Payment";
import { Container, Grid, Paper, Stack } from "@mantine/core";
import React from "react";

const FlightReservation = () => {
  return (
    <Container w="100%" size="xl" py={20}>
      <Stack>
        <FlightInformations />
        <ContactInformations />
        <PassengerInformations />
        <InvoiceInformations />
        <Payment />
      </Stack>
    </Container>
  );
};

export default FlightReservation;
