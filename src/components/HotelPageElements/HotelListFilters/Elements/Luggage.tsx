import FilterWrapper from "@/components/Filter/FilterWrapper";
import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import {
  IconBriefcase,
  IconLuggage,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const LuggageFilter = () => {
  const t = useTranslations();

  const [value, setValue] = useState(0);

  return (
    <FilterWrapper label={t("Luggage")}>
      <Stack gap={6}>
        <Group justify="space-between">
          <Group gap={4} c="gray.7">
            <IconBriefcase size={16} />
            <Text size="sm">{t("Hand Luggage")}</Text>
          </Group>
          <Group gap={0}>
            <ActionIcon
              variant="default"
              size="sm"
              onClick={() => setValue(value - 1)}
            >
              <IconMinus size={14} color="var(--mantine-color-red-text)" />
            </ActionIcon>
            <ActionIcon.GroupSection
              variant="transparent"
              size="sm"
              bg="var(--mantine-color-body)"
              c="dark"
              miw={30}
            >
              {value}
            </ActionIcon.GroupSection>
            <ActionIcon
              variant="default"
              size="sm"
              onClick={() => setValue(value + 1)}
            >
              <IconPlus size={14} color="var(--mantine-color-teal-text)" />
            </ActionIcon>
          </Group>
        </Group>

        <Group justify="space-between">
          <Group gap={4} c="gray.7">
            <IconLuggage size={16} />
            <Text size="sm">{t("Cabin Luggage")}</Text>
          </Group>
          <Group gap={0}>
            <ActionIcon
              variant="default"
              size="sm"
              onClick={() => setValue(value - 1)}
            >
              <IconMinus size={14} color="var(--mantine-color-red-text)" />
            </ActionIcon>
            <ActionIcon.GroupSection
              variant="transparent"
              size="sm"
              bg="var(--mantine-color-body)"
              c="dark"
              miw={30}
            >
              {value}
            </ActionIcon.GroupSection>
            <ActionIcon
              variant="default"
              size="sm"
              onClick={() => setValue(value + 1)}
            >
              <IconPlus size={14} color="var(--mantine-color-teal-text)" />
            </ActionIcon>
          </Group>
        </Group>
      </Stack>
    </FilterWrapper>
  );
};

export default LuggageFilter;
