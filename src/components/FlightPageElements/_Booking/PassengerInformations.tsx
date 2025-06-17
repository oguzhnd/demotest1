import { Group, Paper, Stack, Text } from '@mantine/core'
import { useTranslations } from 'next-intl'
import React from 'react'

const PassengerInformations = () => {
  const t = useTranslations()

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group>
          <Text size="sm" fw={500}>{t("Adult")}</Text>
        </Group>
      </Stack>
    </Paper>
  )
}

export default PassengerInformations