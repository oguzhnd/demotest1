"use client";

import {
  ActionIcon,
  Button,
  Checkbox,
  Group,
  Input,
  Menu,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { useLocale, useTranslations } from "next-intl";

import classes from "@/components/AccountPageElements/Account.module.css";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import {
  IconAlertTriangle,
  IconCalendar,
  IconDeviceFloppy,
  IconDotsVertical,
  IconEdit,
  IconKey,
  IconPlus,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import { cloneDeep, concat } from "lodash";
import { useCallback } from "react";
import { IMaskInput } from "react-imask";
import { localeDateFormat } from "@/utils/tools";
import PassportDrawer from "@/components/AccountPageElements/MyProfile/PassportDrawer";
import { useDrawerManager } from "@/store/managers/drawer";
import MileCardDrawer from "@/components/AccountPageElements/MyProfile/MileCardDrawer";
import BillingInformationDrawer from "@/components/AccountPageElements/MyProfile/BillingInformationDrawer";
import { useMediaQuery } from "@mantine/hooks";

export interface PassportType {
  number: string;
  country: string;
  validityDate: Date | null;
}

export interface MileCardType {
  airline: string;
  number: string;
}

export interface BillingInformationType {
  type: "individual" | "corporate";
  name?: string;
  surname?: string;
  companyName?: string;
  soleProprietorship?: boolean;
  identityNumber: string;

  taxOffice?: string;
  taxNumber?: string;

  country: string;
  province: string;
  district: string;
  address: string;
}

interface AccountFormType {
  name: string;
  surname: string;
  identityNumber: string;
  tcCitizen: boolean;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  birthDate: Date;
  gender: string;
  passports: PassportType[];
  mileCards: MileCardType[];
  billingInformations: BillingInformationType[];
  informed: boolean;
}

const MyAccount = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { openDrawer } = useDrawerManager();

  const form = useForm<AccountFormType>({
    initialValues: {
      name: "Oğuzhan",
      surname: "Koca",
      identityNumber: "12442973798",
      tcCitizen: true,
      email: "oguzhankoca73@gmail.com",
      phoneCode: "+90",
      phoneNumber: "551 181 57 00",
      birthDate: new Date("05-01-2003"),
      gender: "male",
      passports: [],
      mileCards: [],
      billingInformations: [],
      informed: false,
    },
  });

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const addPassport = useCallback(
    (passport: PassportType) => {
      form.setFieldValue(
        "passports",
        concat(form.getValues().passports, passport)
      );
    },
    [form]
  );

  const removePassport = useCallback(
    (index: number) => {
      const clonedValue = cloneDeep(form.getValues().passports);

      clonedValue.splice(index, 1);

      form.setFieldValue("passports", clonedValue);
    },
    [form]
  );

  const addMileCard = useCallback(
    (value: MileCardType) => {
      form.setFieldValue(
        "mileCards",
        concat(form.getValues().mileCards, value)
      );
    },
    [form]
  );

  const removeMileCard = useCallback(
    (index: number) => {
      const clonedValue = cloneDeep(form.getValues().mileCards);

      clonedValue.splice(index, 1);

      form.setFieldValue("mileCards", clonedValue);
    },
    [form]
  );

  const addBillingInformation = useCallback(
    (value: BillingInformationType) => {
      form.setFieldValue(
        "billingInformations",
        concat(form.getValues().billingInformations, value)
      );
    },
    [form]
  );

  const removeBillingInformation = useCallback(
    (index: number) => {
      const clonedValue = cloneDeep(form.getValues().billingInformations);

      clonedValue.splice(index, 1);

      form.setFieldValue("billingInformations", clonedValue);
    },
    [form]
  );

  return (
    <Stack>
      <Group justify="space-between">
        <Group>
          <Text size="lg" fw={500}>
            {t("My Profile")}
          </Text>
          {form.isDirty() && (
            <Paper bg="red.0" radius="md">
              <Group gap={4} c="red" py={6} px={8}>
                <IconAlertTriangle size={16} />
                <Text size="xs">{t("Changes not saved")}</Text>
              </Group>
            </Paper>
          )}
        </Group>

        <Group gap={4}>
          <Button
            size="compact-sm"
            color="cyan"
            leftSection={<IconKey size={14} />}
          >
            {t("Change Password")}
          </Button>
          <Button
            disabled={!form.isDirty()}
            size="compact-sm"
            color="green"
            leftSection={<IconDeviceFloppy size={14} />}
          >
            {t("Save")}
          </Button>
        </Group>
      </Group>
      <SimpleGrid cols={{
        base: 1,
        xs: 2,
        sm: 4
      }} spacing="xs">
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
        <NumberInput
          classNames={{
            root: classes.inputRoot,
            label: classes.inputLabel,
          }}
          label={t("TC Identity Number")}
          hideControls
          {...form.getInputProps("identityNumber")}
        />
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
        <TextInput
          classNames={{
            root: classes.inputRoot,
            label: classes.inputLabel,
          }}
          label={t("E-Mail")}
          {...form.getInputProps("email")}
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
        <Checkbox
          label={t(
            "I would like to be informed about discounts and campaigns within the scope of Consent Text"
          )}
          mt={7}
          {...form.getInputProps("informed")}
        />
      </SimpleGrid>

      <PassportDrawer
        handleSubmit={(type, value) => {
          if (type === "add") {
            addPassport(value);
          }
        }}
      />

      <SimpleGrid cols={1}>
        <Stack gap={8}>
          <Group justify="space-between">
            <Text fw={500}>{t("Passports")}</Text>
            <Button
              variant="light"
              size="compact-xs"
              color="green"
              leftSection={<IconPlus size={12} />}
              onClick={() => openDrawer("passportDrawer")}
            >
              {t("Add Passport")}
            </Button>
          </Group>
          <Paper p="xs" bg="gray.0">
            <Table
              highlightOnHover
              styles={{
                th: {
                  fontWeight: 500,
                },
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>{t("Passport Number")}</Table.Th>
                  <Table.Th>{t("Passport Issuing Country")}</Table.Th>
                  <Table.Th>{t("Passport Validity Date")}</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {form.getValues().passports.map((passport, i) => (
                  <Table.Tr key={`passenger-${i}`}>
                    <Table.Td>{passport.number}</Table.Td>
                    <Table.Td>{passport.country}</Table.Td>
                    <Table.Td>
                      {localeDateFormat(passport.validityDate, locale)}
                    </Table.Td>
                    <Table.Td align="right">
                      <Menu>
                        <Menu.Target>
                          <ActionIcon variant="transparent" color="dark">
                            <IconDotsVertical size={18} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item
                            leftSection={<IconEdit size={16} />}
                            onClick={() =>
                              openDrawer("passportDrawer", "edit", passport)
                            }
                          >
                            {t("Edit Passport")}
                          </Menu.Item>
                          <Menu.Item
                            leftSection={<IconTrash size={16} />}
                            onClick={() => removePassport(i)}
                          >
                            {t("Delete Passport")}
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Stack>

        <MileCardDrawer
          handleSubmit={(type, value) => {
            if (type === "add") {
              addMileCard(value);
            }
          }}
        />
        <Stack gap={8}>
          <Group justify="space-between">
            <Text fw={500}>{t("Mile Cards")}</Text>
            <Button
              variant="light"
              size="compact-xs"
              color="green"
              leftSection={<IconPlus size={12} />}
              onClick={() => openDrawer("mileCardDrawer")}
            >
              {t("Add Mile Card")}
            </Button>
          </Group>
          <Paper p="xs" bg="gray.0">
            <Table
              highlightOnHover
              styles={{
                th: {
                  fontWeight: 500,
                },
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>{t("Airline")}</Table.Th>
                  <Table.Th>{t("Mile Card Number")}</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {form.getValues().mileCards.map((mileCard, i) => (
                  <Table.Tr key={`passenger-${i}`}>
                    <Table.Td>{mileCard.airline}</Table.Td>
                    <Table.Td>{mileCard.number}</Table.Td>
                    <Table.Td align="right">
                      <Menu>
                        <Menu.Target>
                          <ActionIcon variant="transparent" color="dark">
                            <IconDotsVertical size={18} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item
                            leftSection={<IconEdit size={16} />}
                            onClick={() =>
                              openDrawer("mileCardDrawer", "edit", mileCard)
                            }
                          >
                            {t("Edit Mile Card")}
                          </Menu.Item>
                          <Menu.Item
                            leftSection={<IconTrash size={16} />}
                            onClick={() => removeMileCard(i)}
                          >
                            {t("Delete Mile Card")}
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Stack>

        <BillingInformationDrawer
          handleSubmit={(type, value) => {
            if (type === "add") {
              addBillingInformation(value);
            }
          }}
        />
        <Stack gap={8}>
          <Group justify="space-between">
            <Text fw={500}>{t("My Billing Informations")}</Text>
            <Button
              variant="light"
              size="compact-xs"
              color="green"
              leftSection={<IconPlus size={12} />}
              onClick={() => openDrawer("billingInformationDrawer")}
            >
              {t("Add Billing Information")}
            </Button>
          </Group>
          <Paper p="xs" bg="gray.0">
            <Table
              highlightOnHover
              styles={{
                th: {
                  fontWeight: 500,
                },
              }}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>{t("Name")}</Table.Th>
                  <Table.Th>{t("Identity Number")}</Table.Th>
                  <Table.Th>{t("Tax Office")}</Table.Th>
                  <Table.Th>{t("Tax Number")}</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {form
                  .getValues()
                  .billingInformations.map((billingInformation, i) => (
                    <Table.Tr key={`passenger-${i}`}>
                      <Table.Td>
                        {billingInformation.type === "corporate"
                          ? billingInformation.companyName
                          : `${billingInformation.name} ${billingInformation.surname}`}
                      </Table.Td>
                      <Table.Td>{billingInformation.identityNumber}</Table.Td>
                      <Table.Td>{billingInformation.taxOffice}</Table.Td>
                      <Table.Td>{billingInformation.taxNumber}</Table.Td>
                      <Table.Td align="right">
                        <Menu>
                          <Menu.Target>
                            <ActionIcon variant="transparent" color="dark">
                              <IconDotsVertical size={18} />
                            </ActionIcon>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item
                              leftSection={<IconEdit size={16} />}
                              onClick={() =>
                                openDrawer(
                                  "billingInformationDrawer",
                                  "edit",
                                  billingInformation
                                )
                              }
                            >
                              {t("Edit Billing Information")}
                            </Menu.Item>
                            <Menu.Item
                              leftSection={<IconTrash size={16} />}
                              onClick={() => removeBillingInformation(i)}
                            >
                              {t("Remove Billing Information")}
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table>
          </Paper>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default MyAccount;
