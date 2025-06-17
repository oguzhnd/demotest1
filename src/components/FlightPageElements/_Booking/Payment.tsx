import { Group, Paper, Stack, Text } from "@mantine/core";
import { useTranslations } from "next-intl";

const Payment = () => {
  const t = useTranslations();

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group>
          <Text size="sm" fw={500}>
            {t("Contact Informations")}
          </Text>
        </Group>
      </Stack>
    </Paper>
  );
};

export default Payment;
