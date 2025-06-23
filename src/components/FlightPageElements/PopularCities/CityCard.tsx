import { Anchor, Avatar, Box, Group, Paper, Stack, Text } from "@mantine/core";
import { FC } from "react";

import { IconChevronRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { PopularCityType } from ".";
import classes from "../Flight.module.css";
import { useRouter } from "@/i18n/navigation";

const CityCard: FC<
  PopularCityType & {
    isOpen: boolean;
    setOpenedCard: () => void;
  }
> = ({ image, name, isOpen, setOpenedCard }) => {
  const t = useTranslations();

  const { push } = useRouter();

  return (
    <Paper
      mx={6}
      w={isOpen ? 300 : 128}
      h="100%"
      className={classes.selectedCityCard}
      onMouseEnter={setOpenedCard}
      onClick={() => push("/city/1")}
    >
      <Group
        gap="xs"
        wrap="nowrap"
        bg={isOpen ? "blue.0" : undefined}
        style={{ borderRadius: 150 }}
      >
        <Stack align="center" gap="xs">
          <Box
            style={{
              width: 128,
              height: 128,
              background:
                "linear-gradient(to right, var(--mantine-color-pink-5), var(--mantine-color-yellow-5), var(--mantine-color-green-5), var(--mantine-color-blue-5))",
              borderRadius: "50%",
              padding: 4,
              flexShrink: 0,
            }}
          >
            <Avatar w={120} h={120} src={image} radius="50%" />
          </Box>
          {!isOpen && (
            <Text size="sm" ta="center" truncate maw={120}>
              {name}
            </Text>
          )}
        </Stack>
        {isOpen && (
          <Stack w={164} gap="xs">
            <Stack gap={0} w="100%" pr={20}>
              <Text size="sm" fw={500} lh={1} truncate>
                {name}
              </Text>
            </Stack>

            <Group gap={4} c="blue.7">
              <Anchor size="sm" lh={1}>
                {t("See City")}
              </Anchor>
              <IconChevronRight size={14} />
            </Group>
          </Stack>
        )}
      </Group>
    </Paper>
  );
};

export default CityCard;
