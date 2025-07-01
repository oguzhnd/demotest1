import { FlightType, useFlightStore } from "@/store/products/flight";
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
import { useMediaQuery } from "@mantine/hooks";
import {
  IconPlane,
  IconPlaneArrival,
  IconPlaneDeparture,
  IconPlaneInflight,
} from "@tabler/icons-react";
import { omit } from "lodash";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

const FlightSummary: FC<
  FlightType & {
    type: "departure" | "return";
  }
> = (flight) => {
  const t = useTranslations();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Paper withBorder style={{ overflow: "hidden" }} pb="sm">
      <Stack gap="xs">
        <Group bg="blue.0" justify="space-between" pr="sm">
          <Group wrap="nowrap" gap="xs">
            <Group
              gap={6}
              px="sm"
              py={8}
              bg={flight.type === "departure" ? "green.9" : "orange"}
              c="white"
              style={{
                borderBottomRightRadius: "var(--mantine-radius-md)",
              }}
              wrap="nowrap"
            >
              <IconPlaneInflight size={18} />
              <Text size="sm" fw={500}>
                {t(flight.type === "departure" ? "Departure" : "Return")}
              </Text>
            </Group>
            <Group gap={8} wrap="nowrap">
              <Text size="sm" fw={500}>
                {flight?.legInfo?.[0].dCity}
              </Text>
              <IconPlane size={16} color="var(--mantine-color-blue-7)" />
              <Text size="sm" fw={500}>
                {flight?.legInfo?.[0].aCity}
              </Text>
            </Group>
            <Divider orientation="vertical" />
            <Text size="sm" fw={500} truncate>
              {localeDateFormat(
                new Date(flight?.legInfo?.[0].dDateTime as any)
              )}
            </Text>
          </Group>

          {/* <Anchor size="xs" fw={500}>
            {t("Flight Rules")}
          </Anchor> */}
        </Group>

        {flight?.legInfo?.map((leg, i) => {
          return (
            <React.Fragment key={`leg-${i}`}>
              {i > 0 && (
                <Divider
                  variant="dashed"
                  label={`${t("Wait Time")}: ${
                    flight?.legInfo[i - 1].waittime
                  }`}
                />
              )}
              <Grid>
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 2,
                  }}
                >
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
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 3,
                  }}
                >
                  <Stack gap={0} px={matchesSm ? "md" : 0}>
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
                      {localeDateFormat(new Date(leg.dDateTime as any))}
                    </Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 2,
                  }}
                >
                  <Stack align="center" justify="center" gap={0}>
                    <Text size="xs">{t("Flight Time")}</Text>
                    <Text size="xs">{leg.flightTime}</Text>
                  </Stack>
                </Grid.Col>
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 3,
                  }}
                >
                  <Stack gap={0} px={matchesSm ? "md" : 0}>
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
                      {localeDateFormat(new Date(leg.aDateTime as any))}
                    </Text>
                  </Stack>
                </Grid.Col>
              </Grid>
            </React.Fragment>
          );
        })}
      </Stack>
    </Paper>
  );
};

const FlightInformations = () => {
  const t = useTranslations();

  const { bookingFlight, returnFlight } = useFlightStore();

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group>
          <Text size="sm" fw={500}>
            {t("Flight Informations")}
          </Text>
        </Group>
        <FlightSummary
          type="departure"
          {...omit(bookingFlight, "packetIndex")}
        />
        {returnFlight && (
          <FlightSummary type="return" {...omit(returnFlight, "packetIndex")} />
        )}
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
