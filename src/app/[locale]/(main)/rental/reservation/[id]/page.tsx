"use client";

import InvoiceInformations from "@/components/FlightPageElements/_Booking/InvoiceInformations";
import Payment from "@/components/FlightPageElements/_Booking/Payment";
import ContactInformations from "@/components/RentalPageElements/_Booking/ContactInformations";
import DriverInformations from "@/components/RentalPageElements/_Booking/DriverInformations";
import ExtraProducts from "@/components/RentalPageElements/_Booking/ExtraProducts";
import PriceDetails from "@/components/RentalPageElements/_Booking/PriceDetails";
import RentalDetails from "@/components/RentalPageElements/_Booking/RentalDetails";
import { useRouter } from "@/i18n/navigation";
import { useRentalStore } from "@/store/products/rental";
import { useSearchStore } from "@/store/search";
import { xiorInstance } from "@/utils/xior";
import { Container, Grid, Paper, Stack } from "@mantine/core";
import React, { useCallback, useEffect } from "react";

const FlightReservation = () => {
  const { push } = useRouter();

  return (
    <Container w="100%" size="xl" py={20}>
      <Grid>
        <Grid.Col span={9}>
          <Stack>
            <ExtraProducts />
            <ContactInformations />
            <DriverInformations />
            <InvoiceInformations />
            <Payment onSubmit={() => push("/rental/reservation/completed")} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack>
            <RentalDetails />
            <PriceDetails />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default FlightReservation;
