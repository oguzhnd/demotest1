import { Button, Stack, TextInput } from "@mantine/core";
import React, { useCallback } from "react";
import FloatingLabelTextInput from "../@FormElements/FloatingLabelTextInput";
import FloatingLabelPasswordInput from "../@FormElements/FloatingLabelPasswordInput";
import { useTranslations } from "next-intl";
import { useForm } from "@mantine/form";
import { useRouter } from "@/i18n/navigation";
import { useModalManager } from "@/store/managers/modal";
import { useGlobalStore } from "@/store/global";
import { useAccountStore } from "@/store/account";

interface FormProps {
  email: string;
  password: string;
}

const SignInContent = () => {
  const t = useTranslations();

  const { login } = useAccountStore();
  const { closeModal } = useModalManager();

  const { push } = useRouter();

  const form = useForm<FormProps>({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = useCallback(async (values: FormProps) => {
    try {
      await login(values);

      push("/account");
    } catch (err) {
      console.error(err);
    } finally {
      closeModal("accountModal");
    }
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
