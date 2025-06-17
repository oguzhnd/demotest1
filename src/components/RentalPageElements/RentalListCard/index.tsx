import { useRouter } from "@/i18n/navigation";
import { Button, Group, Paper, Stack } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import React, { FC } from "react";

const RentalListCard: FC<{
  id: string;
}> = ({ id }) => {
  const { push } = useRouter();

  return (
    <Paper p="sm" withBorder>
      <Stack h={100} justify="space-between">
        {id}
        <Group justify="flex-end">
          <Button
            size="xs"
            variant="light"
            rightSection={<IconChevronRight size={12} />}
            onClick={() => push(`/rental/detail/${id}`)}
          >
            Araç Detayları
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
};

export default RentalListCard;
