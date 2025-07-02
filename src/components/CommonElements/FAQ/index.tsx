import { Accordion, Container, Stack, Text, Title } from "@mantine/core";
import React, { FC } from "react";
import { useTranslations } from "next-intl";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

const FAQ: FC<{
  items: {
    question: string
    answer: string
  }[]
}> = ({ items }) => {
  const t = useTranslations();

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack>
        <Text size="xl" fw={500}>
          {t("Frequently Asked Questions")}
        </Text>

        <Accordion variant="contained">
          {items.map((item, i) => (
            <Accordion.Item key={`answer-${i}`} value={`answer-${i}`}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Container>
  );
};

export default FAQ;
