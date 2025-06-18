import { useRouter } from "@/i18n/navigation";
import { Button, Grid, Group, Stack, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { FC, useCallback } from "react";
import classes from "../SearchArea.module.css";
import AirportInput from "../Inputs/AirportInput";
import { useForm } from "@mantine/form";
import HotelSeachInput from "../Inputs/HotelSearch";
import CheckDatePicker from "../Inputs/CheckDatePicker";
import RoomsAndGuestsInput from "../Inputs/RoomsAndGuests";
import CountrySelect from "../Inputs/Country";

const HotelSearch: FC<{
  compact?: boolean;
}> = ({ compact = false }) => {
  const t = useTranslations();

  const { push } = useRouter();

  const form = useForm<{
    checkIn: Date | null;
    checkOut: Date | null;
    passengers: {
      adult: number;
      child: number;
      baby: number;
    };
    class: "economy" | "business";
  }>({
    initialValues: {
      checkIn: new Date(),
      checkOut: new Date(),
      passengers: {
        adult: 1,
        child: 0,
        baby: 0,
      },
      class: "economy",
    },
  });

  const handleSubmit = useCallback(() => {}, []);

  const Parent = compact ? Group : Stack;

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Parent
        pos="relative"
        wrap="nowrap"
        pb={compact ? 0 : 8}
        gap={8}
        align={compact ? "flex-end" : undefined}
      >
        <Stack w="100%" gap={8}>
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
            <Grid.Col span={2}>
              <HotelSeachInput
                compact={compact}
                label="City, Hotel name or Location"
              />
            </Grid.Col>
            <Grid.Col span={4}>
              <CheckDatePicker
                compact={compact}
                checkIn={form.getValues().checkIn}
                checkOut={form.getValues().checkOut}
                onChange={(dates) => {
                  form.setFieldValue("checkIn", dates[0]);
                  form.setFieldValue("checkOut", dates[1]);
                }}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <RoomsAndGuestsInput compact={compact} />
            </Grid.Col>
            <Grid.Col span={2}>
              <CountrySelect compact={compact} label="Country" />
            </Grid.Col>
          </Grid>
        </Stack>
        <Stack h={compact ? 60.59 : "auto"} justify="center">
          <Group
            justify="center"
            pos={compact ? "relative" : "absolute"}
            w={compact ? "auto" : "100%"}
            bottom={compact ? undefined : -40}
          >
            <Button
              type="submit"
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
      </Parent>
    </form>
  );
};

export default HotelSearch;
