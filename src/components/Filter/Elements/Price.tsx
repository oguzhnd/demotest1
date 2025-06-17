import React from "react";
import FilterWrapper from "../FilterWrapper";
import { useTranslations } from "next-intl";
import { RangeSlider } from "@mantine/core";

const PriceFilter = () => {
  const t = useTranslations();

  return (
    <FilterWrapper label={t("Price")}>
      <RangeSlider
        defaultValue={[20, 60]}
        marks={[{ value: 20 }, { value: 50 }, { value: 80 }]}
      />
    </FilterWrapper>
  );
};

export default PriceFilter;
