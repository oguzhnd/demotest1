import { Divider, Group, Paper, Stack, Text } from "@mantine/core";
import { IconBed, IconMoon, IconUser, IconX } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";

const PriceDetails = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <Paper p="sm" withBorder>
      <Stack gap="xs">
        <Text size="sm" fw={500}>
          {t("Price Details")}
        </Text>
        <Stack gap={4}>
          <Group justify="space-between" wrap="nowrap" align="flex-start">
            <Group gap={4} c="gray.7">
              <Text size="sm">Araç Kiralama Hizmeti (3 Gün)</Text>
            </Group>

            <Text size="sm" fw={500} lineClamp={1} style={{ flexShrink: 0 }}>
              {(5028.53).toLocaleString(locale)} TRY
            </Text>
          </Group>
          <Group justify="space-between">
            <Group gap={4} c="gray.7">
              <Text size="sm">Hizmet Bedeli</Text>
            </Group>

            <Text size="sm" fw={500}>
              {(100).toLocaleString(locale)} TRY
            </Text>
          </Group>
          <Divider />
          <Group justify="space-between">
            <Group gap={4} c="gray.7">
              <Text size="sm" fw={500}>
                Toplam
              </Text>
            </Group>

            <Text size="sm" fw={600}>
              {(5128.53).toLocaleString(locale)} TRY
            </Text>
          </Group>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PriceDetails;
