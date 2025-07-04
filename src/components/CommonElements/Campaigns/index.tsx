import {
  Button,
  Container,
  Group,
  ScrollArea,
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
import { useRouter } from "@/i18n/navigation";
import { flatten, values } from "lodash";

export type CampaignTypes = "hotel" | "flight" | "rental" | "tour";

export const campaigns: Record<CampaignTypes, CampaignCardProps[]> = {
  hotel: [
    {
      id: "1",
      type: "hotel",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/otel-kampanyasi-67402.webp",
      title: "Otel rezervasyonlarında 7.500 TL'ye varan indirimi kaçırma",
    },
    {
      id: "2",
      type: "hotel",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/otel-kampanyasi-67402.webp",
      title: "Otel rezervasyonlarında 7.500 TL'ye varan indirimi kaçırma",
    },
    {
      id: "3",
      type: "hotel",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/otel-kampanyasi-67402.webp",
      title: "Otel rezervasyonlarında 7.500 TL'ye varan indirimi kaçırma",
    },
    {
      id: "4",
      type: "hotel",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/otel-kampanyasi-67402.webp",
      title: "Otel rezervasyonlarında 7.500 TL'ye varan indirimi kaçırma",
    },
  ],
  flight: [
    {
      id: "5",
      type: "flight",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/air-arabia-67680.webp",
      title: "Air Arabia'nın 109$'dan başlayan uçak biletlerini kaçırma!",
    },
    {
      id: "6",
      type: "flight",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/air-arabia-67680.webp",
      title: "Air Arabia'nın 109$'dan başlayan uçak biletlerini kaçırma!",
    },
    {
      id: "7",
      type: "flight",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/air-arabia-67680.webp",
      title: "Air Arabia'nın 109$'dan başlayan uçak biletlerini kaçırma!",
    },
    {
      id: "8",
      type: "flight",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/air-arabia-67680.webp",
      title: "Air Arabia'nın 109$'dan başlayan uçak biletlerini kaçırma!",
    },
  ],
  rental: [
    {
      id: "9",
      type: "rental",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/arac-kiralama-66630.webp",
      title: "Araç kiralamada 3.000 TL'ye varan indirimi kaçırma!",
    },
    {
      id: "10",
      type: "rental",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/arac-kiralama-66630.webp",
      title: "Araç kiralamada 3.000 TL'ye varan indirimi kaçırma!",
    },
    {
      id: "11",
      type: "rental",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/arac-kiralama-66630.webp",
      title: "Araç kiralamada 3.000 TL'ye varan indirimi kaçırma!",
    },
    {
      id: "12",
      type: "rental",
      image:
        "https://cdn2.enuygun.com/media/lib/1x400/uploads/image/arac-kiralama-66630.webp",
      title: "Araç kiralamada 3.000 TL'ye varan indirimi kaçırma!",
    },
  ],
  tour: [
    {
      id: "13",
      type: "tour",
      image:
        "https://www.nttrota.com/assets/img/yurt_disi_turlari_diamond.webp",
      title: "Tur rezervasyonlarında 3.000 TL'ye varan indirimi kaçırma!",
    },
    {
      id: "14",
      type: "tour",
      image:
        "https://www.nttrota.com/assets/img/yurt_disi_turlari_diamond.webp",
      title: "Tur rezervasyonlarında 3.000 TL'ye varan indirimi kaçırma!",
    },
    {
      id: "15",
      type: "tour",
      image:
        "https://www.nttrota.com/assets/img/yurt_disi_turlari_diamond.webp",
      title: "Tur rezervasyonlarında 3.000 TL'ye varan indirimi kaçırma!",
    },
    {
      id: "16",
      type: "tour",
      image:
        "https://www.nttrota.com/assets/img/yurt_disi_turlari_diamond.webp",
      title: "Tur rezervasyonlarında 3.000 TL'ye varan indirimi kaçırma!",
    },
  ],
};

const Campaigns: FC<{ tabs?: CampaignTypes[]; seeAll?: boolean }> = ({
  tabs = ["hotel", "flight", "rental"],
  seeAll = false,
}) => {
  const t = useTranslations();

  const { push } = useRouter();

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack gap={0}>
        <Group justify="space-between">
          <Text size="xl" fw={500}>
            {t("Campaigns")}
          </Text>

          {!seeAll && (
            <Button
              radius="xl"
              variant="default"
              onClick={() => push("/campaigns")}
            >
              {t("See All")}
            </Button>
          )}
        </Group>

        <Tabs variant="pills" mt="lg" defaultValue={tabs[0]}>
          {tabs.length > 1 && (
            <Tabs.List mb="md">
              <ScrollArea offsetScrollbars scrollbarSize={7}>
                <Group wrap="nowrap" gap="xs">
                  {seeAll && (
                    <Tabs.Tab value="all" className={classes.tab}>
                      {t("All")}
                    </Tabs.Tab>
                  )}
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
                    {
                      value: "tour",
                      label: "Tour",
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
                </Group>
              </ScrollArea>
            </Tabs.List>
          )}

          <Tabs.Panel value="all">
            <SimpleGrid
              cols={{
                base: 1,
                xs: 2,
                md: 3,
              }}
            >
              {flatten(values(campaigns)).map((campaign, j) => (
                <CampaignCard key={`campaign-${j}`} {...campaign} />
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          {["hotel", "flight", "rental", "tour"].map((tab, i) => (
            <Tabs.Panel key={`tab-${i}`} value={tab}>
              <SimpleGrid
                cols={{
                  base: 1,
                  xs: 2,
                  md: 3,
                }}
              >
                {(seeAll
                  ? campaigns[tab as CampaignTypes]
                  : campaigns[tab as CampaignTypes].slice(0, 3)
                ).map((campaign, j) => (
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
