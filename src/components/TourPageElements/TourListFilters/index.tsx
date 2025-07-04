import { useTourStore } from "@/store/products/tour";
import { Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";

export interface TourListFiltersForm {}

const TourListFilters = () => {
  const t = useTranslations();

  const { filterOpt, setTourFilters } = useTourStore();

  const form = useForm<TourListFiltersForm>({
    initialValues: {},

    onValuesChange: (values) => {
      setTourFilters(values);
    },
  });

  return <Stack gap={0}></Stack>;
};

export default TourListFilters;
