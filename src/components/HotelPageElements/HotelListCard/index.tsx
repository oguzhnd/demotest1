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
  Stack,
  Text,
} from "@mantine/core";
import {
  IconChevronRight,
  IconSwimming,
  IconWaterpolo,
  IconX,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";
import React, { FC } from "react";

import classes from "../Hotel.module.css";
import { useMediaQuery } from "@mantine/hooks";

const HotelListCard: FC<{
  id: string;
  onSelect: () => void;
  onClose?: () => void;
  style?: MantineStyleProp;
}> = ({ id, onSelect, onClose, style }) => {
  const locale = useLocale();

  const { push } = useRouter();

  const matchesSm = useMediaQuery("(max-width: 48em)")
  const matchesXs = useMediaQuery("(max-width: 36em)")

  const Parent = matchesSm ? Stack : Group

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.hotelListCard}
      style={style}
    >
      <Parent gap={0} wrap="nowrap">
        <Carousel w={matchesSm ? "100%" : 300}>
          {Array(3)
            .fill("")
            .map((img, i) => (
              <Carousel.Slide key={`slide-${i}`}>
                <Image
                  w={matchesSm ? "100%" : 300}
                  h={200}
                  src={
                    "https://images.trvl-media.com/lodging/7000000/6250000/6248700/6248658/1e9c9eee.jpg?impolicy=resizecrop&rw=455&ra=fit"
                  }
                />
              </Carousel.Slide>
            ))}
        </Carousel>
        <Stack
          w="100%"
          h={matchesSm ? undefined : 200}
          p="md"
          justify="space-between"
          onClick={(e) => {
            if((e.target as any).id !== "ignore") {
              onSelect()
            }
          }}
        >
          <Stack gap={0}>
            <Group wrap="nowrap" justify="space-between">
              <Text size="lg" fw={500}>
                All Suites Appart Hôtel Orly Rungis
              </Text>

              {onClose && (
                <ActionIcon
                  variant="subtle"
                  color="dark"
                  onClick={onClose}
                >
                  <Box
                    id="ignore"
                    pos="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                  />
                  <IconX size={16} />
                </ActionIcon>
              )}
            </Group>
            <Group gap={6}>
              <IconSwimming size={20} />
              <Text size="xs">Havuz</Text>
            </Group>
          </Stack>

          <Group w="100%" align="flex-end" justify="space-between">
            <Stack gap={0}>
              <Text size="sm" fw={500} c="green">
                Tümüyle geri ödemeli
              </Text>
              <Text size="sm" fw={500} c="green">
                Şimdi rezervasyon yapın, daha sonra ödeyin
              </Text>
              <Group mt={4} gap={4}>
                <Text
                  size="sm"
                  c="white"
                  fw={500}
                  bg="green.9"
                  px="xs"
                  py={6}
                  lh={1}
                  style={{ borderRadius: 8 }}
                >
                  9.6
                </Text>
                <Stack gap={0}>
                  <Text size="xs">Otel puanlaması</Text>
                  <Text size="xs" c="gray.7">
                    37 Yorum
                  </Text>
                </Stack>
              </Group>
            </Stack>

            <Stack gap={0} align={matchesXs ? "flex-start" : "flex-end"}>
              <Text size="xl" fw={600}>
                {(31249).toLocaleString(locale)} TRY
              </Text>
              <Text size="xs" c="gray.7">
                3 gece, 1 oda için
              </Text>
              <Text size="xs" c="gray.7">
                gecelik {(10416).toLocaleString(locale)}
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Parent>
    </Paper>
  );
};

export default HotelListCard;
