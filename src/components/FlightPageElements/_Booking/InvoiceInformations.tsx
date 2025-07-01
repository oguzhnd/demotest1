import {
  Button,
  Checkbox,
  Grid,
  Group,
  Paper,
  Radio,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { IconFileDescription } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const InvoiceInformations = () => {
  const t = useTranslations();

  const [selectedType, setSelectedType] = useState("individual");

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group justify="space-between">
          <Group>
            <Text size="sm" fw={500}>
              {t("Invoice Informations")}
            </Text>
            <Radio.Group value={selectedType} onChange={setSelectedType}>
              <Group gap="xs">
                <Radio value="individual" label={t("Individual")} />
                <Radio value="corporate" label={t("Corporate")} />
              </Group>
            </Radio.Group>
          </Group>

          <Button
            size="compact-sm"
            variant="subtle"
            leftSection={<IconFileDescription size={14} />}
          >
            {t("Choose From My Billing Informations")}
          </Button>
        </Group>

        {selectedType === "corporate" && (
          <Grid gutter="xs">
            <Grid.Col
              span={{
                base: 12,
                sm: 6,
              }}
            >
              <Group wrap="nowrap" align="flex-end">
                <TextInput label={t("Company Name")} />
                <Stack h={36} justify="center">
                  <Checkbox label={t("Sole Proprietorship")} />
                </Stack>
              </Group>
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                sm: 3,
              }}
            >
              <TextInput label={t("Tax Office")} />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                sm: 3,
              }}
            >
              <TextInput label={t("Tax Number")} />
            </Grid.Col>
          </Grid>
        )}
        <Grid gutter="xs">
          <Grid.Col
            span={{
              base: 12,
              sm: 3,
            }}
          >
            <Select label={t("Country")} />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 3,
            }}
          >
            <Select label={t("Province")} />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 3,
            }}
          >
            <Select label={t("District")} />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 3,
            }}
          >
            <TextInput label={t("Billing Address")} />
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default InvoiceInformations;
