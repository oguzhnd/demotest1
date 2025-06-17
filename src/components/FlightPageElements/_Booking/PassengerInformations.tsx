import {
  Button,
  Grid,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { IconUsers } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const PassengerInformations = () => {
  const t = useTranslations();

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group justify="space-between">
          <Text size="sm" fw={500}>
            {t("Adult")}
          </Text>

          <Button size="compact-sm" variant="subtle" leftSection={<IconUsers size={14}/>}>
            {t("Choose From My Passengers")}
          </Button>
        </Group>
        <Grid gutter="xs">
          <Grid.Col span={2}>
            <TextInput label={t("Name")} />
          </Grid.Col>
          <Grid.Col span={2}>
            <TextInput label={t("Surname")} />
          </Grid.Col>
          <Grid.Col span={2}>
            <DatePickerInput label={t("Birth Date")} />
          </Grid.Col>
          <Grid.Col span={2}>
            <TextInput label={t("TC Identity Number")} />
          </Grid.Col>
          <Grid.Col span={2}>
            <Select
              style={{
                flexShrink: 0,
              }}
              label={t("Gender")}
              data={[
                {
                  value: "male",
                  label: t("Male"),
                },
                {
                  value: "female",
                  label: t("Female"),
                },
                {
                  value: "other",
                  label: t("Other"),
                },
              ]}
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default PassengerInformations;
