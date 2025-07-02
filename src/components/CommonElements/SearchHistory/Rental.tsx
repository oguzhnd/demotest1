import { Group, Image, Paper, Text } from "@mantine/core";
import { IconChevronRight, IconPlane } from "@tabler/icons-react";
import React, { FC } from "react";

import classes from "./SearchHistory.module.css";

export interface RentalSearchProps {
  image: string;
  name: string;
}

const Rental: FC<RentalSearchProps> = ({ image, name }) => {
  return (
    <Paper withBorder radius="md" p="sm" className={classes.card}>
      <Group justify="space-between">
        <Group>
          <Image radius="md" h={64} w="auto" src={image} />
          <Text fw={500}>{name}</Text>
        </Group>

        <IconChevronRight size={16} />
      </Group>
    </Paper>
  );
};

export default Rental;
