import FloatingLabelSelect from "@/components/@FormElements/FloatingLabelSelect.tsx";
import FloatingLabelTextInput from "@/components/@FormElements/FloatingLabelTextInput";
import { useModalManager } from "@/store/managers/modal";
import {
  Button,
  Checkbox,
  Group,
  Input,
  Modal,
  Select,
  Stack,
  Tabs,
  Text,
  TextInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React, { useCallback, useRef, useState } from "react";
import { IMaskInput } from "react-imask";

const QueryTransactionModal = () => {
  const t = useTranslations();

  const { modals, closeModal } = useModalManager();

  const [activeTab, setActiveTab] = useState<string | null>("hotel");
  const [value, setValue] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const handleClose = useCallback(() => {
    closeModal("queryTransaction");
  }, []);

  return (
    <Modal
      opened={modals.queryTransaction.opened}
      onClose={handleClose}
      title={t("Query Transaction")}
    >
      <Stack gap={8}>
        <Tabs
          variant="outline"
          value={activeTab}
          onChange={(tab) => {
            setActiveTab(tab);
            setValue("");
          }}
        >
          <Tabs.List mb={8}>
            <Tabs.Tab value="hotel">{t("Hotel")}</Tabs.Tab>
            <Tabs.Tab value="flight">{t("Flight")}</Tabs.Tab>
            <Tabs.Tab value="rental">{t("Car Rental")}</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="hotel">
            <TextInput
              label={t("PNR Number")}
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
          </Tabs.Panel>
          <Tabs.Panel value="flight">
            <TextInput
              label={t("Reservation Number")}
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
          </Tabs.Panel>
          <Tabs.Panel value="rental">
            <TextInput
              label={t("Reservation Number")}
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
          </Tabs.Panel>
        </Tabs>

        {isEmail ? (
          <TextInput label={t("E-Mail")} />
        ) : (
          <Group wrap="nowrap" gap={4} align="flex-start">
            <Select
              w={100}
              maw="100%"
              style={{
                flexShrink: 0,
              }}
              label={t("Country Code")}
              data={["+1", "+90"]}
            />
            <Input.Wrapper w="100%" label={t("Phone Number")}>
              <Input component={IMaskInput} mask="000 000 00 00" />
            </Input.Wrapper>
          </Group>
        )}
        <Checkbox
          checked={isEmail}
          onChange={(e) => setIsEmail(e.currentTarget.checked)}
          label={t("I would like to continue with e-mail")}
        />
        <Text size="xs" c="gray">
          {t(
            "Enter the e-mail address or phone number you used during booking"
          )}
        </Text>
        <Group justify="flex-end">
          <Button leftSection={<IconSearch size={16} />}>{t("Search")}</Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default QueryTransactionModal;
