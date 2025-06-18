"use client";

import HotelListCard from "@/components/HotelPageElements/HotelListCard";
import HotelListFilters from "@/components/HotelPageElements/HotelListFilters";
import HotelLoading from "@/components/HotelPageElements/HotelLoading";
import ShowOnMap from "@/components/HotelPageElements/ShowOnMap";
import SearchArea from "@/components/SearchArea";
import { useRouter } from "@/i18n/navigation";
import { useLoading } from "@/utils/hooks/useLoading";
import { Container, Grid, Stack } from "@mantine/core";
import { IconBed, IconBuilding } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

const HotelList = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const [loading, startLoading, stopLoading] = useLoading(true);

  useEffect(() => {
    setTimeout(() => {
      // stopLoading()
    }, 2000);
  }, []);

  return (
    <Stack>
      <SearchArea type="hotel" />
      {loading && <HotelLoading />}

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3}>
            <Stack gap="xs">
              <ShowOnMap />
              <HotelListFilters />
            </Stack>
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack gap="xs">
              {Array(9)
                .fill("")
                .map((flight, i) => (
                  <HotelListCard
                    key={`flight-${i}`}
                    id={`${i + 1}`}
                    onSelect={() => {
                      push(`/flight/reservation/${1}`);
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

export default HotelList;
