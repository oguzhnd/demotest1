import { useRouter } from "@/i18n/navigation";
import { useSearchStore } from "@/store/search";
import { useLoading } from "@/utils/hooks/useLoading";
import { xiorInstance } from "@/utils/xior";
import { Button, Grid, Group, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import { isUndefined } from "lodash";
import { useLocale, useTranslations } from "next-intl";
import { FC, useCallback, useEffect, useState } from "react";
import CheckDatePicker from "../Inputs/CheckDatePicker";
import CountrySelect from "../Inputs/Country";
import HotelSeachInput, { SearchHotelType } from "../Inputs/HotelSearch";
import RoomsAndGuestsInput from "../Inputs/RoomsAndGuests";

export interface HotelSearchFormProps {
  hotel: SearchHotelType | undefined;
  checkIn: Date | null;
  checkOut: Date | null;
  rooms: {
    adult: number;
    child: number[];
  }[];
  country: string;
}

const HotelSearch: FC<{
  compact?: boolean;
}> = ({ compact = false }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const [inputsLoading, setInputsLoading] = useState(true);
  const [loading, startLoading, stopLoading] = useLoading();

  const { hotelSearch, setSearch } = useSearchStore();

  const form = useForm<HotelSearchFormProps>({
    initialValues: {
      // {
      //   id: "60208",
      //   type: "City",
      //   name: "Antalya",
      //   country: "Turkey",
      //   countryCode: "TR",
      //   city: "Antalya",
      //   latitude: "36.90812",
      //   longitude: "30.69556",
      // }
      hotel: undefined,
      checkIn: new Date(),
      checkOut: new Date(),
      rooms: [
        {
          adult: 1,
          child: [0],
        },
      ],
      country: "TR",
    },

    validate: {
      hotel: (value) => (isUndefined(value) ? true : false),
    },
  });

  const handleSubmit = useCallback(
    async (values: HotelSearchFormProps) => {
      startLoading();
      try {
        console.log(values);

        setSearch("hotelSearch", values);

        if (values.hotel?.type === "City") {
          push("/hotel/list");
        } else if (values.hotel?.type === "Hotel") {
          push(`/hotel/detail/${values.hotel.id}`);
          // setBookingHotel(res.hotelData[0])
        }
      } catch (err) {
        console.error(err);
      } finally {
        stopLoading();
      }
    },
    [xiorInstance]
  );

  const updateSearchForm = useCallback(() => {
    form.setValues(hotelSearch);
    setInputsLoading(false);
  }, [hotelSearch]);

  useEffect(() => {
    updateSearchForm();
  }, [hotelSearch]);

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
            maw="100%"
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
                base: 10,
                sm: 2,
              }}
            >
              <HotelSeachInput
                compact={compact}
                label="City, Hotel name or Location"
                form={form}
                disabled={inputsLoading}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 10,
                sm: 4,
              }}
            >
              <CheckDatePicker
                compact={compact}
                checkIn={form.getValues().checkIn}
                checkOut={form.getValues().checkOut}
                onChange={(dates) => {
                  form.setFieldValue("checkIn", dates[0]);
                  form.setFieldValue("checkOut", dates[1]);
                }}
                disabled={inputsLoading}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 10,
                sm: 2,
              }}
            >
              <RoomsAndGuestsInput
                compact={compact}
                form={form}
                disabled={inputsLoading}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                base: 10,
                sm: 2,
              }}
            >
              <CountrySelect
                compact={compact}
                label="Country"
                disabled={inputsLoading}
              />
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
              loading={loading}
              type="submit"
              size="compact-lg"
              px="xl"
              h={40}
              radius="xl"
              style={{ flexShrink: 0 }}
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
