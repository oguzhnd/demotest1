import React, { FC } from "react";
import { MostVisitedDestinationType } from ".";
import { BackgroundImage, Group, Stack, Text } from "@mantine/core";

import classes from "../Hotel.module.css";
import { useHover } from "@mantine/hooks";
import { IconChevronRight } from "@tabler/icons-react";

const DestinationCard: FC<MostVisitedDestinationType> = ({
  image,
  category,
  name,
}) => {
  const { ref, hovered } = useHover();

  return (
    <BackgroundImage
      ref={ref}
      src={image}
      h={240}
      radius="lg"
      className={classes.destinationCard}
    >
      <Stack h="100%" justify="flex-end" p="lg">
        <Group justify="space-between" c="white">
          <Text size="xl" fw={700} style={{ textShadow: "0px 0px 2px #000" }}>
            {name}
          </Text>

          <IconChevronRight
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(0px)" : "translateX(-16px)",
              transition: "all .1s ease",
            }}
          />
        </Group>
      </Stack>
    </BackgroundImage>
  );
};

export default DestinationCard;
