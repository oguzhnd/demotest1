import { Button, Group } from "@mantine/core";
import { IconCalendarClock, IconCancel, IconClock } from "@tabler/icons-react";
import { concat, omit, omitBy, without } from "lodash";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Filters = () => {
  const t = useTranslations();

  const [value, setValue] = useState<string[]>([]);

  const filters = [
    {
      value: "expected",
      label: "Expected",
      icon: IconClock,
    },
    {
      value: "passed",
      label: "Date Passed",
      icon: IconCalendarClock,
    },
    {
      value: "cancelled",
      label: "Cancelled",
      icon: IconCancel,
    },
  ];

  return (
    <Group gap={6}>
      {filters.map(({ icon: Icon, label, value: btnValue }, i) => {
        const isSelected = value.includes(btnValue);

        return (
          <Button
            key={`filter-${i}`}
            leftSection={<Icon size={14} />}
            size="compact-sm"
            color="green"
            variant={isSelected ? "light" : "default"}
            onClick={() =>
              setValue(
                (isSelected
                  ? without(value, btnValue)
                  : concat(value, btnValue)) as string[]
              )
            }
          >
            {t(label)}
          </Button>
        );
      })}
    </Group>
  );
};

export default Filters;
