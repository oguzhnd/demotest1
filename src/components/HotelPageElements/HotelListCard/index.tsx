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
import { useLocale } from "next-intl";
import React, { FC } from "react";

import classes from "../Hotel.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { HotelType } from "@/store/products/hotel";

const HotelListCard: FC<{
  onSelect: () => void;
  onClose?: () => void;
  hotel: HotelType;
  style?: MantineStyleProp;
}> = ({ onSelect, onClose, hotel, style }) => {
  const locale = useLocale();

  const { push } = useRouter();

  const matchesSm = useMediaQuery("(max-width: 48em)");
  const matchesXs = useMediaQuery("(max-width: 36em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Paper
      withBorder
      radius="md"
      className={classes.hotelListCard}
      style={style}
    >
      <Parent gap={0} wrap="nowrap">
        {/* <Carousel w={matchesSm ? "100%" : 300}>
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
        </Carousel> */}

        <Image
          miw={matchesSm ? "100%" : 300}
          w={matchesSm ? "100%" : 300}
          h={200}
          src={hotel.image_key_full}
        />
        <Stack
          w="100%"
          h={matchesSm ? undefined : 200}
          p="md"
          justify="space-between"
          onClick={(e) => {
            if ((e.target as any).id !== "ignore") {
              onSelect();
            }
          }}
        >
          <Stack gap={8}>
            <Stack gap={0}>
              <Group wrap="nowrap" justify="space-between">
                <Group gap="xs">
                  <Text size="lg" fw={500}>
                    {hotel.title}
                  </Text>
                  <Rating
                    size="xs"
                    fractions={2}
                    value={hotel.stars}
                    count={Math.ceil(hotel.stars)}
                    readOnly
                  />
                </Group>

                {onClose && (
                  <ActionIcon variant="subtle" color="dark" onClick={onClose}>
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
              <Text size="xs" c="gray">
                {hotel.address}
              </Text>
            </Stack>

            <Group gap={"xs"}>
              {hotel.hotelfreeamenities
                .split(",")
                .slice(0, 4)
                .map((freeamenity, i) =>
                  freeamenity !== "" ? (
                    <Group key={`amenity-${i}`} gap={6}>
                      <IconSwimming size={20} />
                      <Text size="xs">{freeamenity}</Text>
                    </Group>
                  ) : undefined
                )}
            </Group>
          </Stack>

          <Group w="100%" align="flex-end" justify="space-between">
            <Stack gap={0}>
              {hotel.hotelBoardGroups.split(",").slice(0, 3).map((board, i) => (
                <Text key={`board-${i}`} size="xs" fw={500} c="green">
                  {board}
                </Text>
              ))}
              <Group mt={4} gap={4}>
                <Text
                  size="xs"
                  c="white"
                  fw={500}
                  bg="green.9"
                  px="xs"
                  py={6}
                  lh={1}
                  style={{ borderRadius: 8 }}
                >
                  {hotel.rating}
                </Text>
                <Stack gap={0}>
                  <Text size="xs">Otel puanlaması</Text>
                  {/* <Text size="xs" c="gray.7">
                    37 Yorum
                  </Text> */}
                </Stack>
              </Group>
            </Stack>

            <Stack gap={0} align={matchesXs ? "flex-start" : "flex-end"}>
              <Text size="xl" fw={600}>
                {(
                  +hotel.roomDetail[0].priceDetail.salesPrice *
                  hotel.roomDetail[0].night
                ).toLocaleString(locale)}{" "}
                TRY
              </Text>
              <Text size="xs" c="gray.7">
                {hotel.roomDetail[0].night} gece, 1 oda için
              </Text>
              <Text size="xs" c="gray.7">
                gecelik{" "}
                {hotel.roomDetail[0].priceDetail.roomPrice.toLocaleString(
                  locale
                )}{" "}
                TRY
              </Text>
            </Stack>
          </Group>
        </Stack>
      </Parent>
    </Paper>
  );
};

export default HotelListCard;
