import { Group, Image, Paper, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import React, { FC } from "react";

import classes from "./SearchHistory.module.css"

export interface HotelSearchProps {
  image: string;
  name: string;
}

const Hotel: FC<HotelSearchProps> = ({ image, name }) => {
  return (
    <Paper withBorder radius="md" p="sm" className={classes.card}>
      <Group justify="space-between">
        <Group>
          <Image radius="md" h={64} w={64} src={image} />
          <Text fw={500}>{name}</Text>
        </Group>

        <IconChevronRight size={16} />
      </Group>
    </Paper>
  );
};

export default Hotel;
