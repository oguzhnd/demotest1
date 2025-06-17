import { Box, Group, Paper, Stack, Text, Tooltip } from "@mantine/core";
import { IconInfoCircle, IconTrendingUp } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const ReservationNotice = () => {
  const t = useTranslations();

  return (
    <Paper p="sm" withBorder radius="md">
      <Stack gap="xs">
        <Group c="green" gap={8}>
          <IconTrendingUp size={16} />
          <Text size="sm" fw={500}>
            {t("Make a reservation now")}
          </Text>
        </Group>
        <Text size="sm">
          {t("Prices are not expected to fall before your departure")}
          <Tooltip
            multiline
            w={240}
            display="inline-block"
            label="Veri bilimcilerimiz, makine öğrenimi modellerinin yardımıyla mevcut ve geçmiş fiyatları analiz ederek fiyatların gelecek 50 gün içinde nasıl dalgalanabileceğini tahmin eder. Veri bilimcilerimiz, hava durumu tahminlerinde olduğu gibi tahminlerinden yüzde 100 emin olamazlar."
          >
            <span style={{ color: "var(--mantine-color-blue-7)", marginLeft: 4 }}>
              {t("Learn more")}
            </span>
          </Tooltip>
        </Text>
      </Stack>
    </Paper>
  );
};

export default ReservationNotice;
