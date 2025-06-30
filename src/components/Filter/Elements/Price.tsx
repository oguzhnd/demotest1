import React, { FC, useEffect, useState } from "react";
import FilterWrapper from "../FilterWrapper";
import { useTranslations } from "next-intl";
import { Group, NumberInput, RangeSlider, Stack } from "@mantine/core";
import { GetInputPropsReturnType } from "@mantine/form/lib/types";

const PriceFilter: FC<
  {
    label?: string
    min: number;
    max: number;
  } & GetInputPropsReturnType
> = ({ label, max, min, value, onChange }) => {
  const t = useTranslations();

  useEffect(() => {
    onChange([min, max]);
  }, [min, max]);

  return (
    <FilterWrapper label={label || t("Price")}>
      <Stack gap="xs">
        <Group gap={4} wrap="nowrap">
          <NumberInput
            value={value[0]}
            onChange={(v) => onChange([+v, value[1]])}
            size="xs"
            hideControls
          />
          <NumberInput
            value={value[1]}
            onChange={(v) => onChange([value[0], +v])}
            size="xs"
            hideControls
          />
        </Group>
        <RangeSlider
          min={min || 0}
          max={max || 100}
          step={0.05}
          value={value || [0, 100]}
          onChange={onChange}
        />
      </Stack>
    </FilterWrapper>
  );
};

export default PriceFilter;
