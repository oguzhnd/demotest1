import { useRouter } from "@/i18n/navigation";
import { Button, Grid, Group, Stack, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React, { FC, useCallback, useEffect, useState } from "react";
import classes from "../SearchArea.module.css";
import AirportInput from "../Inputs/AirportInput";
import PickupLocation from "../Inputs/PickupLocation";
import RentalDatesPicker from "../Inputs/RentalDates";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { useLoading } from "@/utils/hooks/useLoading";
import { useSearchStore } from "@/store/search";

export interface RentalSearchForm {
  pickupLocation?: {
    name: string;
    id: string;
  };
  dropoffLocation?: {
    name: string;
    id: string;
  };
  pickupDate: Date | null;
  pickupTime: string;
  deliveryDate: Date | null;
  deliveryTime: string;
}

const RentalSearch: FC<{
  compact?: boolean;
}> = ({ compact = false }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const [inputsLoading, setInputsLoading] = useState(true);
  const [loading, startLoading, stopLoading] = useLoading();

  const { rentalSearch, setSearch } = useSearchStore();

  const form = useForm<RentalSearchForm>({
    initialValues: {
      pickupLocation: {
        name: "İstanbul-Sabiha Gökçen Havalimanı (SAW)",
        id: "30",
      },
      dropoffLocation: {
        name: "İstanbul-Sabiha Gökçen Havalimanı (SAW)",
        id: "30",
      },
      pickupDate: new Date(),
      pickupTime: "10:00",
      deliveryDate: new Date(),
      deliveryTime: "10:00",
    },
  });

  const handleSubmit = useCallback(
    async (values: RentalSearchForm) => {
      try {
        startLoading();

        console.log(values);

        setSearch("rentalSearch", values);
      } catch (err) {
        console.error(err);
      } finally {
        stopLoading();

        push("/rental/list");
      }
    },
    [locale]
  );

  const updateSearchForm = useCallback(() => {
    form.setValues(rentalSearch);
    setInputsLoading(false);
  }, [rentalSearch]);

  useEffect(() => {
    updateSearchForm();
  }, [rentalSearch]);

  const Parent = matchesSm ? Stack : compact ? Group : Stack;

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Parent
        pos="relative"
        wrap="nowrap"
        pb={compact ? 0 : 8}
        gap={8}
        align={compact ? (matchesSm ? "stretch" : "flex-end") : undefined}
      >
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
          <Grid.Col
            span={{
              base: 12,
              sm: 4,
            }}
          >
            <PickupLocation
              compact={compact}
              label="Pickup Location"
              {...form.getInputProps("pickupLocation")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 6,
            }}
          >
            <RentalDatesPicker compact={compact} form={form} />
          </Grid.Col>
        </Grid>
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
            >
              {t("Search Car")}
            </Button>
          </Group>
        </Stack>
      </Parent>
    </form>
  );
};

export default RentalSearch;
