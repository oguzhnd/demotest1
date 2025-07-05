import {
  ActionIcon,
  Group,
  Popover,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { pick, reduce } from "lodash";
import { useTranslations } from "next-intl";
import React, { FC, useMemo, useState } from "react";

const PassengersInput: FC<{
  value: {
    adult: number;
    child: number;
    baby: number;
  };
  setValue: (key: "adult" | "child" | "baby", value: number) => void;
}> = ({ setValue, value }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);

  const totalPassengers = useMemo(() => {
    return reduce(
      pick(value, "adult", "child", "baby"),
      (prev, curr) => prev + curr,
      0
    );
  }, [value]);

  return (
    <Popover opened={opened} onChange={setOpened}>
      <Popover.Target>
        <TextInput
          value={`${totalPassengers} Yolcu`}
          readOnly
          label={t("Passengers")}
          onClick={() => setOpened(v => !v)}
        />
      </Popover.Target>
      <Popover.Dropdown>
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
                      variant={value.adult === i + 1 ? "filled" : "default"}
                      size="md"
                      onClick={() => setValue("adult", i + 1)}
                    >
                      <Text size="xs">{i + 1}</Text>
                    </ActionIcon>
                  ))}
              </ActionIcon.Group>
              <ActionIcon
                variant="default"
                size="md"
                onClick={() => setValue("adult", 10)}
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
                      variant={value.child === i ? "filled" : "default"}
                      size="md"
                      onClick={() => setValue("child", i)}
                    >
                      <Text size="xs">{i}</Text>
                    </ActionIcon>
                  ))}
              </ActionIcon.Group>
              <ActionIcon
                variant="default"
                size="md"
                onClick={() => setValue("child", 7)}
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
                      variant={value.baby === i ? "filled" : "default"}
                      size="md"
                      onClick={() => setValue("baby", i)}
                    >
                      <Text size="xs">{i}</Text>
                    </ActionIcon>
                  ))}
              </ActionIcon.Group>
              <ActionIcon
                variant="default"
                size="md"
                onClick={() => setValue("baby", 7)}
              >
                <Text size="xs">{"> 6"}</Text>
              </ActionIcon>
            </Group>
          </Stack>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default PassengersInput;
