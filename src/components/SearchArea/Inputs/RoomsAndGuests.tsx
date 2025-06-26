"use client";

import {
  Accordion,
  ActionIcon,
  Button,
  Divider,
  Group,
  Popover,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import { IconPlus, IconSearch, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import classes from "../SearchArea.module.css";
import { useMediaQuery } from "@mantine/hooks";

const RoomsAndGuestsInput: FC<{
  compact?: boolean;
}> = ({ compact = false }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);

  const matchesSm = useMediaQuery("(max-width: 48em)");

  return (
    <Popover shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>
        <Stack
          h="100%"
          className={classes.searchInputTarget}
          data-compact={compact}
          data-focused={opened}
          gap={0}
          px="sm"
          py="xs"
          onClick={() => setOpened((o) => !o)}
          style={{
            [matchesSm ? "borderBottom" : "borderRight"]:
              "1px solid var(--mantine-color-gray-3)",
          }}
        >
          <Text size="sm" c={compact ? "blue.7" : undefined}>
            {t("Rooms & Guests")}
          </Text>
          {!compact && (
            <Text size="xl" fw={700}>
              1 Misafir
            </Text>
          )}
          <Text size="sm" c={compact ? "white" : "gray.7"}>
            1 Oda
          </Text>
        </Stack>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs">
          <Accordion variant="contained" defaultValue="Apples">
            {Array(2)
              .fill("")
              .map((room, i) => (
                <Accordion.Item key={`room-${i}`} value={`${i}`}>
                  <Accordion.Control>
                    {i + 1}. {t("Room")}
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap={8}>
                      <Stack gap={4}>
                        <Text size="sm">{t("Adults")}</Text>
                        <Group gap={4}>
                          <ActionIcon.Group>
                            {Array(9)
                              .fill("")
                              .map((_, i) => (
                                <ActionIcon
                                  key={`btn-${i}`}
                                  variant="default"
                                  size="md"
                                >
                                  <Text size="xs">{i + 1}</Text>
                                </ActionIcon>
                              ))}
                          </ActionIcon.Group>
                          <ActionIcon variant="default" size="md">
                            <Text size="xs">{"> 9"}</Text>
                          </ActionIcon>
                        </Group>
                      </Stack>
                      <Stack gap={4}>
                        <Text size="sm">{t("Childrens")}</Text>
                        <Group gap={4}>
                          <ActionIcon.Group>
                            {Array(6)
                              .fill("")
                              .map((_, i) => (
                                <ActionIcon
                                  key={`btn-${i}`}
                                  variant="default"
                                  size="md"
                                >
                                  <Text size="xs">{i + 1}</Text>
                                </ActionIcon>
                              ))}
                          </ActionIcon.Group>
                          <ActionIcon variant="default" size="md">
                            <Text size="xs">{"> 6"}</Text>
                          </ActionIcon>
                        </Group>
                      </Stack>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
          </Accordion>
          <Group justify="flex-end">
            <Button leftSection={<IconPlus size={14} />} size="xs">
              {t("Add Room")}
            </Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default RoomsAndGuestsInput;
