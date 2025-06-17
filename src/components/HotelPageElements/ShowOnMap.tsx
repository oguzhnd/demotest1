import { Paper, Stack, Text } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import React from "react";

import classes from "./Hotel.module.css";

const ShowOnMap = () => {
  return (
    <Paper p="md" className={classes.showOnMap}>
      <Stack gap={4} align="center">
        <IconMapPin size={20} />
        <Text size="sm" fw={500}>
          Show on Map
        </Text>
      </Stack>
    </Paper>
  );
};

export default ShowOnMap;
