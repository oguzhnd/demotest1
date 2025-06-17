import { useRouter } from "@/i18n/navigation";
import { Button, Grid, Group, Stack, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { FC } from "react";
import classes from "../SearchArea.module.css";
import AirportInput from "../Inputs/AirportInput";

const HotelSearch: FC<{
  compact?: boolean;
}> = ({ compact = false }) => {
  const t = useTranslations();

  const { push } = useRouter();

  return (
    <Stack pos="relative" pb={20}>
      <Group wrap="nowrap" gap={4}>
        <Grid
          w="100%"
          columns={10}
          gutter={0}
          style={{
            borderRadius: "var(--mantine-radius-md)",
            border: "1px solid var(--mantine-color-gray-3)",
            overflow: "hidden",
          }}
        >
          <Grid.Col span={4}>
          </Grid.Col>
          <Grid.Col span={2}>
            <TextInput
              styles={{
                input: {
                  borderRight: "1px solid var(--mantine-color-gray-3)",
                },
              }}
              classNames={{
                input: classes.searchAreaInput,
              }}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <TextInput
              styles={{
                input: {
                  borderRight: "1px solid var(--mantine-color-gray-3)",
                },
              }}
              classNames={{
                input: classes.searchAreaInput,
              }}
            />
          </Grid.Col>
          <Grid.Col span={2}>
            <TextInput
              classNames={{
                input: classes.searchAreaInput,
              }}
            />
          </Grid.Col>
        </Grid>
      </Group>
      <Group justify="center" pos="absolute" w="100%" bottom={-40}>
        <Button
          size="compact-lg"
          px="xl"
          h={40}
          radius="xl"
          style={{ flexShrink: 0 }}
          onClick={() => push("/hotel/list")}
        >
          {t("Search Hotel")}
        </Button>
      </Group>
    </Stack>
  );
};

export default HotelSearch;
