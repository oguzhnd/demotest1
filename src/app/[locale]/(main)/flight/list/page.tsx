"use client";

import FlightListCard from "@/components/FlightPageElements/FlightListCard";
import FlightListFilters from "@/components/FlightPageElements/FlightListFilters";
import FlightLoading from "@/components/FlightPageElements/FlightLoading";
import ReservationNotice from "@/components/FlightPageElements/ReservationNotice";
import SearchArea from "@/components/SearchArea";
import { useRouter } from "@/i18n/navigation";
import { useLoading } from "@/utils/hooks/useLoading";
import { Container, Divider, Grid, Stack } from "@mantine/core";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const FlightList = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const [loading, startLoading, stopLoading] = useLoading(true);

  const [departureFlight, setDepartureFlight] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      // stopLoading()
    }, 2000);
  }, []);

  return (
    <Stack>
      <SearchArea type="flight" />
      {loading && <FlightLoading />}

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3}>
            <Stack gap="xs">
              <ReservationNotice />
              <FlightListFilters />
            </Stack>
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack gap="xs">
              {departureFlight && <FlightListCard id={departureFlight} />}
              {departureFlight && <Divider />}
              {Array(9)
                .fill("")
                .map((flight, i) => (
                  <FlightListCard
                    key={`flight-${i}`}
                    id={`${i + 1}`}
                    onSelect={() => {
                      if (!departureFlight) {
                        setDepartureFlight("1");
                      } else {
                        push(`/flight/reservation/${1}`)
                      }
                    }}
                  />
                ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default FlightList;
