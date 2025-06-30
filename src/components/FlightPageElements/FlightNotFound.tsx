import { Image, Stack, Text } from '@mantine/core'
import React from 'react'
import { useTranslations } from 'use-intl'

const FlightNotFound = () => {
  const t = useTranslations()

  return (
    <Stack align='center' py={20}>
      <Image src="/not-found.png" w={100} h={100} />
      <Text fw={500}>{t("Flight Not Found")}</Text>
    </Stack>
  )
}

export default FlightNotFound