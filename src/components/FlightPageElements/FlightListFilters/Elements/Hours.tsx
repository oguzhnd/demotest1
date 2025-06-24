import FilterWrapper from "@/components/Filter/FilterWrapper";
import { RangeSlider, Stack, Text } from "@mantine/core";
import { GetInputPropsReturnType } from "@mantine/form/lib/types";
import { useTranslations } from "next-intl";
import React, { FC, useEffect } from "react";

const HoursFilter: FC<
  GetInputPropsReturnType & {
    min: number;
    max: number;
  }
> = ({ max, min, value, onChange }) => {
  const t = useTranslations();

  useEffect(() => {
    onChange([min, max]);
  }, [min, max]);

  return (
    <FilterWrapper label={t("Hours")}>
      <Stack gap={0}>
        <RangeSlider
          value={value}
          step={1}
          max={max || 1}
          min={min || 0}
          label={e => `${e} ${t("Hour")}`}
          onChange={onChange}
        />
      </Stack>
    </FilterWrapper>
  );
};

export default HoursFilter;
