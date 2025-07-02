import { Group, Image, Paper, Text } from "@mantine/core";
import { IconChevronRight, IconPlane } from "@tabler/icons-react";
import React, { FC } from "react";

import classes from "./SearchHistory.module.css";

export interface FlightSearchProps {
  from: string;
  to: string;
}

const Flight: FC<FlightSearchProps> = ({ from, to }) => {
  return (
    <Paper withBorder radius="md" p="sm" py="lg" pl="lg" className={classes.card}>
      <Group justify="space-between">
        <Group>
          <Text lh={1} fw={500}>{from}</Text>
          <IconPlane size={16} />
          <Text lh={1} fw={500}>{to}</Text>
        </Group>

        <IconChevronRight size={16} />
      </Group>
    </Paper>
  );
};

export default Flight;
