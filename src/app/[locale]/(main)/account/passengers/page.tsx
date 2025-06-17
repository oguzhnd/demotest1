"use client";

import {
  ActionIcon,
  Button,
  Group,
  Menu,
  Paper,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { useListState } from "@mantine/hooks";
import {
  IconDotsVertical,
  IconEdit,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { MileCardType, PassportType } from "../page";
import { localeDateFormat } from "@/utils/tools";
import PassengerDrawer from "@/components/AccountPageElements/MyPassengers/PassengerDrawer";
import { useDrawerManager } from "@/store/managers/drawer";

export interface PassengerType {
  name: string;
  surname: string;
  identityNumber: string;
  birthDate: Date | null;
  phoneCode: string;
  phoneNumber: string;
  gender: string;
  passports: PassportType[];
  mileCards: MileCardType[];
}

const MyPassengers = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { openDrawer } = useDrawerManager();

  const [passengers, passengerHandlers] = useListState<PassengerType>([
    {
      name: "Oğuzhan",
      surname: "Koca",
      gender: "male",
      birthDate: new Date("05-01-2003"),
      identityNumber: "12442973798",
      mileCards: [],
      passports: [],
      phoneCode: "+90",
      phoneNumber: "551 181 57 00",
    },
  ]);

  return (
    <Stack>
      <PassengerDrawer />

      <Group justify="space-between">
        <Text size="lg" fw={500}>
          {t("My Passengers")}
        </Text>

        <Button
          color="green"
          size="compact-sm"
          leftSection={<IconPlus size={14} />}
          onClick={() => openDrawer("passengerDrawer", "add")}
        >
          {t("Add Passenger")}
        </Button>
      </Group>
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
            <Table.Th>{t("Name - Surname")}</Table.Th>
            <Table.Th>{t("TC Identity Number")}</Table.Th>
            <Table.Th>{t("Phone Number")}</Table.Th>
            <Table.Th>{t("Birth Date")}</Table.Th>
            <Table.Th></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {passengers.map((passenger, i) => (
            <Table.Tr key={`passenger-${i}`}>
              <Table.Td>
                {passenger.name} {passenger.surname}
              </Table.Td>
              <Table.Td>{passenger.identityNumber}</Table.Td>
              <Table.Td>
                {passenger.phoneCode} {passenger.phoneNumber}
              </Table.Td>
              <Table.Td>
                {localeDateFormat(passenger.birthDate, locale)}
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
                        openDrawer("passengerDrawer", "edit", passenger)
                      }
                    >
                      {t("Edit Passenger")}
                    </Menu.Item>
                    <Menu.Item leftSection={<IconTrash size={16} />}>
                      {t("Delete Passenger")}
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};

export default MyPassengers;
