import { Checkbox, Stack } from "@mantine/core";
import { TablerIcon } from "@tabler/icons-react";
import { FC } from "react";
import FilterWrapper from "../FilterWrapper";

const CheckboxFilter: FC<{
  label: string;
  icon?: TablerIcon;
  options: {
    value: string;
    label: string;
    group?: string;
  }[];
}> = ({ label, icon, options }) => {
  return (
    <FilterWrapper label={label} icon={icon}>
      <Checkbox.Group>
        <Stack gap={6}>
          {options.map((opt, i) => (
            <Checkbox key={`opt-${i}`} value={opt.value} label={opt.label} />
          ))}
        </Stack>
      </Checkbox.Group>
    </FilterWrapper>
  );
};

export default CheckboxFilter;
