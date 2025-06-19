"use client";

import FlightInformations from "@/components/FlightPageElements/_Booking/FlightInformations";
import HotelDetails from "@/components/HotelPageElements/_Booking/HotelDetails";
import { useRouter } from "@/i18n/navigation";
import { Button, Container, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const FlightReservationCompleted = () => {
  const t = useTranslations();

  const { push } = useRouter();

  return (
    <Container w="100%" size="xl" py={20}>
      <Stack w="100%">
        <Stack gap="xs" align="center">
          <ThemeIcon size="xl" variant="light" color="green" radius="xl">
            <IconCheck size={20} />
          </ThemeIcon>
          <Text size="sm" fw={500}>
            Bilet Başarıyla Oluşturuldu
          </Text>
          <Button size="xs" onClick={() => push("/flight")}>
            Ana Sayfaya Dön
          </Button>
        </Stack>

        <Stack>
          <FlightInformations />
        </Stack>
      </Stack>
    </Container>
  );
};

export default FlightReservationCompleted;
