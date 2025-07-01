"use client";

import ContactInformations from "@/components/FlightPageElements/_Booking/ContactInformations";
import FlightInformations from "@/components/FlightPageElements/_Booking/FlightInformations";
import InvoiceInformations from "@/components/FlightPageElements/_Booking/InvoiceInformations";
import PassengerInformations from "@/components/FlightPageElements/_Booking/PassengerInformations";
import Payment from "@/components/FlightPageElements/_Booking/Payment";
import { useRouter } from "@/i18n/navigation";
import { useSearchStore } from "@/store/search";
import { Container, Grid, Paper, Stack } from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";

const FlightReservation = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const { flightSearch } = useSearchStore();

  return (
    <Container w="100%" size="xl" py={20}>
      <Stack>
        <FlightInformations />
        {Array(flightSearch.passengers.adult)
          .fill("")
          .map((e, i) => (
            <PassengerInformations key={`adult-${i}`} type="adult" label={t("Adult")} />
          ))}
          {Array(flightSearch.passengers.child)
          .fill("")
          .map((e, i) => (
            <PassengerInformations key={`child-${i}`} type="child" label={t("Child")} />
          ))}
          {Array(flightSearch.passengers.baby)
          .fill("")
          .map((e, i) => (
            <PassengerInformations key={`baby-${i}`} type="baby" label={t("Baby")} />
          ))}
        <ContactInformations />
        <InvoiceInformations />
        <Payment onSubmit={() => push("/flight/reservation/completed")} />
      </Stack>
    </Container>
  );
};

export default FlightReservation;
