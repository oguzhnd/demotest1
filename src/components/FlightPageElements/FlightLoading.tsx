import { Group, Paper, Skeleton, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";

const FlightLoading: FC<{ ref?: (node: any) => void }> = ({ ref }) => {
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Paper
      ref={ref}
      withBorder
      radius="md"
      px={matchesSm ? "md" : 32}
      py={matchesSm ? "md" : 20}
    >
      <Parent wrap="nowrap" gap={matchesSm ? 16 : 32}>
        <Skeleton
          width={matchesSm ? "100%" : 500}
          height={77.89}
          style={{ flexShrink: 0 }}
        />
        <Group gap={32} wrap="nowrap">
          <Skeleton width={matchesSm ? 50 : 200} height={36} />
          <Skeleton width="100%" height={36} />
        </Group>
      </Parent>
    </Paper>
  );
};

export default FlightLoading;
