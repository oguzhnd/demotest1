import { Button, Checkbox, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";
import React, { useCallback } from "react";
import FloatingLabelTextInput from "../@FormElements/FloatingLabelTextInput";
import FloatingLabelPasswordInput from "../@FormElements/FloatingLabelPasswordInput";
import { useRouter } from "next/router";
import { useAccountStore } from "@/store/account";
import { useModalManager } from "@/store/managers/modal";

interface FormProps {
  email: string;
  password: string;
  confirm: boolean;
}

const SignUpContent = () => {
  const t = useTranslations();

  const { login } = useAccountStore();
  const { closeModal } = useModalManager();

  const { push } = useRouter();

  const form = useForm<FormProps>({
    initialValues: {
      email: "",
      password: "",
      confirm: false,
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
        <Checkbox
          label={t(
            "I would like to be informed about discounts and campaigns within the scope of the Consent Text and I give my explicit consent to the processing of my personal data for marketing purposes"
          )}
          {...form.getInputProps("confirm", { type: "checkbox" })}
        />
        <Button
          type="submit"
          color="green"
          disabled={!form.getValues().confirm}
        >
          {t("Sign Up")}
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpContent;
