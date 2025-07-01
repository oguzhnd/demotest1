import { useModalManager } from "@/store/managers/modal";
import {
  Anchor,
  Button,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { IconMapPinFilled, IconSpeakerphone } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

const HotelMapView: FC<{
  hotelDetails: any | undefined;
}> = ({ hotelDetails }) => {
  const t = useTranslations();

  const { openModal } = useModalManager();

  return (
    <Stack h="100%" gap="xs">
      <Paper radius="md" style={{ flexShrink: 0, overflow: "hidden" }}>
        <Stack gap={0} p="sm" bg="yellow.1">
          <Group wrap="nowrap">
            <IconSpeakerphone size={20} style={{ flexShrink: 0 }} />
            <Text size="sm">
              Kaçırmayın! Hemen rezervasyonunuzu yapın ve en iyi fiyatları
              yakalayın!
            </Text>
          </Group>
        </Stack>
        <Group>
          <Anchor
            size="sm"
            w="100%"
            bg="dark"
            px="sm"
            py="xs"
            ta="center"
            c="white"
          >
            Şimdi Rezervasyon Yapın
          </Anchor>
        </Group>
      </Paper>
      <Paper
        pos="relative"
        h="100%"
        bg="gray.2"
        mih={100}
        radius="md"
        style={{ overflow: "hidden", cursor: "pointer" }}
        onClick={() => openModal("hotelMapDetail")}
      >
        <Image
          h="100%"
          src={`https://maps.googleapis.com/maps/api/staticmap?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&center=${hotelDetails?.latitude},${hotelDetails?.longitude}&size=400x400&zoom=13`}
        />
        <Stack
          pos="absolute"
          w="100%"
          h="100%"
          justify="center"
          align="center"
          top={0}
          left={0}
        >
          <IconMapPinFilled size={30} color="var(--mantine-color-orange-7)" />
          <Button size="xs">{t("Show on Map")}</Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default HotelMapView;
