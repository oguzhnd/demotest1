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
import { IconInfoCircle } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";
import { IMaskInput } from "react-imask";

const RoomGuestInformations = () => {
  const t = useTranslations();

  return (
    <Paper withBorder p="md">
      <Group wrap="nowrap" align="flex-start">
        <Image
          w={200}
          h={120}
          radius="md"
          src="https://imgkit.otelz.com/turkey/antalya/kas/villatamarahotel9f8342a6.jpg?tr=w-240,h-120,fo-auto,q-80"
        />
        <Stack mih={120} w="100%" gap={4}>
          <Text size="sm" fw={600} c="blue">
            İnfinity Oda - Deniz Manzaralı 45m2
          </Text>
          <Group gap="xs">
            <Group gap={4}>
              <Text size="xs" fw={500}>
                Konuk Sayısı:
              </Text>
              <Text size="xs" c="gray.7">
                2 Yetişkin
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
            <Text size="xs" fw={500}>Bu odadaki konuklar</Text>
            <Group gap={4}>
              <Text size="xs" fw={500} c="gray.7" w={70}>{t("Adult")}</Text>
              <TextInput placeholder={t("Name")} />
              <TextInput placeholder={t("Surname")} />
            </Group>
            <Group gap={4}>
              <Text size="xs" fw={500} c="gray.7" w={70}>{t("Adult")}</Text>
              <TextInput placeholder={t("Name")} />
              <TextInput placeholder={t("Surname")} />
            </Group>
            <Group gap={4}>
              <Text size="xs" fw={500} c="gray.7" w={70}>{t("Child")}</Text>
              <TextInput placeholder={t("Name")} />
              <TextInput placeholder={t("Surname")} />
              <DatePickerInput placeholder={t("Birth Date")} />
            </Group>
          </Stack>
        </Stack>
      </Group>
    </Paper>
  );
};

export default RoomGuestInformations;
