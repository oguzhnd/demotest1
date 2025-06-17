import { PassengerType } from "@/app/[locale]/(main)/account/passengers/page";
import { useDrawerManager } from "@/store/managers/drawer";
import {
  Button,
  Drawer,
  Group,
  Input,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useTranslations } from "next-intl";
import { useCallback, useEffect } from "react";

import classes from "@/components/AccountPageElements/Account.module.css";
import { DatePickerInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { IMaskInput } from "react-imask";

const PassengerDrawer = () => {
  const t = useTranslations();

  const { drawers, closeDrawer } = useDrawerManager();

  const form = useForm<PassengerType>({
    initialValues: {
      name: "",
      surname: "",
      gender: "male",
      birthDate: null,
      identityNumber: "",
      mileCards: [],
      passports: [],
      phoneCode: "+90",
      phoneNumber: "",
    },
  });

  const handleClose = useCallback(() => {
    form.reset();
    closeDrawer("passengerDrawer");
  }, [form]);

  const handleSubmit = useCallback(() => {}, []);

  useEffect(() => {
    if (
      drawers.passengerDrawer.opened &&
      drawers.passengerDrawer.type === "edit" &&
      drawers.passengerDrawer.data
    ) {
      form.setValues(drawers.passengerDrawer.data);
    }
  }, [drawers.passengerDrawer.opened]);

  return (
    <Drawer
      size="sm"
      opened={drawers.passengerDrawer.opened}
      onClose={handleClose}
      title={t(
        drawers.passengerDrawer.type === "add"
          ? "Add Passenger"
          : "Edit Passenger"
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
              label={t("Name")}
              {...form.getInputProps("name")}
            />
            <TextInput
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Surname")}
              {...form.getInputProps("surname")}
            />
            <Input.Wrapper
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              w="100%"
              label={t("TC Identity Number")}
            >
              <Input
                component={IMaskInput}
                mask="00000000000"
                {...form.getInputProps("identityNumber")}
              />
            </Input.Wrapper>
            <DatePickerInput
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              label={t("Birth Date")}
              leftSection={<IconCalendar size={16} />}
              maxDate={new Date()}
              {...form.getInputProps("birthDate")}
            />
            <Group wrap="nowrap" gap={4} align="flex-start">
              <Select
                w={100}
                maw="100%"
                classNames={{
                  root: classes.inputRoot,
                  label: classes.inputLabel,
                }}
                style={{
                  flexShrink: 0,
                }}
                label={t("Country Code")}
                data={["+1", "+90"]}
                {...form.getInputProps("phoneCode")}
              />
              <Input.Wrapper
                classNames={{
                  root: classes.inputRoot,
                  label: classes.inputLabel,
                }}
                w="100%"
                label={t("Phone Number")}
              >
                <Input
                  component={IMaskInput}
                  mask="000 000 00 00"
                  {...form.getInputProps("phoneNumber")}
                />
              </Input.Wrapper>
            </Group>
            <Select
              classNames={{
                root: classes.inputRoot,
                label: classes.inputLabel,
              }}
              style={{
                flexShrink: 0,
              }}
              label={t("Gender")}
              data={[
                {
                  value: "male",
                  label: t("Male"),
                },
                {
                  value: "female",
                  label: t("Female"),
                },
                {
                  value: "other",
                  label: t("Other"),
                },
              ]}
              {...form.getInputProps("gender")}
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

export default PassengerDrawer;
