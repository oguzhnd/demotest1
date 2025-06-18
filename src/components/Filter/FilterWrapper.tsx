import { Box, Collapse, Group, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, TablerIcon } from "@tabler/icons-react";
import React, { FC } from "react";

const FilterWrapper: FC<{
  icon?: TablerIcon;
  label: string;
  alwaysOn?: boolean;
  children: React.ReactNode;
}> = ({ label, icon: Icon, alwaysOn = false, children }) => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <Stack gap={0}>
      <Group
        p="sm"
        justify="space-between"
        onClick={() => (alwaysOn ? {} : toggle())}
        style={{ cursor: alwaysOn ? undefined : "pointer" }}
      >
        <Group gap={8}>
          {Icon && <Icon size={16} />}
          <Text size="sm" fw={500}>
            {label}
          </Text>
        </Group>

        {!alwaysOn && (
          <IconChevronDown
            size={16}
            style={{
              transform: !opened ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform .2s ease",
            }}
          />
        )}
      </Group>

      <Collapse in={opened}>
        <Box px="sm" pb="sm" pt={4}>
          {children}
        </Box>
      </Collapse>
    </Stack>
  );
};

export default FilterWrapper;
