import {
  Accordion,
  Button,
  ScrollArea,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { IconCalendarMonth } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";

const TourPricesAndDates = () => {
  const t = useTranslations();

  return (
    <Stack>
      <Text size="lg" fw={500}>
        {t("Prices and Dates")}
      </Text>
      <Accordion variant="separated">
        <Accordion.Item value="1">
          <Accordion.Control
            icon={
              <IconCalendarMonth
                size={16}
                color="var(--mantine-color-green-7)"
              />
            }
          >
            27 Mar - 04 Nis 2025
          </Accordion.Control>
          <Accordion.Panel>
            <ScrollArea offsetScrollbars scrollbarSize={7}>
              <Table
                withTableBorder
                withColumnBorders
                styles={{
                  thead: {
                    background: "var(--mantine-color-gray-1)",
                  },
                  th: {
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  },
                  td: {
                    whiteSpace: "nowrap",
                  },
                }}
              >
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>{t("Date")}</Table.Th>
                    <Table.Th>{t("Hotel")}</Table.Th>
                    <Table.Th>{t("Single Room")}</Table.Th>
                    <Table.Th>{t("Double Room")}</Table.Th>
                    <Table.Th>{t("Triple Room")}</Table.Th>
                    <Table.Th>{t("One Child (2-12 Years)")}</Table.Th>
                    <Table.Th>{t("Double Child")}</Table.Th>
                    <Table.Th>{t("Baby")}</Table.Th>
                    <Table.Th></Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  <Table.Tr>
                    <Table.Td>27 Mar - 04 Nis 2025</Table.Td>
                    <Table.Td>4* & 5* Oteller Vb.</Table.Td>
                    <Table.Td>1.399€</Table.Td>
                    <Table.Td>899€</Table.Td>
                    <Table.Td>899€</Table.Td>
                    <Table.Td>899€</Table.Td>
                    <Table.Td>0€</Table.Td>
                    <Table.Td>150€</Table.Td>
                    <Table.Td>
                      <Button size="compact-sm">
                        {t("Make a reservation")}
                      </Button>
                    </Table.Td>
                  </Table.Tr>
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
};

export default TourPricesAndDates;
