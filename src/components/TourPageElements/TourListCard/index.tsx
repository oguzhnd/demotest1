import { useRouter } from "@/i18n/navigation";
import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Image,
  MantineStyleProp,
  Paper,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconChevronRight,
  IconStarFilled,
  IconSwimming,
  IconWaterpolo,
  IconX,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React, { FC } from "react";

import classes from "../Tour.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { TourType } from "@/store/products/tour";

const TourListCard: FC<{
  onSelect: () => void;
  onClose?: () => void;
  tour: TourType;
  style?: MantineStyleProp;
}> = ({ onSelect, onClose, tour, style }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const matchesSm = useMediaQuery("(max-width: 48em)");
  const matchesXs = useMediaQuery("(max-width: 36em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.tourListCard}
      style={style}
    > 
      <Parent pos="relative" gap={0} wrap="nowrap" align="stretch" h="100%">
        
      </Parent>
    </Paper>
  );
};

export default TourListCard;
