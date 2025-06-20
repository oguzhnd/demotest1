"use client";

import FlightListCard from "@/components/FlightPageElements/FlightListCard";
import FlightListFilters from "@/components/FlightPageElements/FlightListFilters";
import FlightLoading from "@/components/FlightPageElements/FlightLoading";
import ReservationNotice from "@/components/FlightPageElements/ReservationNotice";
import SearchArea from "@/components/SearchArea";
import { useRouter } from "@/i18n/navigation";
import { useLoading } from "@/utils/hooks/useLoading";
import {
  ActionIcon,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { IconChevronRight, IconFilter, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const FlightList = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const [loading, startLoading, stopLoading] = useLoading(true);
  const [opened, setOpened] = useState(false);

  const [departureFlight, setDepartureFlight] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      // stopLoading()
    }, 2000);
  }, []);

  return (
    <Stack>
      <SearchArea type="flight" />
      {loading && <FlightLoading />}

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t("Filters")}
        position="left"
        size="sm"
      >
        <ReservationNotice />
        <FlightListFilters />
      </Drawer>

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3} visibleFrom="md">
            <Stack gap="xs">
              <ReservationNotice />
              <FlightListFilters />
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 9,
            }}
          >
            <Stack gap="xs">
              <ScrollArea offsetScrollbars scrollbarSize={7} hiddenFrom="md">
                <Group gap="xs" wrap="nowrap">
                  <Button
                    onClick={() => setOpened(true)}
                    leftSection={<IconFilter size={16} />}
                    hiddenFrom="md"
                    variant="default"
                  >
                    {t("Filters")}
                  </Button>
                </Group>
              </ScrollArea>
              {departureFlight && (
                <Paper p="sm" bg="gray.0" withBorder radius="md">
                  <Stack gap={8}>
                    <Group justify="space-between">
                      <Group>
                        <Text fw={500}>{t("Departure Flight")}</Text>

                        <Group gap={4} c="gray">
                          <Text size="sm" lh={1}>
                            SAW
                          </Text>
                          <IconChevronRight size={14} />
                          <Text size="sm" lh={1}>
                            AYT
                          </Text>
                        </Group>
                      </Group>

                      <ActionIcon
                        variant="subtle"
                        color="dark"
                        onClick={() => setDepartureFlight(null)}
                      >
                        <IconX size={16} />
                      </ActionIcon>
                    </Group>
                    <FlightListCard id={departureFlight} />
                  </Stack>
                </Paper>
              )}
              {departureFlight && <Divider />}

              {departureFlight && (
                <Group>
                  <Text fw={500}>{t("Return Flight")}</Text>

                  <Group gap={4} c="gray">
                    <Text size="sm" lh={1}>
                      AYT
                    </Text>
                    <IconChevronRight size={14} />
                    <Text size="sm" lh={1}>
                      SAW
                    </Text>
                  </Group>
                </Group>
              )}
              {Array(9)
                .fill("")
                .map((flight, i) => (
                  <FlightListCard
                    key={`flight-${i}`}
                    id={`${i + 1}`}
                    onSelect={() => {
                      if (!departureFlight) {
                        setDepartureFlight("1");
                      } else {
                        push(`/flight/reservation/${1}`);
                      }
                    }}
                  />
                ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default FlightList;
