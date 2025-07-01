import { Group, Paper, Skeleton, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";

const RentalLoading: FC<{ ref?: (node: any) => void }> = ({ ref }) => {
  const matchesSm = useMediaQuery("(max-width: 48em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Paper ref={ref} withBorder radius="md" p="md">
      <Stack gap="xs"  align={matchesSm ? "center" : undefined}>
        <Skeleton height={24} width="30%" />
        <Parent w="100%" justify="space-between" align={matchesSm ? "center" : undefined} wrap="nowrap">
          <Parent w="100%"  align={matchesSm ? "center" : "flex-start"} wrap="nowrap">
            <Skeleton
              width={matchesSm ? "60%" : 202}
              height={120}
              style={{ flexShrink: 0 }}
            />

            <Stack
              w="100%"
              h={matchesSm ? undefined : 120}
              justify="space-between"
               align={matchesSm ? "center" : undefined}
            >
              <Skeleton height={24} width={"70%"} />
              <Skeleton height={24} width={"50%"}  />
            </Stack>
          </Parent>

          {matchesSm && (
            <Skeleton height={98} width={matchesSm ? "100%" : 160} />
          )}
          <Skeleton
            height={matchesSm ? 34 : 120}
            width={matchesSm ? "100%" : 160}
          />
        </Parent>
      </Stack>
    </Paper>
  );
};

export default RentalLoading;
