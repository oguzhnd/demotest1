import { useGeneralStore } from "@/store/general";
import { Button, Group, Paper, Text } from "@mantine/core";
import { IconChevronRight, IconConfetti } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const PromoBanner = () => {
  const t = useTranslations();

  const { promoBanner } = useGeneralStore();

  return (
    <Paper bg="blue.0" py="xs">
      <Group gap="xs" justify="center">
        <IconConfetti size={20} color="var(--mantine-color-blue-7)" />
        <Text size="sm" fw={500}>
          {promoBanner}
        </Text>
        <Button ml="sm" size="compact-sm" rightSection={<IconChevronRight size={14} />}>
          {t("Review Now")}
        </Button>
      </Group>
    </Paper>
  );
};

export default PromoBanner;
