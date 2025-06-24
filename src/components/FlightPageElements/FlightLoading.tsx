import { Container, Paper } from "@mantine/core";
import { IconPlane } from "@tabler/icons-react";
import React from "react";

const FlightLoading = () => {
  return (
    <Paper bg="#051422" radius={0} py="md">
      <Container
        size="xl"
        w="100%"
        c="white
    "
      >
        <IconPlane size={16} />
      </Container>
    </Paper>
  );
};

export default FlightLoading;
