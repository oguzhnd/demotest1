import { FlightType } from "@/store/products/flight";
import { localeDateFormat } from "@/utils/tools";
import {
  Box,
  Divider,
  Group,
  Image,
  Modal,
  Paper,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconClock, IconMapPin, IconPlane } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

const Leg: FC<FlightType["legInfo"][number]> = (leg) => {
  const t = useTranslations();

  return (
    <Paper withBorder p="md">
      <Stack align="flex-start">
        <Text fw={500}>{localeDateFormat(new Date(leg.dDateTime))}</Text>

        <Group bg="blue.0" py={6} px={12} style={{ borderRadius: 8 }}>
          <Group gap={6}>
            <Box
              p={6}
              style={{
                background: "white",
                border: "1px solid var(--mantine-color-gray-3)",
                borderRadius: "50%",
              }}
            >
              <Image
                w={12}
                h={12}
                src={`https://admin.nttreservation.com/AirlineLogo/icon/${leg.marketingAirwayCode}.png`}
              />
            </Box>
            <Text size="sm" fw={500}>
              {leg.marketingAirwayName}
            </Text>
          </Group>
          <Divider orientation="vertical" />

          <Group gap={6}>
            <IconPlane size={16} color="var(--mantine-color-blue-7)" />
            <Text size="sm" fw={500}>
              {leg.flightNo}
            </Text>
          </Group>
          <Divider orientation="vertical" />

          <Group gap={6}>
            <IconClock size={16} color="var(--mantine-color-blue-7)" />
            <Text size="sm" fw={500}>
              {leg.flightTime}
            </Text>
          </Group>
        </Group>

        <Group w="100%" wrap="nowrap" justify="space-between">
          <Stack gap={0}>
            <Text size="sm" c="gray" mb="xs">
              {t("Departure")}
            </Text>
            <Text fw={500}>{leg.dTime}</Text>
            <Group wrap="nowrap" gap={8}>
              <Text fw={500}>{leg.dCity}</Text>
              <Text>({leg.departure})</Text>
            </Group>
            <Text size="sm" c="gray.8">
              {leg.dName}
            </Text>
          </Stack>
          {/* <Stack w="100%" align="center">
            <ThemeIcon
              size="lg"
              variant="outline"
              radius="xl"
              color="gray.3"
              c="blue"
            >
              <IconPlane size={16} />
            </ThemeIcon>
            <Divider w="100%" variant="dashed" />
            <Text></Text>
          </Stack> */}
          <Stack gap={0} align="flex-end">
            <Text size="sm" c="gray" mb="xs">
              {t("Landing")}
            </Text>
            <Text fw={500}>{leg.aTime}</Text>
            <Group wrap="nowrap" gap={8}>
              <Text fw={500}>{leg.aCity}</Text>
              <Text>({leg.arrival})</Text>
            </Group>
            <Text size="sm" c="gray.8">
              {leg.aName}
            </Text>
          </Stack>
        </Group>
      </Stack>
    </Paper>
  );
};

const FlightDetailsModal: FC<{
  flight: FlightType;
  opened: boolean;
  handleClose: () => void;
}> = ({ flight, opened, handleClose }) => {
  const t = useTranslations();

  return (
    <Modal
      size="lg"
      opened={opened}
      onClose={handleClose}
      title={t("Flight Details")}
    >
      <Stack>
        {flight.legInfo.map((leg, i) => (
          <React.Fragment key={`leg-${i}`}>
            {i > 0 && (
              <Paper bg="gray.1" p="md">
                <Group justify="space-between">
                  <Group gap={6}>
                    <IconMapPin size={16} />
                    <Text size="sm" fw={500}>
                      {t("Transfer Point")}
                    </Text>
                  </Group>

                  <Group gap={6}>
                    <Text size="sm" fw={500}>
                      {leg.dName}
                    </Text>
                    <Text size="sm">({leg.departure})</Text>
                  </Group>

                  <Group gap={6}>
                    <Text size="sm">{t("Waiting Time")}:</Text>
                    <Text size="sm" fw={500}>
                      {leg.waittime}
                    </Text>
                  </Group>
                </Group>
              </Paper>
            )}
            <Leg {...leg} />
          </React.Fragment>
        ))}
      </Stack>
    </Modal>
  );
};

export default FlightDetailsModal;
