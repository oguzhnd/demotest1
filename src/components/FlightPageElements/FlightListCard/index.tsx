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

const FlightListCard: FC<{
  id: string;
  onSelect?: () => void;
}> = ({ id, onSelect }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const [expanded, setExpanded] = useState(false);

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const packets: FlightPacketType[] = [
    {
      color: "gray",
      title: "BASIC",
      features: [
        {
          label: "1 parça x 8 kg kabin bagaj hakkı",
        },
        {
          label: "1 parça x 4 kg kişisel eşya hakkı",
        },
        {
          label: "15 kg bagaj hakkı",
        },
      ],
      price: 3279.56,
    },
    {
      color: "blue",
      title: "FLEX",
      features: [
        {
          label: "1 parça x 8 kg kabin bagaj hakkı",
        },
        {
          label: "1 parça x 4 kg kişisel eşya hakkı",
        },
        {
          label: "20 kg bagaj hakkı",
        },
        {
          label: "Standart koltuk seçimi",
        },
        {
          label: "Ücretli değişiklik",
          description: "(Ücret farkı alınabilir)",
        },
        {
          label: "Kesintili iade hakkı",
        },
      ],
      price: 3929.56,
    },
    {
      color: "violet",
      title: "PREMIUM",
      suggested: true,
      features: [
        {
          label: "1 parça x 8 kg kabin bagaj hakkı",
        },
        {
          label: "1 parça x 4 kg kişisel eşya hakkı",
        },
        {
          label: "25 kg bagaj hakkı",
        },
        {
          label: "Dilediğiniz koltuk seçimi",
        },
        {
          label: "Ücretsiz Değişiklik",
          description: "Uçuşa 1 saat kalana kadar (Ücret farkı alınabilir)",
        },
        {
          label: "Esnek İade Hakkı (Uçuşa 12 saat kalana kadar)",
        },
      ],
      price: 4129.56,
    },
  ];

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
              12:40
            </Text>
            <Group gap={8} wrap="nowrap">
              <Text size="lg" fw={500}>
                İstanbul
              </Text>
              <Text size="lg">(SAW)</Text>
            </Group>
            <Text size="sm" c="gray.7" truncate>
              Sabiha Gökçen Havalimanı
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
                src="https://images.ucuzabilet.com/resources/img/flights-logo/logo25x19/25px-PC.png"
              />
            </Box>
            <Text size="xs" c="gray.7">
              3s 20d
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
              18:00
            </Text>
            <Group gap={8} justify="flex-end">
              <Text size="lg" fw={500}>
                Antalya
              </Text>
              <Text size="lg">(AYT)</Text>
            </Group>
            <Text ta="right" size="sm" c="gray.7" truncate>
              Antalya Havalimanı
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
            {(3279.56).toLocaleString(locale)} TRY
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
              sm: 3,
            }}
            spacing="xs"
            px="lg"
            pb="lg"
          >
            {packets.map((packet, i) => (
              <FlightPacket
                key={`packet-${i}`}
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
