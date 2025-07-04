import CheckboxFilter from "@/components/Filter/Elements/Checkbox";
import PriceFilter from "@/components/Filter/Elements/Price";
import { useTourStore } from "@/store/products/tour";
import { Divider, Stack } from "@mantine/core";
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

  return (
    <Stack gap={0}>
      <CheckboxFilter
        label={t("Tour Categories")}
        options={[
          {
            value: "Yurtdışı Turları",
            label: "Yurtdışı Turları",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Tour Regions")}
        options={[
          {
            value: "Avrupa Turları",
            label: "Avrupa Turları",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Tour Types")}
        options={[
          {
            value: "Ankara Çıkışlı Turları",
            label: "Ankara Çıkışlı Turları",
          },
        ]}
      />
      <Divider />
      <CheckboxFilter
        label={t("Tour Period")}
        options={[
          {
            value: "2025 Kasım Ara Tatil",
            label: "2025 Kasım Ara Tatil",
          },
        ]}
      />
      <Divider />
      <PriceFilter max={100} min={0} value={[0, 100]} onChange={() => {}} />
      <Divider />
      <CheckboxFilter
        label={t("Tour Duration")}
        options={[
          {
            value: "1-4 Gün",
            label: "1-4 Gün",
          },
        ]}
      />
    </Stack>
  );
};

export default TourListFilters;
