import { Button, Container, Group, Paper, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconUser } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const LoginWarning = () => {
  const t = useTranslations();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const Parent = matchesSm ? Stack : Group

  return (
    <Container size="xl" w="100%" pb={20}>
      <Paper p="sm" bg="yellow.1" radius="md">
        <Parent justify="space-between" align={matchesSm ? "center" : "stretch"}>
          <Parent gap="xs" align="center">
            <IconUser size={20} />
            <Text size="sm" fw={500} lh={1} ta={matchesSm ? "center" : "left"}>
              {t("Special discounted prices for members")}
            </Text>
            <Text size="xs" c="gray.7" lh={1} ml="xs" ta={matchesSm ? "center" : "left"}>
              {t("You will see lower prices when you log in")}
            </Text>
          </Parent>

          <Button
            color="gray.5"
            c="dark"
            size="xs"
            radius="xl"
            variant="outline"
          >
            {t("Sign In")}
          </Button>
        </Parent>
      </Paper>
    </Container>
  );
};

export default LoginWarning;
