"use client";

import { campaigns } from "@/components/CommonElements/Campaigns";
import SearchArea from "@/components/SearchArea";
import FlightSearch from "@/components/SearchArea/Contents/Flight";
import HotelSearch from "@/components/SearchArea/Contents/Hotel";
import RentalSearch from "@/components/SearchArea/Contents/Rental";
import { useRouter } from "@/i18n/navigation";
import {
  ActionIcon,
  Button,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { entries, flatten, values } from "lodash";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

const CampaignDetails = () => {
  const t = useTranslations();

  const { back } = useRouter();
  const params = useParams();

  const campaign = flatten(values(campaigns)).find((e) => e.id === params.id);

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack>
        <Group>
          <Button
            variant="subtle"
            color="dark"
            leftSection={<IconChevronLeft size={20} />}
            onClick={back}
          >
            {t("Back")}
          </Button>
        </Group>

        <Image radius="md" src={campaign?.image} />

        <Text size="lg" fw={500}>
          {campaign?.title}
        </Text>
        <Text size="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quos
          quae. Deleniti laborum dignissimos, corrupti quidem totam possimus
          deserunt cupiditate minus itaque temporibus non iste reprehenderit
          doloremque doloribus eos quam.
        </Text>

        <Paper p="md" mb="md" withBorder>
          <Stack>
            <Text size="lg" fw={500}>
              {t("Benefit from the campaign now")}
            </Text>
            {campaign?.type === "hotel" ? (
              <HotelSearch />
            ) : campaign?.type === "flight" ? (
              <FlightSearch />
            ) : (
              <RentalSearch />
            )}
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default CampaignDetails;
