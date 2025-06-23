import FilterWrapper from "@/components/Filter/FilterWrapper";
import { RangeSlider, Stack, Text } from "@mantine/core";
import { GetInputPropsReturnType } from "@mantine/form/lib/types";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

const HoursFilter: FC<
  GetInputPropsReturnType & {
    dHours: {
      min: number;
      max: number;
    };
  }
> = ({ dHours, value, onChange }) => {
  const t = useTranslations();

  return (
    <FilterWrapper label={t("Hours")}>
      <Stack>
        {value.departure && (
          <Stack gap={0}>
            <Text size="sm">{t("Departure")}</Text>
            <RangeSlider
              value={[
                value?.departure?.min || dHours?.min,
                value?.departure?.max || dHours?.max,
              ]}
              max={dHours?.max}
              min={dHours?.min}
            />
          </Stack>
        )}
        {/* <Stack gap={0}>
          <Text size="sm">{t("Landing")}</Text>
          <RangeSlider
            defaultValue={[20, 60]}
            marks={[
              { value: 20 },
              { value: 50 },
              { value: 80 },
            ]}
          />
        </Stack> */}
      </Stack>
    </FilterWrapper>
  );
};

export default HoursFilter;
