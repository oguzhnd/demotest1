import { Group, Paper, Skeleton, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FC } from "react";

const BlogLoading: FC<{ ref?: (node: any) => void }> = ({ ref }) => {
  return (
    <Paper ref={ref} withBorder radius="md">
      <Stack gap={0}>
        <Skeleton width="100%" height={200} style={{ flexShrink: 0 }} />
        <Stack p="md" gap={"xs"}>
          <Skeleton width="70%" height={20} />
          <Skeleton width="50%" height={20} />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default BlogLoading;
