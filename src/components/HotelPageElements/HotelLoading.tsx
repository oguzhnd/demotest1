import { Container, Paper } from "@mantine/core";
import { IconBuilding } from "@tabler/icons-react";
import React from "react";

const HotelLoading = () => {
  return (
    <Paper bg="#051422" radius={0}>
      <Container size="xl" w="100%" c="white">
        <IconBuilding size={16} />
      </Container>
    </Paper>
  );
};

export default HotelLoading;
