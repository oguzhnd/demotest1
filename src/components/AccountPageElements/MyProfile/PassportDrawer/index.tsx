import { useDrawerManager } from "@/store/managers/drawer";
import { Button, Drawer, Group, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";
import { FC, useCallback, useEffect } from "react";

import { PassportType } from "@/app/[locale]/(main)/account/page";
import classes from "@/components/AccountPageElements/Account.module.css";
import { DatePickerInput } from "@mantine/dates";

const PassportDrawer: FC<{
  handleSubmit: (type: "add" | "edit", value: PassportType) => void;
}> = ({ handleSubmit: drawerSubmit }) => {
  const t = useTranslations();

  const { drawers, closeDrawer } = useDrawerManager();

  const form = useForm<PassportType>({
    initialValues: {
      country: "",
      number: "",
      validityDate: null,
    },
  });

  const handleClose = useCallback(() => {
    form.reset();
    closeDrawer("passportDrawer");
  }, [form]);

  const handleSubmit = useCallback(
    (values: PassportType) => {
      drawerSubmit(drawers.passportDrawer.type || "add", values);

      handleClose();
    },
    [drawerSubmit]
  );

  useEffect(() => {
    if (
      drawers.passportDrawer.opened &&
      drawers.passportDrawer.type === "edit" &&
      drawers.passportDrawer.data
    ) {
      form.setValues(drawers.passportDrawer.data);
    }
  }, [drawers.passportDrawer.opened]);

  return (
    <Drawer
      size="sm"
      opened={drawers.passportDrawer.opened}
      onClose={handleClose}
      title={t(
        drawers.passportDrawer.type === "add" ? "Add Passport" : "Edit Passport"
      )}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack justify="space-between" gap="xs">
          <Stack gap="xs">
            <TextInput
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Passport Number")}
              {...form.getInputProps(`number`)}
            />
            <Select
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Passport Issuing Country")}
              {...form.getInputProps(`country`)}
            />
            <DatePickerInput
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Passport Validity Date")}
              {...form.getInputProps(`validityDate`)}
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

export default PassportDrawer;
