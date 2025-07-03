import { useFlightStore } from "@/store/products/flight";
import { isTcIdentity, localeDateFormat } from "@/utils/tools";
import {
  Button,
  Checkbox,
  Grid,
  Group,
  Image,
  Modal,
  Paper,
  ScrollArea,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useListState } from "@mantine/hooks";
import {
  IconBriefcase2,
  IconBriefcase2Filled,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import moment from "moment";
import { useTranslations } from "next-intl";
import React, { FC, useState } from "react";

interface PassengerType {
  name: string;
  surname: string;
  identityNumber: string;
  birthDate: Date | null;
  gender: string;
}

const PassengersModal: FC<{
  opened: boolean;
  onClose: () => void;
  onSelect: (passenger: PassengerType) => void;
}> = ({ opened, onClose, onSelect }) => {
  const t = useTranslations();

  const [passengers, passengerHandlers] = useListState<PassengerType>([
    {
      name: "Oğuzhan",
      surname: "Koca",
      gender: "male",
      birthDate: new Date("05-01-2003"),
      identityNumber: "12442973798",
    },
  ]);

  return (
    <Modal
      size="lg"
      opened={opened}
      onClose={onClose}
      title={t("My Passengers")}
    >
      <Stack>
        <ScrollArea offsetScrollbars scrollbarSize={7}>
          <Table
            withTableBorder
            withColumnBorders
            styles={{
              th: {
                fontWeight: 500,
                whiteSpace: "nowrap",
              },
              td: {
                whiteSpace: "nowrap",
              },
            }}
          >
            <Table.Thead bg="gray.1">
              <Table.Tr>
                <Table.Th>{t("Name")}</Table.Th>
                <Table.Th>{t("Surname")}</Table.Th>
                <Table.Th>{t("Birth Date")}</Table.Th>
                <Table.Th>{t("TC Identity Number")}</Table.Th>
                <Table.Th>{t("Gender")}</Table.Th>
                <Table.Th></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {passengers.map((passenger, i) => (
                <Table.Tr key={`passenger-${i}`}>
                  <Table.Td>{passenger.name}</Table.Td>
                  <Table.Td>{passenger.surname}</Table.Td>
                  <Table.Td>{localeDateFormat(passenger.birthDate)}</Table.Td>
                  <Table.Td>{passenger.identityNumber}</Table.Td>
                  <Table.Td>
                    {t(passenger.gender === "male" ? "Male" : "Female")}
                  </Table.Td>
                  <Table.Td>
                    <Button
                      size="compact-sm"
                      variant="light"
                      onClick={() => {
                        onSelect(passenger);
                        onClose();
                      }}
                    >
                      {t("Select")}
                    </Button>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Stack>
    </Modal>
  );
};

const PassengerInformations: FC<{
  label: string;
  type: "adult" | "child" | "baby";
}> = ({ label, type }) => {
  const t = useTranslations();

  const [opened, setOpened] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const { bookingFlight, returnFlight } = useFlightStore();

  const form = useForm<PassengerType>({
    validateInputOnBlur: true,
    
    initialValues: {
      name: "",
      surname: "",
      gender: "male",
      birthDate: null,
      identityNumber: "",
    },
    validate: {
      identityNumber: (value) =>
        isTcIdentity(value) ? null : t("Invalid identity number"),
    },
  });

  const Bag = bookingFlight?.AlternativePrices[
    bookingFlight.packetIndex
  ].Bag.find(
    (e) =>
      e.PassengerType ===
      (type === "adult" ? "ADT" : type === "child" ? "INF" : "INF")
  );

  return (
    <Paper withBorder p="md">
      <PassengersModal
        opened={opened}
        onClose={() => setOpened(false)}
        onSelect={(passenger) => {
          form.setValues(passenger);
          setIsSaved(true);
        }}
      />

      <Stack>
        <Group justify="space-between">
          <Text size="sm" fw={500}>
            {label}
          </Text>

          {isSaved ? (
            <Button
              color="red"
              size="compact-sm"
              variant="subtle"
              leftSection={<IconX size={14} />}
              onClick={() => {
                setIsSaved(false);
                form.reset();
              }}
            >
              {form.getValues().name} {form.getValues().surname}
            </Button>
          ) : (
            <Button
              size="compact-sm"
              variant="subtle"
              leftSection={<IconUsers size={14} />}
              onClick={() => setOpened(true)}
            >
              {t("Choose From My Passengers")}
            </Button>
          )}
        </Group>
        <Grid gutter="xs">
          <Grid.Col
            span={{
              base: 12,
              sm: 2,
            }}
          >
            <TextInput
              readOnly={isSaved}
              label={t("Name")}
              {...form.getInputProps("name")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 2,
            }}
          >
            <TextInput
              readOnly={isSaved}
              label={t("Surname")}
              {...form.getInputProps("surname")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 2,
            }}
          >
            <DatePickerInput
              readOnly={isSaved}
              label={t("Birth Date")}
              maxDate={
                type === "adult"
                  ? moment(new Date()).subtract(18, "y").toDate()
                  : new Date()
              }
              {...form.getInputProps("birthDate")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 2,
            }}
          >
            <TextInput
              readOnly={isSaved}
              label={t("TC Identity Number")}
              maxLength={11}
              {...form.getInputProps("identityNumber")}
            />
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 2,
            }}
          >
            <Select
              readOnly={isSaved}
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
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              sm: 2,
            }}
          >
            <Stack gap={2}>
              <Text size="sm" fw={500}>
                {t("Luggage allowance")}
              </Text>
              <Group gap={4}>
                <IconBriefcase2Filled size={16} />
                <Text size="xs">
                  {Bag?.BaggageValue} {Bag?.BaggageUnit}
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
        <Checkbox disabled={isSaved} label={t("Add to My Passengers")} />
      </Stack>
    </Paper>
  );
};

export default PassengerInformations;
