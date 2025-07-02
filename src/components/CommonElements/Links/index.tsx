import {
  Anchor,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { entries, keys } from "lodash";
import { useTranslations } from "next-intl";
import React from "react";

const Links = () => {
  const t = useTranslations();

  const items = {
    "Popular Vacation Destinations": [
      {
        name: "İstanbul Otelleri",
      },
      {
        name: "Antalya Otelleri",
      },
      {
        name: "Alanya Otelleri",
      },
      {
        name: "Ayvalık Otelleri",
      },
      {
        name: "İzmir Otelleri",
      },
      {
        name: "İstanbul Otelleri",
      },
      {
        name: "Antalya Otelleri",
      },
      {
        name: "Alanya Otelleri",
      },
      {
        name: "Ayvalık Otelleri",
      },
      {
        name: "İzmir Otelleri",
      },
    ],
  };

  return (
    <Container size="xl" w="100%" py={20}>
      <Tabs defaultValue={keys(items)[0]}>
        <Tabs.List mb="md">
          {keys(items).map((tab, i) => (
            <Tabs.Tab key={tab} value={tab}>
              {t(tab)}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {entries(items).map(([key, links], i) => (
          <Tabs.Panel key={key} value={key}>
            <SimpleGrid
              cols={{
                base: 2,
                xs: 3,
                sm: 4,
                md: 5,
              }}
            >
              {links.map((link, j) => (
                <Group key={`link-${i}-${j}`} gap={4} c="blue.5">
                  <IconChevronRight size={16} />
                  <Anchor size="sm" fw={500} lh={1}>
                    {link.name}
                  </Anchor>
                </Group>
              ))}
            </SimpleGrid>
          </Tabs.Panel>
        ))}
      </Tabs>
    </Container>
  );
};

export default Links;
