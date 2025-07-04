"use client"

import { useRouter } from "@/i18n/navigation";
import { Button, Center, Image, Stack, Text, ThemeIcon } from "@mantine/core";
import { useTranslations } from "next-intl";
import React from "react";

const PageNotFound = () => {
  const t = useTranslations();

  const { push } = useRouter()

  return (
    <Center mih="100vh">
      <Stack align="center" gap="lg">
        <Image w="100%" maw={300} src="/page_not_found.svg" />
        <Text size="lg" fw={500}>{t("Page Not Found")}</Text>
        <Button onClick={() => push("/")}>
          {t("Back to home page")}
        </Button>
      </Stack>
    </Center>
  );
};

export default PageNotFound;
