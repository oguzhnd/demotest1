"use client";

import {
  Anchor,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Input,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconClock,
  IconMail,
  IconMailbox,
  IconPhone,
  IconPrinter,
} from "@tabler/icons-react";
import { Map, Marker } from "@vis.gl/react-google-maps";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { IMaskInput } from "react-imask";

const Contact = () => {
  const t = useTranslations();

  const [subject, setSubject] = useState("hotel");

  const matchesSm = useMediaQuery("(max-width: 48em)")

  return (
    <Container size="xl" w="100%" py={20}>
      <Stack>
        <Stack gap={0}>
          <Text size="xl" fw={500}>
            {t("Contact")}
          </Text>
          <Text size="sm" c="gray.7">
            {t(
              "You can easily carry out your transactions with the quick transactions on the contact page, send us your opinions and suggestions via the contact form, and access our contact information"
            )}
          </Text>
        </Stack>

        <Paper radius="md" style={{ overflow: "hidden" }} withBorder>
          <SimpleGrid
            spacing={0}
            cols={{
              base: 1,
              sm: 2,
            }}
          >
            <Stack
              p="md"
              style={{
                [matchesSm ? "borderBottom" : "borderRight"]: "1px solid var(--mantine-color-gray-3)",
              }}
            >
              <Stack gap={0}>
                <Text fw={500}>{t("Contact Form")}</Text>
                <Text size="sm" c="gray.7">
                  {t("What would you like to ask about?")}
                </Text>
              </Stack>
              <Button.Group>
                <Button
                  size="compact-sm"
                  variant={subject === "hotel" ? "filled" : "default"}
                  onClick={() => setSubject("hotel")}
                >
                  {t("Hotel")}
                </Button>
                <Button
                  size="compact-sm"
                  variant={subject === "flight" ? "filled" : "default"}
                  onClick={() => setSubject("flight")}
                >
                  {t("Flight")}
                </Button>
                <Button
                  size="compact-sm"
                  variant={subject === "rental" ? "filled" : "default"}
                  onClick={() => setSubject("rental")}
                >
                  {t("Car Rental")}
                </Button>
              </Button.Group>

              <Grid gutter={8}>
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 6,
                  }}
                >
                  <TextInput placeholder={t("Name")} />
                </Grid.Col>
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 6,
                  }}
                >
                  <TextInput placeholder={t("Surname")} />
                </Grid.Col>
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 6,
                  }}
                >
                  <TextInput placeholder={t("E-Mail")} />
                </Grid.Col>
                <Grid.Col
                  span={{
                    base: 12,
                    sm: 6,
                  }}
                >
                  <Input
                    component={IMaskInput}
                    mask="000 000 00 00"
                    placeholder={t("Phone Number")}
                  />
                </Grid.Col>
                <Grid.Col
                  span={{
                    base: 12,
                  }}
                >
                  <TextInput placeholder={t("Reservation PNR Code")} />
                </Grid.Col>
                <Grid.Col
                  span={{
                    base: 12,
                  }}
                >
                  <Textarea placeholder={t("Your Message")} />
                </Grid.Col>
              </Grid>
              <Text size="xs" c="gray">
                {t(
                  "Your personal data is processed within the scope of the Information Text"
                )}
              </Text>
              <Group justify="flex-end">
                <Button>{t("Send")}</Button>
              </Group>
            </Stack>

            <Stack
              p="md"
            >
              <Stack gap="xs">
                <Stack gap={0}>
                  <Text fw={500}>{t("Contact Informations")}</Text>
                  <Text size="sm" c="gray.7">
                    Hotelchick, Oney Finansal Danışmanlık Turizm ve Dış Ticaret
                    A.Ş.&apos;ye ait Misyura Travel&apos;ın TURSAB (Türkiye
                    Seyahat Acenteleri Birliği) Lisans No:17192 tescilli ticari
                    markasıdır.
                  </Text>
                </Stack>

                <Divider />

                <Stack gap="xs">
                  <Group wrap="nowrap" align="flex-start">
                    <Group c="gray.8" gap={8} w={160} style={{ flexShrink: 0 }}>
                      <IconMailbox size={16} />
                      <Text size="sm">{t("Address")}</Text>
                    </Group>
                    <Text size="sm">
                      Esentepe Mahallesi, Kore Şehitleri Caddesi, Yonca
                      Apartmanı. No:1-3 / 6 34394 Şişli/İstanbul/Türkiye
                    </Text>
                  </Group>

                  <Group wrap="nowrap" align="flex-start">
                    <Group c="gray.8" gap={8} w={160} style={{ flexShrink: 0 }}>
                      <IconPhone size={16} />
                      <Text size="sm">{t("Phone Number")}</Text>
                    </Group>
                    <Anchor size="sm" href="tel:+90 (0212) 706 68 38">
                      +90 (0212) 706 68 38
                    </Anchor>
                  </Group>

                  <Group wrap="nowrap" align="flex-start">
                    <Group c="gray.8" gap={8} w={160} style={{ flexShrink: 0 }}>
                      <IconClock size={16} />
                      <Text size="sm">{t("Working Hours")}</Text>
                    </Group>
                    <Text size="sm">
                      Ofis çalışma saatlerimiz Pazartesi - Cuma 08:30 - 18:00
                      arasıdır.
                    </Text>
                  </Group>

                  <Group wrap="nowrap" align="flex-start">
                    <Group c="gray.8" gap={8} w={160} style={{ flexShrink: 0 }}>
                      <IconPrinter size={16} />
                      <Text size="sm">{t("Fax")}</Text>
                    </Group>
                    <Anchor size="sm" href="tel:+90 (0212) 706 68 38">
                      +90 (0212) 706 68 38
                    </Anchor>
                  </Group>

                  <Group wrap="nowrap" align="flex-start">
                    <Group c="gray.8" gap={8} w={160} style={{ flexShrink: 0 }}>
                      <IconMail size={16} />
                      <Text size="sm">{t("E-Mail")}</Text>
                    </Group>
                    <Anchor size="sm" href="mailto:info@hotelchick.com">
                      info@hotelchick.com
                    </Anchor>
                  </Group>
                </Stack>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Paper>

        <Stack gap="xs">
          <Text fw={500} mt="sm">
            {t("Our Location")}
          </Text>

          <Map
            mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
            defaultZoom={15}
            defaultCenter={{ lat: 41.07051722241036, lng: 29.01364791275019 }}
            gestureHandling={"greedy"}
            disableDefaultUI
            style={{ height: 400, borderRadius: "var(--mantine-radius-md)" }}
          >
            <Marker
              position={{ lat: 41.07051722241036, lng: 29.01364791275019 }}
            />
          </Map>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Contact;
