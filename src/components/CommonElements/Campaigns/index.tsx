import {
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

import classes from "./Campaigns.module.css";
import CampaignCard, { CampaignCardProps } from "./CampaignCard";
import { useMediaQuery } from "@mantine/hooks";

type CampaignTypes = "hotel" | "flight" | "rental";

const Campaigns: FC<{ tabs?: CampaignTypes[] }> = ({
  tabs = ["hotel", "flight", "rental"],
}) => {
  const t = useTranslations();

  const campaigns: Record<CampaignTypes, CampaignCardProps[]> = {
    hotel: [
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/otel-kampanyasi-67402.webp",
        title: "Otel rezervasyonlarında 7.500 TL'ye varan indirimi kaçırma",
      },
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/otel-kampanyasi-67402.webp",
        title: "Otel rezervasyonlarında 7.500 TL'ye varan indirimi kaçırma",
      },
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/otel-kampanyasi-67402.webp",
        title: "Otel rezervasyonlarında 7.500 TL'ye varan indirimi kaçırma",
      },
    ],
    flight: [
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/air-arabia-67680.webp",
        title: "Air Arabia'nın 109$'dan başlayan uçak biletlerini kaçırma!",
      },
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/air-arabia-67680.webp",
        title: "Air Arabia'nın 109$'dan başlayan uçak biletlerini kaçırma!",
      },
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/air-arabia-67680.webp",
        title: "Air Arabia'nın 109$'dan başlayan uçak biletlerini kaçırma!",
      },
    ],
    rental: [
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/arac-kiralama-66630.webp",
        title: "Araç kiralamada 3.000 TL'ye varan indirimi kaçırma!",
      },
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/arac-kiralama-66630.webp",
        title: "Araç kiralamada 3.000 TL'ye varan indirimi kaçırma!",
      },
      {
        image:
          "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/arac-kiralama-66630.webp",
        title: "Araç kiralamada 3.000 TL'ye varan indirimi kaçırma!",
      },
    ],
  };

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack gap={0}>
        <Group justify="space-between">
          <Text size="xl" fw={500}>
            {t("Campaigns")}
          </Text>

          <Button radius="xl" variant="default">
            {t("See All")}
          </Button>
        </Group>

        <Tabs variant="pills" mt="lg" defaultValue={tabs[0]}>
          {tabs.length > 1 && (
            <Tabs.List mb="md">
              {[
                {
                  value: "hotel",
                  label: "Hotel",
                },
                {
                  value: "flight",
                  label: "Flight",
                },
                {
                  value: "rental",
                  label: "Car Rental",
                },
              ]
                .filter((e) => tabs.includes(e.value as CampaignTypes))
                .map((tab, i) => (
                  <Tabs.Tab
                    key={`tab-${i}`}
                    value={tab.value}
                    className={classes.tab}
                  >
                    {t(tab.label)}
                  </Tabs.Tab>
                ))}
            </Tabs.List>
          )}

          {["hotel", "flight", "rental"].map((tab, i) => (
            <Tabs.Panel key={`tab-${i}`} value={tab}>
              <SimpleGrid
                cols={{
                  base: 1,
                  xs: 2,
                  md: 3,
                }}
              >
                {campaigns[tab as CampaignTypes].map((campaign, j) => (
                  <CampaignCard key={`campaign-${j}`} {...campaign} />
                ))}
              </SimpleGrid>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Stack>
    </Container>
  );
};

export default Campaigns;
