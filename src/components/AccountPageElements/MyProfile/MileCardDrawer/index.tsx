import { useDrawerManager } from "@/store/managers/drawer";
import { Button, Drawer, Group, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";
import { FC, useCallback, useEffect } from "react";

import { MileCardType } from "@/app/[locale]/(main)/account/page";
import classes from "@/components/AccountPageElements/Account.module.css";
import { DatePickerInput } from "@mantine/dates";

const MileCardDrawer: FC<{
  handleSubmit: (type: "add" | "edit", value: MileCardType) => void;
}> = ({ handleSubmit: drawerSubmit }) => {
  const t = useTranslations();

  const { drawers, closeDrawer } = useDrawerManager();

  const form = useForm<MileCardType>({
    initialValues: {
      airline: "",
      number: "",
    },
  });

  const handleClose = useCallback(() => {
    form.reset();
    closeDrawer("mileCardDrawer");
  }, [form]);

  const handleSubmit = useCallback(
    (values: MileCardType) => {
      drawerSubmit(drawers.mileCardDrawer.type || "add", values);

      handleClose();
    },
    [drawerSubmit, drawers.mileCardDrawer.type]
  );

  useEffect(() => {
    if (
      drawers.mileCardDrawer.opened &&
      drawers.mileCardDrawer.type === "edit" &&
      drawers.mileCardDrawer.data
    ) {
      form.setValues(drawers.mileCardDrawer.data);
    }
  }, [drawers.mileCardDrawer.opened]);

  return (
    <Drawer
      size="sm"
      opened={drawers.mileCardDrawer.opened}
      onClose={handleClose}
      title={t(
        drawers.mileCardDrawer.type === "add"
          ? "Add Mile Card"
          : "Edit Mile Card"
      )}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack justify="space-between" gap="xs">
          <Stack gap="xs">
            <Select
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Airline")}
              {...form.getInputProps(`airline`)}
            />
            <TextInput
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Mile Card Number")}
              {...form.getInputProps(`number`)}
            />
          </Stack>
          <Group gap={8} wrap="nowrap">
            <Button variant="default" onClick={handleClose}>
              {t("Cancel")}
            </Button>
            <Button color="green" type="submit">
              {t("Save")}
            </Button>
          </Group>
        </Stack>
      </form>
    </Drawer>
  );
};

export default MileCardDrawer;
