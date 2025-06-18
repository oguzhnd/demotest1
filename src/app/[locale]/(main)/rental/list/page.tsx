"use client";

import RentalListCard from "@/components/RentalPageElements/RentalListCard";
import RentalListFilters from "@/components/RentalPageElements/RentalListFilters";
import RentalLoading from "@/components/RentalPageElements/RentalLoading";
import SearchArea from "@/components/SearchArea";
import { useRouter } from "@/i18n/navigation";
import { useLoading } from "@/utils/hooks/useLoading";
import { Container, Divider, Grid, Stack } from "@mantine/core";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const RentalList = () => {
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
      <SearchArea type="rental" />
      {loading && <RentalLoading />}

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3}>
            <Stack gap="xs">
              <RentalListFilters />
            </Stack>
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack gap="xs">
              {Array(9)
                .fill("")
                .map((flight, i) => (
                  <RentalListCard
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

export default RentalList;
