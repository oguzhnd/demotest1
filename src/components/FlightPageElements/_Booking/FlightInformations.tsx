import { useFlightStore } from "@/store/products/flight";
import { localeDateFormat } from "@/utils/tools";
import {
  Anchor,
  Badge,
  Box,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconPlane,
  IconPlaneArrival,
  IconPlaneDeparture,
  IconPlaneInflight,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const FlightInformations = () => {
  const t = useTranslations();

  const { bookingFlight } = useFlightStore();

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group>
          <Text size="sm" fw={500}>
            {t("Flight Informations")}
          </Text>
        </Group>
        <Paper withBorder style={{ overflow: "hidden" }} pb="sm">
          <Stack>
            <Group bg="blue.0" justify="space-between" pr="sm">
              <Group>
                <Group
                  gap={6}
                  px="sm"
                  py={8}
                  bg="dark.7"
                  c="white"
                  style={{
                    borderBottomRightRadius: "var(--mantine-radius-md)",
                  }}
                >
                  <IconPlaneInflight size={18} />
                  <Text size="sm" fw={500}>
                    {t("Departure")}
                  </Text>
                </Group>
                <Group gap={8}>
                  <Text size="sm" fw={500}>
                    {bookingFlight?.legInfo[0].dCity}
                  </Text>
                  <IconPlane size={16} color="var(--mantine-color-blue-7)" />
                  <Text size="sm" fw={500}>
                    {bookingFlight?.legInfo[0].aCity}
                  </Text>
                </Group>
                <Divider orientation="vertical" />
                <Text size="sm" fw={500}>
                  {localeDateFormat(
                    new Date(bookingFlight?.legInfo[0].dDateTime as any)
                  )}
                </Text>
              </Group>

              <Anchor size="xs" fw={500}>
                {t("Flight Rules")}
              </Anchor>
            </Group>

            {bookingFlight?.legInfo.map((leg, i) => (
              <Grid key={`leg-${i}`}>
                <Grid.Col span={2}>
                  <Group gap={0} wrap="nowrap">
                    <Stack w="100%" gap={0} align="center">
                      <Image
                        src={`https://admin.nttreservation.com/AirlineLogo/icon/${leg.marketingAirwayCode}.png`}
                        w={25}
                        h={19}
                        mb={6}
                      />
                      <Text size="xs" fw={500}>
                        {leg.airway}
                      </Text>
                      <Text size="xs" fw={500}>
                        {leg.flightNo}
                      </Text>
                      <Text size="xs">{leg.class}</Text>
                    </Stack>
                    <Divider orientation="vertical" variant="dashed" />
                  </Group>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Stack gap={0}>
                    <Group gap={6} mb={4}>
                      <IconPlaneDeparture size={20} />
                      <Text
                        size="lg"
                        fw={600}
                        px={6}
                        bg="blue.1"
                        style={{ borderRadius: 6 }}
                      >
                        {leg.dTime}
                      </Text>
                      <Text size="lg" fw={600}>
                        {leg.departure}
                      </Text>
                    </Group>
                    <Text size="sm">{leg.dName}</Text>
                    <Text size="sm">
                      {localeDateFormat(
                        new Date(leg.dDateTime as any)
                      )}
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={1}>
                  <Stack align="center" justify="center">
                    <Text size="xs">
                      {leg.flightTime}
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col span={1}></Grid.Col>
                <Grid.Col span={3}>
                  <Stack gap={0}>
                    <Group gap={6} mb={4}>
                      <IconPlaneArrival size={20} />
                      <Text
                        size="lg"
                        fw={600}
                        px={6}
                        bg="blue.1"
                        style={{ borderRadius: 6 }}
                      >
                        {leg.aTime}
                      </Text>
                      <Text size="lg" fw={600}>
                        {leg.arrival}
                      </Text>
                    </Group>
                    <Text size="sm">{leg.aName}</Text>
                    <Text size="sm">
                      {localeDateFormat(
                        new Date(leg.aDateTime as any)
                      )}
                    </Text>
                  </Stack>
                </Grid.Col>
              </Grid>
            ))}
          </Stack>
        </Paper>
        {/* <Paper withBorder style={{ overflow: "hidden" }} pb="sm">
          <Stack>
            <Group bg="blue.0" justify="space-between" pr="sm">
              <Group>
                <Group
                  gap={6}
                  px="sm"
                  py={8}
                  bg="dark.7"
                  c="white"
                  style={{
                    borderBottomRightRadius: "var(--mantine-radius-md)",
                  }}
                >
                  <IconPlaneInflight size={18} />
                  <Text size="sm" fw={500}>
                    {t("Return")}
                  </Text>
                </Group>
                <Group gap={8}>
                  <Text size="sm" fw={500}>
                    İstanbul
                  </Text>
                  <IconPlane size={16} color="var(--mantine-color-blue-7)" />
                  <Text size="sm" fw={500}>
                    Dusseldorf
                  </Text>
                </Group>
                <Divider orientation="vertical" />
                <Text size="sm" fw={500}>
                  17 Haziran 2025, Salı
                </Text>
              </Group>

              <Anchor size="xs" fw={500}>
                {t("Flight Rules")}
              </Anchor>
            </Group>

            <Grid>
              <Grid.Col span={2}>
                <Group gap={0} wrap="nowrap">
                  <Stack w="100%" gap={0} align="center">
                    <Image
                      src="https://images.ucuzabilet.com/resources/img/flights-logo/logo25x19/25px-PC.png"
                      w={25}
                      h={19}
                      mb={6}
                    />
                    <Text size="xs" fw={500}>
                      Pegasus
                    </Text>
                    <Text size="xs" fw={500}>
                      PC 1005
                    </Text>
                    <Text size="xs">Ekonomi / T</Text>
                    <Text size="xs">Light</Text>
                  </Stack>
                  <Divider orientation="vertical" variant="dashed" />
                </Group>
              </Grid.Col>
              <Grid.Col span={3}>
                <Stack gap={0}>
                  <Group gap={6} mb={4}>
                    <IconPlaneDeparture size={20} />
                    <Text
                      size="lg"
                      fw={600}
                      px={6}
                      bg="blue.1"
                      style={{ borderRadius: 6 }}
                    >
                      17:05
                    </Text>
                    <Text size="lg" fw={600}>
                      SAW
                    </Text>
                  </Group>
                  <Text size="sm">Sabiha Gökçen, İstanbul , Türkiye</Text>
                  <Text size="sm">17 Haziran 2025, Salı</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={1}>
                <Stack align="center" justify="center">
                  <Text size="xs">3sa 20dk</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={1}></Grid.Col>
              <Grid.Col span={3}>
                <Stack gap={0}>
                  <Group gap={6} mb={4}>
                    <IconPlaneArrival size={20} />
                    <Text
                      size="lg"
                      fw={600}
                      px={6}
                      bg="blue.1"
                      style={{ borderRadius: 6 }}
                    >
                      19:15
                    </Text>
                    <Text size="lg" fw={600}>
                      DUS
                    </Text>
                  </Group>
                  <Text size="sm">
                    Dusseldorf International, Dusseldorf , Almanya
                  </Text>
                  <Text size="sm">17 Haziran 2025, Salı</Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Stack>
        </Paper> */}
      </Stack>
    </Paper>
  );
};

export default FlightInformations;
