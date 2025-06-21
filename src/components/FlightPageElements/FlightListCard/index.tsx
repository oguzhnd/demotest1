import { useRouter } from "@/i18n/navigation";
import {
  ActionIcon,
  Box,
  Button,
  Collapse,
  Divider,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconChevronDown,
  IconChevronRight,
  IconInfoCircle,
  IconPlane,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React, { FC, useState } from "react";

import classes from "../Flight.module.css";
import { useHover, useMediaQuery } from "@mantine/hooks";
import FlightPacket, { FlightPacketType } from "./FlightPacket";
import { FlightType } from "@/store/products/flight";

const FlightListCard: FC<{
  flight: FlightType;
  onSelect?: () => void;
}> = ({ flight, onSelect }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const [expanded, setExpanded] = useState(false);

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Paper
      className={classes.flightListCard}
      data-expanded={expanded}
      radius="md"
      withBorder
    >
      <Stack
        gap={0}
        style={{ cursor: "pointer" }}
        onClick={() => setExpanded(!expanded)}
      >
        <Parent
          wrap={matchesSm ? "wrap" : "nowrap"}
          align="center"
          gap={matchesSm ? "xs" : "xl"}
          py="lg"
          px="xl"
        >
          <Stack gap={0} align={matchesSm ? "center" : "left"}>
            <Text size="lg" fw={500}>
              {flight.dTime}
            </Text>
            <Group gap={8} wrap="nowrap">
              <Text size="lg" fw={500}>
                {flight.legInfo[0].dCity}
              </Text>
              <Text size="lg">({flight.legInfo[0].departure})</Text>
            </Group>
            <Text size="sm" c="gray.7" truncate>
              {flight.legInfo[0].dName}
            </Text>
          </Stack>

          {matchesSm && <IconChevronDown size={16} />}

          <Stack pos="relative" w="100%" align="center" visibleFrom="sm">
            <Text size="xs" c="gray.7">
              {t("Direct")}
            </Text>
            <Divider w="100%" />
            <Box
              p={6}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                border: "1px solid var(--mantine-color-gray-3)",
                borderRadius: "50%",
              }}
            >
              <Image
                w={12}
                h={12}
                src={`https://admin.nttreservation.com/AirlineLogo/icon/${flight.legInfo[0].marketingAirwayCode}.png`}
              />
            </Box>
            <Text size="xs" c="gray.7">
              {flight.legInfo[0].flightTime}
            </Text>

            <IconPlane
              size={16}
              color="var(--mantine-color-blue-7)"
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
              }}
            />
          </Stack>

          <Stack gap={0} align={matchesSm ? "center" : "right"}>
            <Text ta="right" size="lg" fw={500}>
              {flight.aTime}
            </Text>
            <Group gap={8} justify="flex-end">
              <Text size="lg" fw={500}>
                {flight.legInfo[0].aCity}
              </Text>
              <Text size="lg">({flight.legInfo[0].arrival})</Text>
            </Group>
            <Text ta="right" size="sm" c="gray.7" truncate>
              {flight.legInfo[0].aName}
            </Text>
          </Stack>

          <Button
            variant="transparent"
            leftSection={<IconInfoCircle size={16} />}
            style={{ flexShrink: 0 }}
          >
            {t("Details")}
          </Button>

          <Text size="lg" fw={600} style={{ whiteSpace: "nowrap" }}>
            {(flight.totalPrice).toLocaleString(locale)} TRY
          </Text>

          <ActionIcon size="lg" radius="xl" variant="light">
            <IconChevronDown
              size={20}
              style={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform .2s ease",
              }}
            />
          </ActionIcon>
        </Parent>

        <Collapse in={expanded}>
          <SimpleGrid
            cols={{
              base: 1,
              xs: 2,
              sm: 4
            }}
            spacing="xs"
            px="lg"
            pb="lg"
          >
            {flight.AlternativePrices.map((packet, i) => (
              <FlightPacket
                key={`packet-${i}`}
                color={["indigo", "blue", "cyan", "teal", "green", "lime", "yellow"][i]}
                {...packet}
                onSelect={onSelect}
              />
            ))}
          </SimpleGrid>
        </Collapse>
      </Stack>
    </Paper>
  );
};

export default FlightListCard;
