import {
  Checkbox,
  Divider,
  Grid,
  Group,
  Input,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";
import { IMaskInput } from "react-imask";

const ContactInformations = () => {
  const t = useTranslations();

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group>
          <Text size="sm" fw={500}>
            {t("Contact Informations")}
          </Text>
        </Group>
        <Grid>
          <Grid.Col span={3}>
            <TextInput label={t("E-Mail")} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Group wrap="nowrap" gap={4} align="flex-start">
              <Select
                w={100}
                maw="100%"
                style={{
                  flexShrink: 0,
                }}
                label={t("Country Code")}
                data={["+1", "+90"]}
              />
              <Input.Wrapper w="100%" label={t("Phone Number")}>
                <Input component={IMaskInput} mask="000 000 00 00" />
              </Input.Wrapper>
            </Group>
          </Grid.Col>
        </Grid>
        <Group gap={4} c="gray.7">
          <IconInfoCircle size={14} />
          <Text size="xs" lh={1}>{t("We will forward your flight and ticket information via e-mail and free SMS")}</Text>
        </Group>
        <Divider />
        <Checkbox label={t("I would like to be informed about flight notifications, opportunities and campaigns within the scope of the Consent Text")} />
      </Stack>
    </Paper>
  );
};

export default ContactInformations;
