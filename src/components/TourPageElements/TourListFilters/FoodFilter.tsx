import { Button, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const FoodFilter = () => {
  const t = useTranslations();

  const [value, setValue] = useState<"with" | "without">("with");

  return (
    <Menu>
      <Menu.Target>
        <Button variant="default" rightSection={<IconChevronDown size={16} />}>
          {t(value === "with" ? "With Food" : "Without Food")}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {[
          {
            label: "With Food",
            value: "with",
          },
          {
            label: "Without Food",
            value: "without",
          },
        ].map((item, i) => (
          <Menu.Item
            key={`item-${i}`}
            onClick={() => setValue(item.value as "with" | "without")}
          >
            {t(item.label)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default FoodFilter;
