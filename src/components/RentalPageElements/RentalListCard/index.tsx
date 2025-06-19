import { useRouter } from "@/i18n/navigation";
import {
  Button,
  Group,
  Image,
  Paper,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconArmchair,
  IconChevronRight,
  IconCircleDashedCheck,
  IconClock,
  IconClockFilled,
  IconGasStationFilled,
  IconKey,
  IconManualGearbox,
  IconManualGearboxFilled,
} from "@tabler/icons-react";
import { useLocale } from "next-intl";
import React, { FC } from "react";

import classes from "../Rental.module.css";

const RentalListCard: FC<{
  id: string;
  onSelect: () => void;
}> = ({ id, onSelect }) => {
  const locale = useLocale();

  const { push } = useRouter();

  return (
    <Paper p="md" withBorder className={classes.rentalListCard}>
      <Group justify="space-between" align="stretch">
        <Stack>
          <Text fw={500}>Fiat Egea</Text>
          <Group>
            <Image
              w={202}
              src="https://integration-static.yolcu360.com/vehicle/a477e3bd-0a22-4c8e-ad85-4ad3616fe653.png"
            />
            <Stack gap="xs">
              <Group>
                <Group gap={6}>
                  <IconManualGearboxFilled
                    size={16}
                    color="var(--mantine-color-blue-7)"
                  />
                  <Text size="sm" fw={500} c="gray.7">
                    Manuel
                  </Text>
                </Group>
                <Group gap={6}>
                  <IconGasStationFilled
                    size={16}
                    color="var(--mantine-color-blue-7)"
                  />
                  <Text size="sm" fw={500} c="gray.7">
                    Benzin/Dizel
                  </Text>
                </Group>
                <Group gap={6}>
                  <IconArmchair size={16} color="var(--mantine-color-blue-7)" />
                  <Text size="sm" fw={500} c="gray.7">
                    5
                  </Text>
                </Group>
              </Group>
              <Group gap={6}>
                <IconKey size={16} color="var(--mantine-color-blue-7)" />
                <Text size="sm" fw={500} c="gray.7">
                  Havalimanı içi ofis
                </Text>
              </Group>
              <Group>
                <Group gap={6}>
                  <Text size="sm" fw={500} c="blue">
                    Depozito
                  </Text>
                  <Text size="sm" fw={500} c="gray.7">
                    {(4500).toLocaleString(locale)} TRY
                  </Text>
                </Group>
                <Group gap={6}>
                  <Text size="sm" fw={500} c="blue">
                    Toplam Kilometre Limiti
                  </Text>
                  <Text size="sm" fw={500} c="gray.7">
                    1500 KM
                  </Text>
                </Group>
              </Group>
            </Stack>
          </Group>

          <Group>
            <Image
              w="auto"
              radius="sm"
              h={36}
              src="https://integration-static.yolcu360.com/supplier/2d3514e5-046d-4e3c-a1eb-b96a08ab7e98.png"
            />

            <Group gap={4}>
              <Text
                size="sm"
                c="white"
                fw={500}
                bg="blue.9"
                px="xs"
                py={6}
                lh={1}
                style={{ borderRadius: 8 }}
              >
                4.7
              </Text>
              <Rating value={4.7} fractions={2} readOnly />
            </Group>

            <Group gap={4} c="yellow.7">
              <IconClockFilled size={16} />
              <Text size="sm" fw={500} lh={1}>
                Anında Onay
              </Text>
            </Group>

            <Group gap={4} c="green.7">
              <IconCircleDashedCheck size={16} />
              <Text size="sm" fw={500} lh={1}>
                Ücretsiz İptal
              </Text>
            </Group>
          </Group>
        </Stack>

        <Stack gap={6}>
          <Paper h="100%" bg="gray.1" radius="sm" p="sm">
            <Stack gap={6} h="100%" justify="center" align="flex-end">
              <Group gap={4}>
                <Text size="xs" c="gray.7">
                  Toplam Fiyat:{" "}
                </Text>
                <Text size="xs">3 Gün</Text>
              </Group>
              <Text size="lg" fw={600}>
                {(5028).toLocaleString(locale)} TRY
              </Text>
              <Group gap={4} c="green">
                <Text size="xs" fw={500}>
                  Günlük Fiyat:{" "}
                </Text>
                <Text size="xs" fw={500}>
                  {(1676).toLocaleString(locale)} TRY
                </Text>
              </Group>
            </Stack>
          </Paper>
          <Button
            rightSection={<IconChevronRight size={16} />}
            style={{ flexShrink: 0 }}
            onClick={onSelect}
          >
            Aracı Şimdi Kirala
          </Button>
        </Stack>
      </Group>
    </Paper>
  );
};

export default RentalListCard;
