import React, { FC } from "react";
import FilterWrapper from "../FilterWrapper";
import { IconSearch, TablerIcon } from "@tabler/icons-react";
import { TextInput } from "@mantine/core";

const SearchFilter: FC<{
  label: string;
  icon?: TablerIcon;
}> = ({ label, icon }) => {
  return (
    <FilterWrapper label={label} icon={icon} alwaysOn>
      <TextInput leftSection={<IconSearch size={16} />} />
    </FilterWrapper>
  );
};

export default SearchFilter;
