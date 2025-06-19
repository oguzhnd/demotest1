import {
  Divider,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconArmchair,
  IconCircleDashedCheck,
  IconClockFilled,
  IconGasStationFilled,
  IconManualGearboxFilled,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";
import React from "react";

const RentalDetails = () => {
  const locale = useLocale()

  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Group>
          <Image
            w={100}
            src="https://integration-static.yolcu360.com/vehicle/a477e3bd-0a22-4c8e-ad85-4ad3616fe653.png"
          />
          <Stack gap={0}>
            <Text size="sm" fw={500}>
              Fiat Egea
            </Text>
            <Image
              h={24}
              src="https://integration-static.yolcu360.com/supplier/2d3514e5-046d-4e3c-a1eb-b96a08ab7e98.png"
            />
          </Stack>
        </Group>
        <Divider />
        <Group>
          <Group gap={6} wrap="nowrap">
            <IconManualGearboxFilled
              size={16}
              color="var(--mantine-color-blue-7)"
            />
            <Text size="sm" fw={500} c="gray.7">
              Manuel
            </Text>
          </Group>
          <Group gap={6} wrap="nowrap">
            <IconGasStationFilled
              size={16}
              color="var(--mantine-color-blue-7)"
            />
            <Text size="sm" fw={500} c="gray.7">
              Benzin/Dizel
            </Text>
          </Group>
          <Group gap={6} wrap="nowrap">
            <IconArmchair size={16} color="var(--mantine-color-blue-7)" />
            <Text size="sm" fw={500} c="gray.7">
              5
            </Text>
          </Group>
        </Group>
        <Divider />
        <Group wrap="nowrap">
          <Group w="50%" gap={4} c="yellow.7">
            <IconClockFilled size={16} />
            <Text size="sm" fw={500} lh={1}>
              Anında Onay
            </Text>
          </Group>

          <Group w="50%" gap={4} c="green.7">
            <IconCircleDashedCheck size={16} />
            <Text size="sm" fw={500} lh={1}>
              Ücretsiz İptal
            </Text>
          </Group>
        </Group>
        <Divider />
        <SimpleGrid cols={2}>
          <Stack gap={0} align="flex-start">
            <Text size="xs" fw={500}>
              Alış Tarihi ve Yeri
            </Text>
            <Text size="sm" c="gray">
              23 Haz, Pzt
            </Text>
            <Text
              size="sm"
              fw={500}
              bg="blue"
              c="white"
              lh={1}
              py={4}
              px={8}
              style={{ borderRadius: 4 }}
            >
              10:00
            </Text>
            <Text size="sm" mt={4}>
              İstanbul, İstanbul Havalimanı
            </Text>
          </Stack>
          <Stack gap={0} align="flex-end">
            <Text size="xs" fw={500}>
              Bırakış Tarihi ve Yeri
            </Text>
            <Text size="sm" c="gray">
              20 Haz, Cum
            </Text>
            <Text
              size="sm"
              fw={500}
              bg="blue"
              c="white"
              lh={1}
              py={4}
              px={8}
              style={{ borderRadius: 4 }}
            >
              10:00
            </Text>
            <Text size="sm" mt={4} ta="right">
              İstanbul, İstanbul Havalimanı
            </Text>
          </Stack>
        </SimpleGrid>
        <Divider />
        <Stack gap={4}>
          <Group justify="space-between">
            <Text size="sm" fw={500}>
              Araç Teslim Şekli:
            </Text>
            <Text size="sm" fw={500} c="blue">
              Havalimanı içi ofis
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" fw={500}>
              Depozito:
            </Text>
            <Text size="sm" fw={500} c="blue">
              {(4500).toLocaleString(locale)} TRY
            </Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" fw={500}>
              Toplam Kilometre Limiti:
            </Text>
            <Text size="sm" fw={500} c="blue">
              1500 KM
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default RentalDetails;
