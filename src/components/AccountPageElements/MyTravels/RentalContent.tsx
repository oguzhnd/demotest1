import { Box, Button, Stack, Text, ThemeIcon } from "@mantine/core";
import React, { FC } from "react";
import Filters from "./Filters";
import { useTranslations } from "next-intl";
import { IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "@/i18n/navigation";

const RentalContent: FC<{
  spritePos: string;
}> = ({ spritePos }) => {
  const t = useTranslations();

  const { push } = useRouter();

  return (
    <Stack>
      <Filters />

      <Stack align="center" gap="xs">
        <ThemeIcon size={80} radius={80} color="gray" variant="light">
          <Box
            w={52}
            h={40}
            style={{
              display: "inline-block",
              backgroundImage: "url('/icon_sprite.png')",
              backgroundSize: "260px 450px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: spritePos,
            }}
          />
        </ThemeIcon>
        <Text size="sm" fw={500}>
          {t("You haven't made any reservations yet")}
        </Text>
        <Button
          rightSection={<IconChevronRight size={16} />}
          onClick={() => push("/rental")}
        >
          {t("Search Rental Car")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default RentalContent