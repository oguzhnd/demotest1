import { Group, Paper, Skeleton, Stack } from "@mantine/core";
import { FC } from "react";

const HotelLoading: FC<{ ref?: (node: any) => void }> = ({ ref }) => {
  return (
    <Paper ref={ref} withBorder radius="md">
      <Group wrap="nowrap" gap={0}>
        <Skeleton width={300} height={200} style={{ flexShrink: 0 }} />
        <Stack w="100%" h={200} p="md" justify="space-between">
          <Stack gap={4}>
            <Skeleton height={12} width="70%" />
            <Skeleton height={8} width="40%" />
            <Skeleton height={8} width="40%" />
          </Stack>

          <Group justify="space-between" align="flex-end">
            <Skeleton height={40} width={40} />

            <Skeleton height={60} width={100} />
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
};

export default HotelLoading;
