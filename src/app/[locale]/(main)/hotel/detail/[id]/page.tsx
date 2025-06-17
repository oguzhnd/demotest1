"use client";

import SearchArea from "@/components/SearchArea";
import { useRouter } from "@/i18n/navigation";
import { Button, Container, Group, Paper, Stack } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

const HotelDetail = () => {
  const t = useTranslations();

  const params = useParams();
  const { push } = useRouter()

  return (
    <Stack>
      <SearchArea type="hotel" />
      <Container w="100%" size="xl">
        <Stack gap="xs">
          <Paper p="sm" withBorder>
            {params.id}
          </Paper>
          <Paper p="sm" withBorder>
            <Group justify="flex-end">
              <Button
                size="xs"
                variant="light"
                rightSection={<IconChevronRight size={12} />}
                onClick={() => push(`/hotel/reservation`)}
              >
                Rezervasyon Yap
              </Button>
            </Group>
          </Paper>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HotelDetail;
