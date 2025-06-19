"use client";

import HotelDetails from "@/components/HotelPageElements/_Booking/HotelDetails";
import { useRouter } from "@/i18n/navigation";
import { Button, Container, Stack, Text, ThemeIcon } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const HotelReservationCompleted = () => {
  const t = useTranslations();

  const { push } = useRouter();

  return (
    <Container size="xl" py={20}>
      <Stack>
        <Stack gap="xs" align="center">
          <ThemeIcon size="xl" variant="light" color="green" radius="xl">
            <IconCheck size={20} />
          </ThemeIcon>
          <Text size="sm" fw={500}>
            Rezervasyon Başarıyla Oluşturuldu
          </Text>
          <Button size="xs" onClick={() => push("/")}>
            Ana Sayfaya Dön
          </Button>
        </Stack>

        <Stack>
          <HotelDetails />
        </Stack>
      </Stack>
    </Container>
  );
};

export default HotelReservationCompleted;
