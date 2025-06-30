import { Group, Paper, Skeleton, Stack } from "@mantine/core";
import { FC } from "react";

const RentalLoading: FC<{ ref?: (node: any) => void }> = ({ ref }) => {
  return (
    <Paper ref={ref} withBorder radius="md" p="md">
      <Stack>
        <Skeleton height={24} width="30%" />
        <Group w="100%" justify="space-between" wrap="nowrap">
          <Group w="100%" align="flex-start" wrap="nowrap">
            <Skeleton width={202} height={120} style={{ flexShrink: 0 }} />

            <Stack w="100%" h={120} justify="space-between">
              <Skeleton height={24} width={"70%"} />
              <Skeleton height={24} width={"50%"} />
            </Stack>
          </Group>

          <Skeleton height={120} width={160} />
        </Group>
      </Stack>
    </Paper>
  );
};

export default RentalLoading;
