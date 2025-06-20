"use client";

import Rooms from "@/components/HotelPageElements/HotelDetails/Rooms";
import { facilities } from "@/components/HotelPageElements/HotelListFilters/Elements/FacilitiesAndFeatures";
import HotelMapDetail from "@/components/HotelPageElements/HotelMapDetail";
import SearchArea from "@/components/SearchArea";
import { useRouter } from "@/i18n/navigation";
import { useModalManager } from "@/store/managers/modal";
import {
  Anchor,
  Button,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Rating,
  ScrollArea,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconChevronRight,
  IconMapPin,
  IconMapPinFilled,
  IconSpeakerphone,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React from "react";

const HotelDetail = () => {
  const t = useTranslations();
  const locale = useLocale();

  const params = useParams();
  const { push } = useRouter();

  const { openModal } = useModalManager()

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Stack>
      <HotelMapDetail />

      <SearchArea type="hotel" />
      <Container w="100%" size="xl" py={20}>
        <Stack gap="xs">
          <Stack gap="xs">
            <Group>
              <Text size="xl" fw={500}>
                All Suites Appart Hôtel Orly Rungis
              </Text>
              <Rating value={5} readOnly />
            </Group>
            <Group gap="xs">
              <Text
                size="sm"
                c="white"
                fw={500}
                bg="green.9"
                px="xs"
                py={6}
                lh={1}
                style={{ borderRadius: 8 }}
              >
                9.6
              </Text>
              <Anchor size="sm" fw={500} c="gray.7">
                37 Misafir Yorumu
              </Anchor>
            </Group>
          </Stack>

          <Tabs mt="md" defaultValue="Ana Sayfa">
            <Tabs.List>
              <Parent
                w="100%"
                justify="space-between"
                align={matchesSm ? undefined : "flex-end"}
              >
                <ScrollArea scrollbarSize={7}>
                  <Group gap={0} wrap="nowrap">
                    {["Ana Sayfa", "Odalar", "Detaylar", "Olanaklar"].map(
                      (tab, i) => (
                        <Tabs.Tab
                          key={`tab-${i}`}
                          value={tab}
                          py="sm"
                          px="lg"
                          fw={500}
                          style={{ borderBottomWidth: 3 }}
                        >
                          {tab}
                        </Tabs.Tab>
                      )
                    )}
                  </Group>
                </ScrollArea>

                <Parent
                  gap={matchesSm ? 0 : undefined}
                  align={matchesSm ? "center" : undefined}
                  mb={matchesSm ? 8 : 0}
                >
                  <Stack
                    gap={0}
                    align={matchesSm ? "center" : "flex-end"}
                    mb={4}
                  >
                    <Text size="lg" fw={500}>
                      {(85930).toLocaleString(locale)} TRY
                    </Text>
                    <Text size="xs" c="gray.7">
                      vergi ve harçlar dahil
                    </Text>
                  </Stack>
                  <Button radius="xl">Tekliflere Bak</Button>
                </Parent>
              </Parent>
            </Tabs.List>
          </Tabs>

          <Stack gap="xl">
            <Grid gutter="xs">
              <Grid.Col
                span={{
                  base: 12,
                  sm: 6,
                }}
              >
                <Image
                  alt="hotel-1"
                  h={matchesSm ? 200 : 500}
                  radius="md"
                  src="https://images.trvl-media.com/lodging/7000000/6250000/6248700/6248658/1e9c9eee.jpg?impolicy=resizecrop&rw=455&ra=fit"
                />
              </Grid.Col>
              <Grid.Col
                span={{
                  base: 12,
                  sm: 3,
                }}
              >
                <SimpleGrid
                  cols={{
                    base: 3,
                    sm: 1,
                  }}
                  spacing="xs"
                >
                  <Image
                    alt="hotel-1"
                    h={matchesSm ? 100 : 160}
                    radius="md"
                    src="https://images.trvl-media.com/lodging/7000000/6250000/6248700/6248658/1e9c9eee.jpg?impolicy=resizecrop&rw=455&ra=fit"
                  />
                  <Image
                    alt="hotel-1"
                    h={matchesSm ? 100 : 160}
                    radius="md"
                    src="https://images.trvl-media.com/lodging/7000000/6250000/6248700/6248658/1e9c9eee.jpg?impolicy=resizecrop&rw=455&ra=fit"
                  />
                  <Image
                    alt="hotel-1"
                    h={matchesSm ? 100 : 160}
                    radius="md"
                    src="https://images.trvl-media.com/lodging/7000000/6250000/6248700/6248658/1e9c9eee.jpg?impolicy=resizecrop&rw=455&ra=fit"
                  />
                </SimpleGrid>
              </Grid.Col>
              <Grid.Col
                span={{
                  base: 12,
                  sm: 3,
                }}
              >
                <Stack h="100%" gap="xs">
                  <Paper
                    radius="md"
                    style={{ flexShrink: 0, overflow: "hidden" }}
                  >
                    <Stack gap={0} p="sm" bg="yellow.1">
                      <Group wrap="nowrap">
                        <IconSpeakerphone size={20} style={{ flexShrink: 0 }} />
                        <Text size="sm">
                          Kaçırmayın! Hemen rezervasyonunuzu yapın ve en iyi
                          fiyatları yakalayın!
                        </Text>
                      </Group>
                    </Stack>
                    <Group>
                      <Anchor
                        size="sm"
                        w="100%"
                        bg="dark"
                        px="sm"
                        py="xs"
                        ta="center"
                        c="white"
                      >
                        Şimdi Rezervasyon Yapın
                      </Anchor>
                    </Group>
                  </Paper>
                  <Paper
                    pos="relative"
                    h="100%"
                    bg="gray.2"
                    mih={100}
                    radius="md"
                    style={{ overflow: "hidden", cursor: "pointer" }}
                    onClick={() => openModal("hotelMapDetail")}
                  >
                    <Image
                      h="100%"
                      src={`https://maps.googleapis.com/maps/api/staticmap?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API}&center=36.8643,30.726517&size=400x400&zoom=13`}
                    />
                    <Stack
                      pos="absolute"
                      w="100%"
                      h="100%"
                      justify="center"
                      align="center"
                      top={0}
                      left={0}
                    >
                      <IconMapPinFilled
                        size={30}
                        color="var(--mantine-color-dark-7)"
                      />
                      <Button size="xs">{t("Show on Map")}</Button>
                    </Stack>
                  </Paper>
                </Stack>
              </Grid.Col>
            </Grid>

            <Rooms />

            <Stack>
              <Stack gap={8}>
                <Text size="lg" fw={500}>
                  Konum
                </Text>
                <Text size="sm" c="gray.7">
                  Barın ferah ortamında güzel bir akşam geçir. Lokantada, yerel
                  mutfaktan seçme tatları dene ve dinlenmene bak. Kafede bir
                  fincan kahvenin tadını çıkar; kim bilir, belki de senin için
                  burası kentin en iyi kafesidir. Yakın çevrede, ücretsiz Wi-Fi
                  bağlantısı mevcuttur. Giriş yaparken, ayrıntılı bilgi iste.
                </Text>
              </Stack>
              <Stack gap={8}>
                <Text size="lg" fw={500}>
                  Odadaki malzemeler
                </Text>
                <Text size="sm" c="gray.7">
                  Uzun bir günün ardından rahatlaman için, odada işte bu
                  malzemeleri bulacaksın: Tv, mini bar ve bornoz mevcuttur.
                  Lütfen, listede yer alan hizmetlerin, tüm odalarda mevcut
                  olmayabileceği hususunu dikkate al.
                </Text>
              </Stack>
            </Stack>

            <Stack gap={8}>
              <Text size="lg" fw={500}>
                Olanaklar
              </Text>
              <SimpleGrid
                cols={{
                  base: 3,
                  xs: 4,
                  sm: 5,
                  md: 8,
                }}
                spacing={8}
              >
                {facilities.map(({ icon: Icon, label }, i) => (
                  <Paper key={`item-${i}`} withBorder p="xs">
                    <Stack gap={4} align="center ">
                      <Icon size={20} />
                      <Text size="xs" fw={500} ta="center">
                        {label}
                      </Text>
                    </Stack>
                  </Paper>
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default HotelDetail;
