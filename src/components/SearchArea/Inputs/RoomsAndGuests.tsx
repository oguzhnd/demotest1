"use client";

import {
  Accordion,
  ActionIcon,
  Button,
  Center,
  Divider,
  Group,
  Modal,
  Popover,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";

import { IconPlus, IconSearch, IconX } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { FC, useCallback, useMemo, useState } from "react";
import classes from "../SearchArea.module.css";
import { useMediaQuery } from "@mantine/hooks";
import { UseFormReturnType } from "@mantine/form";
import { HotelSearchFormProps } from "../Contents/Hotel";
import { cloneDeep, concat, merge, sum } from "lodash";

const RoomsAndGuestsInput: FC<{
  compact?: boolean;
  form: UseFormReturnType<HotelSearchFormProps>;
  disabled?: boolean;
}> = ({ compact = false, form }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const totalGuest = useMemo(() => {
    return sum(form.getValues().rooms.map((e) => e.adult + e.child.length));
  }, [form.getValues().rooms]);

  const deleteRoom = useCallback((roomIndex: number) => {
    form.setFieldValue("rooms", (v) => {
      let c = cloneDeep(v);
      c.splice(roomIndex, 1);
      return c;
    });
  }, []);

  const Target = (
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
      <Text size="sm" c={compact ? "gray.7" : undefined} truncate>
        {t("Rooms & Guests")}
      </Text>
      {!compact && (
        <Text size="xl" fw={700} truncate>
          {totalGuest} {t("Guest")}
        </Text>
      )}
      <Text size="sm" c={compact ? "dark.9" : "gray.7"} truncate>
        {compact && `${totalGuest} ${t("Guest")},`} {form.getValues().rooms.length} {t("Room")}
      </Text>
    </Stack>
  );

  const Content = (
    <Stack gap="xs">
      <Accordion variant="contained" defaultValue="0">
        {form.getValues().rooms.map((room, j) => (
          <Accordion.Item key={`room-${j}`} value={`${j}`}>
            <Accordion.Control>
              <Group justify="space-between" pr={8}>
                <Text size="sm">
                  {j + 1}. {t("Room")}
                </Text>

                {form.getValues().rooms.length > 1 && (
                  <ThemeIcon
                    size="xs"
                    variant="transparent"
                    color="red"
                    onClick={() => deleteRoom(j)}
                  >
                    <IconX size={16} />
                  </ThemeIcon>
                )}
              </Group>
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
                            variant={
                              i + 1 === room.adult ? "filled" : "default"
                            }
                            size="md"
                            onClick={() =>
                              form.setFieldValue(`rooms.${j}.adult`, i + 1)
                            }
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
                      {Array(7)
                        .fill("")
                        .map((_, i) => (
                          <ActionIcon
                            key={`btn-${i}`}
                            variant={
                              i === room.child.length ? "filled" : "default"
                            }
                            size="md"
                            onClick={() =>
                              form.setFieldValue(
                                `rooms.${j}.child`,
                                merge(
                                  Array(i).fill(0),
                                  form.getValues().rooms[j].child
                                ).slice(0, i)
                              )
                            }
                          >
                            <Text size="xs">{i}</Text>
                          </ActionIcon>
                        ))}
                    </ActionIcon.Group>
                    <ActionIcon variant="default" size="md">
                      <Text size="xs">{"> 6"}</Text>
                    </ActionIcon>
                  </Group>
                </Stack>
                {form.getValues().rooms[j].child.length > 0 && (
                  <Stack gap={4}>
                    <Text size="sm">{t("Children Ages")}</Text>
                    <SimpleGrid maw={300} cols={2} spacing={8}>
                      {form.getValues().rooms[j].child.map((childAge, i) => (
                        <Select
                          key={`age-${i}`}
                          value={`${childAge}`}
                          data={Array(15)
                            .fill("")
                            .map((_, k) => ({
                              value: `${k}`,
                              label: t("X years old", { X: k }),
                            }))}
                          onChange={(v) =>
                            form.setFieldValue(
                              `rooms.${j}.child.${i}`,
                              +(v || 0)
                            )
                          }
                          comboboxProps={{ withinPortal: false }}
                        />
                      ))}
                    </SimpleGrid>
                  </Stack>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <Group justify="flex-end">
        <Button
          leftSection={<IconPlus size={14} />}
          size="xs"
          onClick={() => {
            form.setFieldValue("rooms", (v) =>
              concat(v, { adult: 1, child: [] })
            );
          }}
        >
          {t("Add Room")}
        </Button>
      </Group>
    </Stack>
  );

  return matchesSm ? (
    <>
      {Target}
      <Modal opened={opened} onClose={() => setOpened(false)} centered>
        {Content}
      </Modal>
    </>
  ) : (
    <Popover shadow="lg" opened={opened} onChange={setOpened}>
      <Popover.Target>{Target}</Popover.Target>
      <Popover.Dropdown>{Content}</Popover.Dropdown>
    </Popover>
  );
};

export default RoomsAndGuestsInput;
