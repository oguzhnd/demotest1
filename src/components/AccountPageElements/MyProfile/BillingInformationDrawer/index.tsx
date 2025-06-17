import { useDrawerManager } from "@/store/managers/drawer";
import {
  Button,
  Checkbox,
  Drawer,
  Group,
  Radio,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";
import { FC, useCallback, useEffect } from "react";

import { BillingInformationType } from "@/app/[locale]/(main)/account/page";
import classes from "@/components/AccountPageElements/Account.module.css";
import { DatePickerInput } from "@mantine/dates";

const BillingInformationDrawer: FC<{
  handleSubmit: (type: "add" | "edit", value: BillingInformationType) => void;
}> = ({ handleSubmit: drawerSubmit }) => {
  const t = useTranslations();

  const { drawers, closeDrawer } = useDrawerManager();

  const form = useForm<BillingInformationType>({
    initialValues: {
      type: "individual",
      name: "",
      surname: "",
      companyName: "",
      soleProprietorship: false,
      taxNumber: "",
      taxOffice: "",
      identityNumber: "",
      country: "",
      province: "",
      district: "",
      address: "",
    },
  });

  const handleClose = useCallback(() => {
    form.reset();
    closeDrawer("billingInformationDrawer");
  }, [form]);

  const handleSubmit = useCallback(
    (values: BillingInformationType) => {
      drawerSubmit(drawers.billingInformationDrawer.type || "add", values);

      handleClose();
    },
    [drawerSubmit, drawers.billingInformationDrawer.type]
  );

  useEffect(() => {
    if (
      drawers.billingInformationDrawer.opened &&
      drawers.billingInformationDrawer.type === "edit" &&
      drawers.billingInformationDrawer.data
    ) {
      form.setValues(drawers.billingInformationDrawer.data);
    }
  }, [drawers.billingInformationDrawer.opened]);

  return (
    <Drawer
      size="sm"
      opened={drawers.billingInformationDrawer.opened}
      onClose={handleClose}
      title={t(
        drawers.billingInformationDrawer.type === "add"
          ? "Add Billing Information"
          : "Edit Billing Information"
      )}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack justify="space-between" gap="xs">
          <Stack gap="xs">
            <Radio.Group {...form.getInputProps(`type`)}>
              <Group gap="sm">
                <Radio value="individual" label={t("Individual")} />
                <Radio value="corporate" label={t("Corporate")} />
              </Group>
            </Radio.Group>
            {form.getValues().type === "corporate" ? (
              <>
                <TextInput
                  classNames={{
                    root: classes.inputRoot,
                    label: classes.inputLabel,
                  }}
                  label={t("Company Name")}
                  {...form.getInputProps(`companyName`)}
                />
                <Checkbox
                  label={t("Sole Proprietorship")}
                  {...form.getInputProps(`soleProprietorship`, {
                    type: "checkbox",
                  })}
                />
                <TextInput
                  classNames={{
                    root: classes.inputRoot,
                    label: classes.inputLabel,
                  }}
                  label={t("Tax Office")}
                  {...form.getInputProps(`taxOffice`)}
                />
                <TextInput
                  classNames={{
                    root: classes.inputRoot,
                    label: classes.inputLabel,
                  }}
                  label={t(
                    form.getValues().soleProprietorship
                      ? "Identity Number"
                      : "Tax Office"
                  )}
                  {...form.getInputProps(`identityNumber`)}
                />
              </>
            ) : (
              <>
                <TextInput
                  classNames={{
                    root: classes.inputRoot,
                    label: classes.inputLabel,
                  }}
                  label={t("Name")}
                  {...form.getInputProps(`name`)}
                />
                <TextInput
                  classNames={{
                    root: classes.inputRoot,
                    label: classes.inputLabel,
                  }}
                  label={t("Surname")}
                  {...form.getInputProps(`surname`)}
                />
                <TextInput
                  classNames={{
                    root: classes.inputRoot,
                    label: classes.inputLabel,
                  }}
                  label={t("Identity Number")}
                  {...form.getInputProps(`identityNumber`)}
                />
              </>
            )}
            <Select
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Country")}
              {...form.getInputProps(`country`)}
            />
            <Select
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Province")}
              {...form.getInputProps(`province`)}
            />
            <Select
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("District")}
              {...form.getInputProps(`district`)}
            />
            <Textarea
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Billing Address")}
              {...form.getInputProps(`address`)}
            />
          </Stack>
          <Group gap={8} wrap="nowrap">
            <Button fullWidth variant="default" onClick={handleClose}>
              {t("Cancel")}
            </Button>
            <Button fullWidth color="green" type="submit">
              {t("Save")}
            </Button>
          </Group>
        </Stack>
      </form>
    </Drawer>
  );
};

export default BillingInformationDrawer;
