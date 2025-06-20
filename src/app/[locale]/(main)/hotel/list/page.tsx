"use client";

import HotelListCard from "@/components/HotelPageElements/HotelListCard";
import HotelListFilters from "@/components/HotelPageElements/HotelListFilters";
import CancellationFilter from "@/components/HotelPageElements/HotelListFilters/CancellationFilter";
import FoodFilter from "@/components/HotelPageElements/HotelListFilters/FoodFilter";
import Sorting from "@/components/HotelPageElements/HotelListFilters/Sorting";
import HotelLoading from "@/components/HotelPageElements/HotelLoading";
import ShowOnMap from "@/components/HotelPageElements/ShowOnMap";
import SearchArea from "@/components/SearchArea";
import { useRouter } from "@/i18n/navigation";
import { useLoading } from "@/utils/hooks/useLoading";
import {
  Button,
  Container,
  Drawer,
  Grid,
  Group,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { IconFilter, IconMapPin } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const HotelList = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const [loading, startLoading, stopLoading] = useLoading(true);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // stopLoading()
    }, 2000);
  }, []);

  return (
    <Stack>
      <SearchArea type="hotel" />
      {loading && <HotelLoading />}

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t("Filters")}
        position="left"
        size="sm"
      >
        <HotelListFilters />
      </Drawer>

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3} visibleFrom="md">
            <Stack gap="xs">
              <ShowOnMap />
              <HotelListFilters />
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 9,
            }}
          >
            <Stack gap="xs">
              <ScrollArea offsetScrollbars scrollbarSize={7}>
                <Group gap="xs" wrap="nowrap">
                  <Button
                    onClick={() => push("/hotel/list/map")}
                    leftSection={<IconMapPin size={16} />}
                    hiddenFrom="md"
                  >
                    {t("Show on Map")}
                  </Button>
                  <Button
                    onClick={() => setOpened(true)}
                    leftSection={<IconFilter size={16} />}
                    hiddenFrom="md"
                    variant="default"
                  >
                    {t("Filters")}
                  </Button>
                  <FoodFilter />
                  <CancellationFilter />
                  <Sorting />
                </Group>
              </ScrollArea>
              {Array(9)
                .fill("")
                .map((flight, i) => (
                  <HotelListCard
                    key={`hotel-${i}`}
                    id={`${i + 1}`}
                    onSelect={() => {
                      push(`/hotel/detail/${1}`);
                    }}
                  />
                ))}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Stack>
  );
};

export default HotelList;
