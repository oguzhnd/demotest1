import { Button, Stack, TextInput } from "@mantine/core";
import React, { useCallback } from "react";
import FloatingLabelTextInput from "../@FormElements/FloatingLabelTextInput";
import FloatingLabelPasswordInput from "../@FormElements/FloatingLabelPasswordInput";
import { useTranslations } from "next-intl";
import { useForm } from "@mantine/form";
import { useRouter } from "@/i18n/navigation";
import { useModalManager } from "@/store/managers/modal";

const SignInContent = () => {
  const t = useTranslations();

  const { closeModal } = useModalManager();

  const { push } = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = useCallback(() => {
    push("/account");
    closeModal("accountModal");
  }, []);

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="sm">
        <FloatingLabelTextInput
          label={t("E-Mail")}
          {...form.getInputProps("email")}
        />
        <FloatingLabelPasswordInput
          label={t("Password")}
          {...form.getInputProps("password")}
        />
        <Button type="submit" color="green">
          {t("Sign In")}
        </Button>
      </Stack>
    </form>
  );
};

export default SignInContent;
