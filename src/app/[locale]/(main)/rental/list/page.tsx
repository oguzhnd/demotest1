"use client";

import RentalListCard from "@/components/RentalPageElements/RentalListCard";
import SearchArea from "@/components/SearchArea";
import { Container, Grid, Stack } from "@mantine/core";
import { IconBed } from "@tabler/icons-react";
import React from "react";

const RentalList = () => {
  return (
    <Stack>
      <SearchArea type="rental" />
      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3}>
            <Stack gap="xs">
              
            </Stack>
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack gap="xs">
              {Array(9)
                .fill("")
                .map((rental, i) => (
                  <RentalListCard key={`rental-${i}`} id={`${i + 1}`} />
                ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default RentalList;
