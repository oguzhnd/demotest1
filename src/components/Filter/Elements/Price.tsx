import React, { FC, useState } from "react";
import FilterWrapper from "../FilterWrapper";
import { useTranslations } from "next-intl";
import { Group, NumberInput, RangeSlider, Stack } from "@mantine/core";

const PriceFilter: FC<{
  min: number;
  max: number;
}> = ({ max, min }) => {
  const t = useTranslations();

  const [value, setValue] = useState<[number, number]>([min || 0, max || 100]);

  return (
    <FilterWrapper label={t("Price")}>
      <Stack gap="xs">
        <Group gap={4} wrap="nowrap">
          <NumberInput
            value={value[0]}
            onChange={(v) => setValue([+v, value[1]])}
            size="xs"
            hideControls
          />
          <NumberInput
            value={value[1]}
            onChange={(v) => setValue([value[0], +v])}
            size="xs"
            hideControls
          />
        </Group>
        <RangeSlider
          min={min || 0}
          max={max || 100}
          step={0.05}
          value={value}
          onChange={setValue}
        />
      </Stack>
    </FilterWrapper>
  );
};

export default PriceFilter;
