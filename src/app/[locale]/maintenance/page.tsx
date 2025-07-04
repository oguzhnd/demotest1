import { Center, Image, Stack, Text, ThemeIcon } from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";

const Maintenance = () => {
  const t = useTranslations();

  return (
    <Center mih="100vh">
      <Stack align="center" gap="lg">
        <Image w="100%" maw={300} src="/maintenance.svg" />
        <Text size="lg" fw={500}>{t("Site Under Maintenance")}</Text>
      </Stack>
    </Center>
  );
};

export default Maintenance;
