"use client";

import RentalListCard from "@/components/RentalPageElements/RentalListCard";
import RentalListFilters from "@/components/RentalPageElements/RentalListFilters";
import RentalLoading from "@/components/RentalPageElements/RentalLoading";
import SearchArea from "@/components/SearchArea";
import { useRouter } from "@/i18n/navigation";
import { useLoading } from "@/utils/hooks/useLoading";
import {
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Group,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { IconFilter } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const RentalList = () => {
  const t = useTranslations();

  const { push } = useRouter();
  const [opened, setOpened] = useState(false);

  const [loading, startLoading, stopLoading] = useLoading(true);

  useEffect(() => {
    setTimeout(() => {
      // stopLoading()
    }, 2000);
  }, []);

  return (
    <Stack>
      <SearchArea type="rental" />
      {loading && <RentalLoading />}

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={t("Filters")}
        position="left"
        size="sm"
      >
        <RentalListFilters />
      </Drawer>

      <Container w="100%" size="xl">
        <Grid w="100%" gutter="xs">
          <Grid.Col span={3} visibleFrom="md">
            <Stack gap="xs">
              <RentalListFilters />
            </Stack>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 9,
            }}
          >
            <Stack gap="xs">
              <ScrollArea offsetScrollbars scrollbarSize={7} hiddenFrom="md">
                <Group gap="xs" wrap="nowrap">
                  <Button
                    onClick={() => setOpened(true)}
                    leftSection={<IconFilter size={16} />}
                    hiddenFrom="md"
                    variant="default"
                  >
                    {t("Filters")}
                  </Button>
                </Group>
              </ScrollArea>
              {Array(9)
                .fill("")
                .map((flight, i) => (
                  <RentalListCard
                    key={`rental-${i}`}
                    id={`${i + 1}`}
                    onSelect={() => {
                      push(`/rental/reservation/${1}`);
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

export default RentalList;
