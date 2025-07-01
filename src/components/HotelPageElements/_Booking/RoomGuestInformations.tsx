import { useHotelStore } from "@/store/products/hotel";
import {
  Badge,
  Button,
  Checkbox,
  Divider,
  Grid,
  Group,
  HoverCard,
  Image,
  Input,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import { IconInfoCircle } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";
import { IMaskInput } from "react-imask";

const RoomGuestInformations = () => {
  const t = useTranslations();

  const { bookingHotel, bookingOffer, bookingRoom } = useHotelStore();

  const matchesSm = useMediaQuery("(max-width: 48em)")
  
  const Parent = matchesSm ? Stack : Group

  return (
    <Paper withBorder p="md">
      <Parent wrap="nowrap" align="flex-start">
        <Image w={matchesSm ? "100%" : 200} h={120} radius="md" src={bookingRoom} />
        <Stack mih={120} w="100%" gap={4}>
          <Text size="sm" fw={600} c="blue">
            {bookingRoom?.roomName}
          </Text>
          <Group gap="xs">
            <Group gap={4}>
              <Text size="xs" fw={500}>
                Konuk Sayısı:
              </Text>
              <Text size="xs" c="gray.7">
                {bookingRoom?.travellers.length}
              </Text>
            </Group>
            <Group gap={4}>
              <Text size="xs" fw={500}>
                Oda Sayısı:
              </Text>
              <Text size="xs" c="gray.7">
                1
              </Text>
            </Group>
          </Group>
          <HoverCard width={250}>
            <HoverCard.Target>
              <Badge color="gray" tt="capitalize" fw={500} radius="sm">
                İade Yapılamaz
              </Badge>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Stack gap={0}>
                <Text size="sm" fw={500}>
                  İade Yapılamaz
                </Text>
                <Text size="xs">
                  Rezervasyonun iptali, değiştirilmesi veya kullanılmaması
                  durumunda, toplam tutar sizden alınacaktır.
                </Text>
              </Stack>
            </HoverCard.Dropdown>
          </HoverCard>
          <Divider />
          <Stack gap={4}>
            <Text size="xs" fw={500}>
              Bu odadaki konuklar
            </Text>
            {bookingRoom?.travellers.map((traveller, i) => {
              if (traveller.type === 1) {
                return (
                  <Parent key={`traveller-${i}`} gap={4}>
                    <Text size="xs" fw={500} c="gray.7" w={70}>
                      {t("Adult")}
                    </Text>
                    <TextInput placeholder={t("Name")} />
                    <TextInput placeholder={t("Surname")} />
                  </Parent>
                );
              } else if (traveller.type === 2) {
                return (
                  <Parent key={`traveller-${i}`} gap={4}>
                    <Text size="xs" fw={500} c="gray.7" w={70}>
                      {t("Child")}
                    </Text>
                    <TextInput placeholder={t("Name")} />
                    <TextInput placeholder={t("Surname")} />
                    <DatePickerInput placeholder={t("Birth Date")} />
                  </Parent>
                );
              }
            })}
          </Stack>
        </Stack>
      </Parent>
    </Paper>
  );
};

export default RoomGuestInformations;
