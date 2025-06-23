"use client";

import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Popover,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";
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
        <Stack>
          <Stack gap={4}>
            <Text size="sm">{t("Rooms")}</Text>
            <Group gap={4}>
              <ActionIcon.Group>
                {Array(6)
                  .fill("")
                  .map((_, i) => (
                    <ActionIcon key={`btn-${i}`} variant="default" size="md">
                      <Text size="xs">{i + 1}</Text>
                    </ActionIcon>
                  ))}
              </ActionIcon.Group>
              <ActionIcon variant="default" size="md">
                <Text size="xs">{"> 6"}</Text>
              </ActionIcon>
            </Group>
          </Stack>
          <Stack gap={4}>
            <Text size="sm">{t("Adults")}</Text>
            <Group gap={4}>
              <ActionIcon.Group>
                {Array(9)
                  .fill("")
                  .map((_, i) => (
                    <ActionIcon key={`btn-${i}`} variant="default" size="md">
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
                    <ActionIcon key={`btn-${i}`} variant="default" size="md">
                      <Text size="xs">{i + 1}</Text>
                    </ActionIcon>
                  ))}
              </ActionIcon.Group>
              <ActionIcon variant="default" size="md">
                <Text size="xs">{"> 6"}</Text>
              </ActionIcon>
            </Group>
          </Stack>
          <Stack gap={4}>
            <Text size="sm">{t("Travel Class")}</Text>
            <Group gap={4}>
              <Button.Group>
                <Button variant="default" size="compact-sm">
                  <Text size="sm">{t("Business")}</Text>
                </Button>
                <Button variant="default" size="compact-sm">
                  <Text size="sm">{t("Economy")}</Text>
                </Button>
              </Button.Group>
            </Group>
          </Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default RoomsAndGuestsInput;
