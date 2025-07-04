import { useRouter } from "@/i18n/navigation";
import { useSearchStore } from "@/store/search";
import { useLoading } from "@/utils/hooks/useLoading";
import { Button, Checkbox, CheckIcon, Grid, Group, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { useLocale, useTranslations } from "next-intl";
import { FC, useCallback, useEffect, useState } from "react";
import PickupLocation from "../Inputs/PickupLocation";
import RentalDatesPicker from "../Inputs/RentalDates";
import TourLocation from "../Inputs/TourLocation";
import TourDatePicker from "../Inputs/TourDatePicker";
import TourTravellersInput from "../Inputs/TourTravellers";

export interface TourSearchForm {
  tour: string | undefined;
  date: Date | null;
  passengers: {
    adult: number;
    child: number;
    baby: number;
  };
}

const TourSearch: FC<{
  compact?: boolean;
}> = ({ compact = false }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const [inputsLoading, setInputsLoading] = useState(true);
  const [loading, startLoading, stopLoading] = useLoading();

  const { tourSearch, setSearch } = useSearchStore();

  const form = useForm<TourSearchForm>({
    initialValues: {
      tour: undefined,
      date: new Date(),
      passengers: {
        adult: 1,
        child: 0,
        baby: 0,
      },
    },
  });

  const handleSubmit = useCallback(
    async (values: TourSearchForm) => {
      startLoading();
      try {
        console.log(values);

        setSearch("rentalSearch", values);
      } catch (err) {
        console.error(err);
      } finally {
        stopLoading();

        push("/tour/list");
      }
    },
    [locale]
  );

  const updateSearchForm = useCallback(() => {
    form.setValues(tourSearch);
    setInputsLoading(false);
  }, [tourSearch]);

  useEffect(() => {
    updateSearchForm();
  }, [tourSearch]);

  const Parent = matchesSm ? Stack : compact ? Group : Stack;

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Parent
        pos="relative"
        wrap="nowrap"
        pb={compact ? 0 : 8}
        gap={20}
        align={compact ? (matchesSm ? "stretch" : "flex-end") : undefined}
      >
        <Stack w="100%" gap={8}>
          <Grid
            w="100%"
            columns={12}
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
                sm: 6,
              }}
            >
              <TourLocation
                compact={compact}
                label="Location, Category, Region"
                {...form.getInputProps("tour")}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                sm: 3,
              }}
            >
              <TourDatePicker form={form} compact={compact} />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 12,
                sm: 3,
              }}
            >
              <TourTravellersInput form={form} compact={compact} />
            </Grid.Col>
          </Grid>
        </Stack>
        <Stack h={compact ? (matchesSm ? 40 : 60.59) : "auto"} justify="center">
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
              {t("Search Tour")}
            </Button>
          </Group>
        </Stack>
      </Parent>
    </form>
  );
};

export default TourSearch;
