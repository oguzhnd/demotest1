import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Group,
  Input,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";
import { IMaskInput } from "react-imask";

const SpecialRequests = () => {
  const t = useTranslations();

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group gap="xs">
          <Text size="sm" fw={500}>
            {t("Special Requests & Notes")}
          </Text>
          <Text size="sm" c="gray.7">
            ({t("Optional")})
          </Text>
        </Group>

        <Stack gap="xs">
          <Text size="xs" fw={500} c="gray.7">
            Özel talepleriniz garanti edilemez ancak tesis, ihtiyaçlarınızı
            karşılamak için yardımcı olacaktır.
          </Text>
          <Checkbox
            label="Balayı çiftiyiz"
            description="Opsiyonu işaretleyerek özel hazırlıkların daha erken yapılmasını sağlayabilirsiniz."
          />
          <Textarea
            label={t("Notes you would like to send to the hotel")}
            placeholder={t("Enter the notes you want to send")}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default SpecialRequests;
