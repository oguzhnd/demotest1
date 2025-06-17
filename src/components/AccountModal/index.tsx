import { useModalManager } from "@/store/managers/modal";
import { Anchor, Divider, Group, Modal, Stack, Text } from "@mantine/core";
import { useTranslations } from "next-intl";
import React, { useCallback, useState } from "react";
import SignInContent from "./SignInContent";
import SignUpContent from "./SignUpContent";

const AccountModal = () => {
  const t = useTranslations();

  const { modals, closeModal } = useModalManager();

  const [modalType, setModalType] = useState("signin");

  const handleClose = useCallback(() => {
    closeModal("accountModal");
  }, []);

  return (
    <Modal
      opened={modals.accountModal.opened}
      onClose={handleClose}
      centered
      size="sm"
      title={
        <Text size="lg" fw={500}>
          {modalType === "signin" ? t("Sign In") : t("Sign Up")}
        </Text>
      }
    >
      <Stack>
        {modalType === "signin" ? <SignInContent /> : <SignUpContent />}

        <Divider />
        {modalType === "signin" ? (
          <Group gap={8} justify="center">
            <Text size="sm">{t("If you are not a member")},</Text>
            <Anchor size="sm" onClick={() => setModalType("signup")}>
              {t("Sign Up")}
            </Anchor>
          </Group>
        ) : (
          <Group gap={8} justify="center">
            <Text size="sm">{t("If you have membership")},</Text>
            <Anchor size="sm" onClick={() => setModalType("signin")}>
              {t("Sign In")}
            </Anchor>
          </Group>
        )}
      </Stack>
    </Modal>
  );
};

export default AccountModal;
