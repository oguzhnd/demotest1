import { Group, Paper, Skeleton, Stack } from "@mantine/core";
import { FC } from "react";

const FlightLoading: FC<{ ref?: (node: any) => void }> = ({ ref }) => {
  return (
    <Paper ref={ref} withBorder radius="md" px={32} py={20}>
      <Group wrap="nowrap" gap={32}>
        <Skeleton width={500} height={77.89} style={{ flexShrink: 0 }} />
        <Skeleton width={200} height={36} />
        <Skeleton width="100%" height={36} />
      </Group>
    </Paper>
  );
};

export default FlightLoading;
