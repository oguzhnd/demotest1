import FilterWrapper from "@/components/Filter/FilterWrapper";
import { RangeSlider, Stack, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";

const HoursFilter = () => {
  const t = useTranslations();

  return (
    <FilterWrapper label={t("Hours")}>
      <Stack>
        <Stack gap={0}>
          <Text size="sm">{t("Departure")}</Text>
          <RangeSlider
            defaultValue={[20, 60]}
            marks={[
              { value: 20 },
              { value: 50 },
              { value: 80 },
            ]}
          />
        </Stack>
        <Stack gap={0}>
          <Text size="sm">{t("Landing")}</Text>
          <RangeSlider
            defaultValue={[20, 60]}
            marks={[
              { value: 20 },
              { value: 50 },
              { value: 80 },
            ]}
          />
        </Stack>
      </Stack>
    </FilterWrapper>
  );
};

export default HoursFilter;
