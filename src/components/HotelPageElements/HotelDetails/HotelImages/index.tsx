import { useModalManager } from "@/store/managers/modal";
import {
  Anchor,
  Box,
  Button,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconMapPinFilled, IconSpeakerphone } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { FC, useState } from "react";
import ImagesModal from "./ImagesModal";
import HotelMapView from "../HotelMapView";

const HotelImages: FC<{
  hotelDetails: any | undefined;
}> = ({ hotelDetails }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);

  const matchesSm = useMediaQuery("(max-width: 48em)");

  return (
    <>
      <ImagesModal
        opened={opened}
        setOpened={setOpened}
        images={hotelDetails?.images}
      />
      <Grid gutter="xs">
        <Grid.Col
          span={{
            base: 12,
            sm: 6,
          }}
        >
          <Image
            alt="hotel-1"
            h={matchesSm ? 200 : 500}
            radius="md"
            src={hotelDetails?.images[0].replace("{size}", "x500")}
            onClick={() => setOpened(true)}
          />
        </Grid.Col>
        <Grid.Col
          span={{
            base: 12,
            sm: 3,
          }}
        >
          <SimpleGrid
            cols={{
              base: 3,
              sm: 1,
            }}
            spacing="xs"
          >
            <Image
              alt="hotel-1"
              h={matchesSm ? 100 : 160}
              radius="md"
              src={hotelDetails?.images[1].replace("{size}", "x500")}
              onClick={() => setOpened(true)}
            />
            <Image
              alt="hotel-1"
              h={matchesSm ? 100 : 160}
              radius="md"
              src={hotelDetails?.images[2].replace("{size}", "x500")}
              onClick={() => setOpened(true)}
            />
            <Box pos="relative">
              <Image
                alt="hotel-1"
                h={matchesSm ? 100 : 160}
                radius="md"
                src={hotelDetails?.images[3].replace("{size}", "x500")}
                onClick={() => setOpened(true)}
              />
              <Stack
                pos="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="#00000088"
                style={{
                  borderRadius: "var(--mantine-radius-md)",
                  cursor: "pointer",
                }}
                justify="center"
                align="center"
                onClick={() => setOpened(true)}
              >
                <Text fw={500} c="white">
                  {t("+X Images", {
                    count: hotelDetails?.images.length - 3,
                  })}
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col
          span={{
            base: 12,
            sm: 3,
          }}
          visibleFrom="sm"
        >
          <HotelMapView hotelDetails={hotelDetails} />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default HotelImages;
