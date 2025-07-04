import React, { FC } from "react";
import {
  BackgroundImage,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

import classes from "../../Tour.module.css";
import { useHover } from "@mantine/hooks";
import { IconChevronRight, IconTransfer } from "@tabler/icons-react";
import { localeDateRangeFormat } from "@/utils/tools";
import { useLocale } from "next-intl";
import { TourCityType } from "./page";

const CityCard: FC<TourCityType> = ({ image, name }) => {
  const { ref, hovered } = useHover();

  return (
    <BackgroundImage
      ref={ref}
      src={image}
      h={240}
      radius="lg"
      className={classes.cityCard}
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

export default CityCard;
