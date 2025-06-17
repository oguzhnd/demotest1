import { Button, Container, Group, Paper, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const LoginWarning = () => {
  const t = useTranslations();

  return (
    <Container size="xl" w="100%" pb={20}>
      <Paper p="sm" bg="yellow.1" radius="md">
        <Group justify="space-between">
          <Group gap="xs">
            <IconUser size={20} />
            <Text size="sm" fw={500} lh={1}>
              {t("Special discounted prices for members")}
            </Text>
            <Text size="xs" c="gray.7" lh={1} ml="xs">
              {t("You will see lower prices when you log in")}
            </Text>
          </Group>
          <Button
            color="gray.5"
            c="dark"
            size="xs"
            radius="xl"
            variant="outline"
          >
            {t("Sign In")}
          </Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default LoginWarning;
