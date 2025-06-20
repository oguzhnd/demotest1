import { Divider, Group, Image, Paper, Rating, SimpleGrid, Stack, Text } from "@mantine/core";
import { IconBed, IconMapPin, IconUser, IconUserCircle } from "@tabler/icons-react";
import React from "react";

const HotelDetails = () => {
  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Group wrap="nowrap" align="flex-start">
          <Image
            w={100}
            h={100}
            radius="md"
            src="https://imgkit.otelz.com/turkey/antalya/kas/villatamarahotel805b7d81.jpg?tr=w-100,h-100,fo-auto,q-80"
          />
          <Stack mih={100} gap={0}>
            <Text size="sm" fw={500}>Villa Tamara Hotel</Text>
            <Rating value={5} readOnly size="xs" />
            <Group gap={4} c="gray.7">
              <IconMapPin size={14} />
              <Text size="xs">Yarımada, Kaş, Antalya</Text>
            </Group>
            <Text size="xs">Adres : Aydin Köker Sokak, Çukurbag Yarimadasi Kas</Text>
          </Stack>
        </Group>
        <SimpleGrid cols={2}>
          <Stack gap={0}>
            <Text size="xs" fw={500} c="gray.7">Giriş tarihi</Text>
            <Text size="sm" fw={500}>19.06.2025 14:00 sonrası</Text>
          </Stack>
          <Stack gap={0}>
            <Text size="xs" fw={500} c="gray.7">Çıkış tarihi</Text>
            <Text size="sm" fw={500}>20.06.2025 14:00 sonrası</Text>
          </Stack>
        </SimpleGrid>
        <Divider />
        <Stack gap={4}>
          <Group gap={6}>
            <IconUser size={16}/>
            <Text size="sm" fw={500}>1 gece, 2 Oda, 2 Yetişkin, 1 Çocuk</Text>
          </Group>
          <Group gap={6}>
            <IconBed size={16}/>
            <Text size="sm" fw={500} c="gray.7">1. Oda:</Text>
            <Text size="sm" fw={500}>İnfinity Oda</Text>
          </Group>
          <Group gap={6}>
            <IconBed size={16}/>
            <Text size="sm" fw={500} c="gray.7">2. Oda:</Text>
            <Text size="sm" fw={500}>İnfinity Oda</Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default HotelDetails;
