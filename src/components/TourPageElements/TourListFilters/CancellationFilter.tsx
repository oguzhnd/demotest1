import { Button, Menu } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const CancellationFilter = () => {
  const t = useTranslations();

  const [value, setValue] = useState<"cancel" | "non-cancel">("cancel");

  return (
    <Menu>
      <Menu.Target>
        <Button variant="default" rightSection={<IconChevronDown size={16} />}>
          {t(value === "cancel" ? "Cancelable" : "Non-Cancellable")}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        {[
          {
            label: "Cancelable",
            value: "cancel",
          },
          {
            label: "Non-Cancellable",
            value: "non-cancel",
          },
        ].map((item, i) => (
          <Menu.Item
            key={`item-${i}`}
            onClick={() =>
              setValue(item.value as "cancel" | "non-cancel")
            }
          >
            {t(item.label)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default CancellationFilter;
