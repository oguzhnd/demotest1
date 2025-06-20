import { Button, Menu } from "@mantine/core";
import { IconArrowsSort, IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Sorting = () => {
  const t = useTranslations();

  const [value, setValue] = useState<"asc" | "desc">("desc");

  return (
    <Menu>
      <Menu.Target>
        <Button
          variant="default"
          leftSection={<IconArrowsSort size={16} />}
          rightSection={<IconChevronDown size={16} />}
        >
          {t(value === "asc" ? "Low to High" : "High to Low")}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {[
          {
            label: "Low to High",
            value: "asc",
          },
          {
            label: "High to Low",
            value: "desc",
          },
        ].map((item, i) => (
          <Menu.Item
            key={`item-${i}`}
            onClick={() => setValue(item.value as "asc" | "desc")}
          >
            {t(item.label)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default Sorting;
