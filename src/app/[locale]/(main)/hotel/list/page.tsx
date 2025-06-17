"use client";

import HotelListCard from "@/components/HotelPageElements/HotelListCard";
import ShowOnMap from "@/components/HotelPageElements/ShowOnMap";
import SearchArea from "@/components/SearchArea";
import { Container, Grid, Stack } from "@mantine/core";
import { IconBed, IconBuilding } from "@tabler/icons-react";

const HotelList = () => {
  return (
    <Stack>
      <SearchArea type="hotel" />
      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3}>
            <Stack gap="xs">
              <ShowOnMap />
            </Stack>
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack gap="xs">
              {Array(9)
                .fill("")
                .map((hotel, i) => (
                  <HotelListCard key={`hotel-${i}`} id={`${i + 1}`} />
                ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default HotelList;
