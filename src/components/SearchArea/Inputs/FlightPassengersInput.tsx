"use client";

import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Modal,
  Popover,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { FC, useMemo, useState } from "react";
import classes from "../SearchArea.module.css";
import { UseFormReturnType } from "@mantine/form";
import { FlightSearchFormProps } from "../Contents/Flight";
import { pick, reduce } from "lodash";
import { useMediaQuery } from "@mantine/hooks";

const FlightPassengersInput: FC<{
  compact?: boolean;
  form: UseFormReturnType<FlightSearchFormProps>;
}> = ({ compact = false, form }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const totalPassengers = useMemo(() => {
    return reduce(
      pick(form.getValues().passengers, "adult", "child", "baby"),
      (prev, curr) => prev + curr,
      0
    );
  }, [form.getValues().passengers]);

  const Target = (
    <Stack
      className={classes.searchInputTarget}
      data-compact={compact}
      data-focused={opened}
      gap={0}
      px="sm"
      py="xs"
      onClick={() => setOpened((o) => !o)}
    >
      <Text size="sm" c={compact ? "gray.7" : undefined}truncate>
        {t("Passengers & Class")}
      </Text>
      {!compact && (
        <Text size="xl" fw={700} truncate>
          {totalPassengers} Yolcu
        </Text>
      )}
      <Text size="sm" c={compact ? "dark.9" : "gray.7"} truncate>
        {compact && `${totalPassengers} Yolcu, `}
        {form.getValues().class === "business" ? t("Business") : t("Economy")}
      </Text>
    </Stack>
  );

  const Content = (
    <Stack>
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
                    form.getValues().passengers.adult === i + 1
                      ? "filled"
                      : "default"
                  }
                  size="md"
                  onClick={() => form.setFieldValue("passengers.adult", i + 1)}
                >
                  <Text size="xs">{i + 1}</Text>
                </ActionIcon>
              ))}
          </ActionIcon.Group>
          <ActionIcon
            variant="default"
            size="md"
            onClick={() => form.setFieldValue("passengers.adult", 10)}
          >
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
                    form.getValues().passengers.child === i
                      ? "filled"
                      : "default"
                  }
                  size="md"
                  onClick={() => form.setFieldValue("passengers.child", i)}
                >
                  <Text size="xs">{i}</Text>
                </ActionIcon>
              ))}
          </ActionIcon.Group>
          <ActionIcon
            variant="default"
            size="md"
            onClick={() => form.setFieldValue("passengers.child", 7)}
          >
            <Text size="xs">{"> 6"}</Text>
          </ActionIcon>
        </Group>
      </Stack>
      <Stack gap={4}>
        <Text size="sm">{t("Infants")}</Text>
        <Group gap={4}>
          <ActionIcon.Group>
            {Array(7)
              .fill("")
              .map((_, i) => (
                <ActionIcon
                  key={`btn-${i}`}
                  variant={
                    form.getValues().passengers.baby === i
                      ? "filled"
                      : "default"
                  }
                  size="md"
                  onClick={() => form.setFieldValue("passengers.baby", i)}
                >
                  <Text size="xs">{i}</Text>
                </ActionIcon>
              ))}
          </ActionIcon.Group>
          <ActionIcon
            variant="default"
            size="md"
            onClick={() => form.setFieldValue("passengers.baby", 7)}
          >
            <Text size="xs">{"> 6"}</Text>
          </ActionIcon>
        </Group>
      </Stack>
      <Stack gap={4}>
        <Text size="sm">{t("Travel Class")}</Text>
        <Group gap={4}>
          <Button.Group>
            <Button
              variant={
                form.getValues().class === "business" ? "filled" : "default"
              }
              size="compact-sm"
              onClick={() => form.setFieldValue("class", "business")}
            >
              <Text size="sm">{t("Business")}</Text>
            </Button>
            <Button
              variant={
                form.getValues().class === "economy" ? "filled" : "default"
              }
              size="compact-sm"
              onClick={() => form.setFieldValue("class", "economy")}
            >
              <Text size="sm">{t("Economy")}</Text>
            </Button>
          </Button.Group>
        </Group>
      </Stack>
    </Stack>
  );

  return matchesSm ? (
    <>
      {Target}
      <Modal
        size="xs"
        opened={opened}
        onClose={() => setOpened(false)}
        centered
      >
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

export default FlightPassengersInput;
