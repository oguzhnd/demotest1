import { Group, Paper, Stack, Text } from "@mantine/core";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Cancellation = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Text size="sm" fw={500}>
          {t("Cancellation Penalty Schedule")}
        </Text>
        <Group justify="space-between">
          <Text size="sm">{t("If you cancel today")}</Text>
          <Text size="sm" fw={500}>
            {(10280).toLocaleString(locale)} TRY
          </Text>
        </Group>
        <Text size="xs" c="gray.7">
          Belirtilen tarihlerden sonra rezervasyonu değiştirdiğinizde veya
          tamamen iptal ettiğinizde ödemeniz gereken iptal cezaları
          belirtilmiştir. Oda bazlı iptallerde cezalar oda bazlı hesaplanır.
        </Text>
      </Stack>
    </Paper>
  );
};

export default Cancellation;
