"use client";

import Cancellation from "@/components/TourPageElements/_Booking/Cancellation";
import TourDetails from "@/components/TourPageElements/_Booking/TourDetails";
import Payment from "@/components/TourPageElements/_Booking/Payment";
import PriceDetails from "@/components/TourPageElements/_Booking/PriceDetails";
import RoomGuestInformations from "@/components/TourPageElements/_Booking/PassengerInformations";
import { useRouter } from "@/i18n/navigation";
import { Container, Grid, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import { useSearchStore } from "@/store/search";
import PassengerInformations from "@/components/TourPageElements/_Booking/PassengerInformations";

const TourReservation = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const { tourSearch } = useSearchStore();

  const matchesMd = useMediaQuery("(max-width: 62em)");

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
            {Array(tourSearch.passengers.adult)
              .fill("")
              .map((e, i) => (
                <PassengerInformations
                  key={`adult-${i}`}
                  type="adult"
                  label={t("Adult")}
                />
              ))}
            {Array(tourSearch.passengers.child)
              .fill("")
              .map((e, i) => (
                <PassengerInformations
                  key={`child-${i}`}
                  type="child"
                  label={t("Child")}
                />
              ))}
            {Array(tourSearch.passengers.baby)
              .fill("")
              .map((e, i) => (
                <PassengerInformations
                  key={`baby-${i}`}
                  type="baby"
                  label={t("Baby")}
                />
              ))}

            <Payment onSubmit={() => push("/tour/reservation/completed")} />
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
            <TourDetails />
            <PriceDetails />
            <Cancellation />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default TourReservation;
