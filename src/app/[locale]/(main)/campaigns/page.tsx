"use client"

import Campaigns from "@/components/CommonElements/Campaigns";
import { Container, Stack, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";

const CampaignsPage = () => {
  const t = useTranslations();

  return (
    <Container size="xl" w="100%" py={20}>
      <Campaigns seeAll />
    </Container>
  );
};

export default CampaignsPage;
