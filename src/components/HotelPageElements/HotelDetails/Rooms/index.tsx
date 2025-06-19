import { useRouter } from "@/i18n/navigation";
import {
  Badge,
  Button,
  Divider,
  Grid,
  Group,
  HoverCard,
  Image,
  Stack,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconCurrencyLira,
  IconGift,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Rooms = () => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  return (
    <Group w="100%">
      <Stack w="100%">
        <Grid
          styles={{
            inner: {
              borderRadius: "var(--mantine-radius-md)",
              overflow: "hidden",
              background: "var(--mantine-color-blue-0)",
            },
            col: {
              fontSize: "var(--mantine-font-size-sm)",
              fontWeight: 600,
              padding: "8px 10px",
              color: "var(--mantine-color-dark-9)",
            },
          }}
        >
          <Grid.Col
            span={3}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Room informations")}
          </Grid.Col>
          <Grid.Col
            span={3}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Conditions")}
          </Grid.Col>
          <Grid.Col
            span={1}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Number of guests")}
          </Grid.Col>
          <Grid.Col
            span={2}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Price for 1 night")}
          </Grid.Col>
          <Grid.Col
            span={1}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            {t("Number of rooms")}
          </Grid.Col>
          <Grid.Col span={2}></Grid.Col>
        </Grid>

        <Grid
          w="100%"
          styles={{
            col: {
              padding: "8px 10px",
            },
          }}
        >
          <Grid.Col
            span={3}
            style={{ borderRight: "1px solid var(--mantine-color-gray-3)" }}
          >
            <Stack gap="xs">
              <Image
                radius="md"
                h={160}
                src="https://imgkit.otelz.com/turkey/antalya/kas/villatamarahotel9f8342a6.jpg?tr=w-240,h-120,fo-auto,q-80"
              />
              <Text size="sm" fw={600} c="blue">
                İnfinity Oda - Deniz Manzaralı 45m2
              </Text>
              <Group gap={4}>
                {[
                  "Klima",
                  "Oturma Grubu",
                  "Deniz Manzarası",
                  "TV",
                  "LCD TV",
                  "Led TV",
                ].map((item, i) => (
                  <Badge
                    key={`item-${i}`}
                    bg="gray.1"
                    c="dark.9"
                    radius="sm"
                    tt="capitalize"
                    fw={500}
                  >
                    {item}
                  </Badge>
                ))}
                <Tooltip label="Odadaki tüm misafirler için geçerlidir.">
                  <Badge
                    bg="orange.1"
                    c="orange.7"
                    radius="sm"
                    tt="capitalize"
                    fw={500}
                    leftSection={<IconGift size={14} />}
                  >
                    Ücretsiz Şarap
                  </Badge>
                </Tooltip>
                <Tooltip label="Odadaki tüm misafirler için geçerlidir.">
                  <Badge
                    h="auto"
                    bg="orange.1"
                    c="orange.7"
                    radius="sm"
                    tt="capitalize"
                    fw={500}
                    leftSection={<IconGift size={14} />}
                    styles={{
                      label: {
                        textAlign: "left",
                        whiteSpace: "normal",
                        lineClamp: "none",
                      },
                    }}
                  >
                    Ücretsiz Erken Giriş (09.00 Sonrası) - Geç Çıkış (14.00&apos;a
                    Kadar)
                  </Badge>
                </Tooltip>
              </Group>
            </Stack>
          </Grid.Col>
          <Grid.Col span={9}>
            <Stack>
              <Grid
                columns={9}
                styles={{
                  col: {
                    padding: "8px 10px",
                  },
                }}
              >
                <Grid.Col
                  span={3}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <Stack>
                    <Group gap={4}>
                      <Badge
                        variant="light"
                        tt="capitalize"
                        fw={500}
                        radius="sm"
                      >
                        Kahvaltı dahil
                      </Badge>
                      <HoverCard width={250}>
                        <HoverCard.Target>
                          <Badge
                            color="gray"
                            tt="capitalize"
                            fw={500}
                            radius="sm"
                          >
                            İade Yapılamaz
                          </Badge>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                          <Stack gap={0}>
                            <Text size="sm" fw={500}>
                              İade Yapılamaz
                            </Text>
                            <Text size="xs">
                              Rezervasyonun iptali, değiştirilmesi veya
                              kullanılmaması durumunda, toplam tutar sizden
                              alınacaktır.
                            </Text>
                          </Stack>
                        </HoverCard.Dropdown>
                      </HoverCard>
                      <Badge
                        color="yellow"
                        variant="light"
                        tt="capitalize"
                        fw={500}
                        radius="sm"
                      >
                        Erken rezervasyon fırsatı
                      </Badge>
                    </Group>
                  </Stack>
                </Grid.Col>
                <Grid.Col
                  span={1}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <IconUserFilled
                    size={14}
                    color="var(--mantine-color-gray-7)"
                  />
                  <IconUserFilled
                    size={14}
                    color="var(--mantine-color-gray-7)"
                  />
                </Grid.Col>
                <Grid.Col
                  span={2}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <Group c="blue" gap={4}>
                    <IconCurrencyLira size={16} />
                    <Text fw={500} lh={1}>
                      {(14351).toLocaleString(locale)}
                    </Text>
                  </Group>
                </Grid.Col>
                <Grid.Col
                  span={1}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <Text fw={500}>1</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Stack gap={0} align="flex-end">
                    <Text size="xs" c="gray.7">
                      1 Oda 2 Yetişkin
                    </Text>
                    <Text size="sm">Toplam Fiyat</Text>
                    <Group c="blue" gap={4}>
                      <IconCurrencyLira size={16} />
                      <Text fw={500} lh={1}>
                        {(14351).toLocaleString(locale)}
                      </Text>
                    </Group>
                    <Button mt={8} onClick={() => push("/hotel/reservation/1")}>Rezervasyon yap</Button>
                  </Stack>
                </Grid.Col>
              </Grid>

              <Divider />

              <Grid
                columns={9}
                styles={{
                  col: {
                    padding: "8px 10px",
                  },
                }}
              >
                <Grid.Col
                  span={3}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <Stack>
                    <Group gap={4}>
                      <Badge
                        variant="light"
                        tt="capitalize"
                        fw={500}
                        radius="sm"
                      >
                        Kahvaltı dahil
                      </Badge>

                      <HoverCard width={250}>
                        <HoverCard.Target>
                          <Badge
                            color="gray"
                            tt="capitalize"
                            fw={500}
                            radius="sm"
                          >
                            İade Yapılamaz
                          </Badge>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                          <Stack gap={0}>
                            <Text size="sm" fw={500}>
                              İade Yapılamaz
                            </Text>
                            <Text size="xs">
                              Rezervasyonun iptali, değiştirilmesi veya
                              kullanılmaması durumunda, toplam tutar sizden
                              alınacaktır.
                            </Text>
                          </Stack>
                        </HoverCard.Dropdown>
                      </HoverCard>
                      <Badge
                        color="yellow"
                        variant="light"
                        tt="capitalize"
                        fw={500}
                        radius="sm"
                      >
                        Erken rezervasyon fırsatı
                      </Badge>
                    </Group>
                  </Stack>
                </Grid.Col>
                <Grid.Col
                  span={1}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <IconUserFilled
                    size={14}
                    color="var(--mantine-color-gray-7)"
                  />
                  <IconUserFilled
                    size={14}
                    color="var(--mantine-color-gray-7)"
                  />
                </Grid.Col>
                <Grid.Col
                  span={2}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <Group c="blue" gap={4}>
                    <IconCurrencyLira size={16} />
                    <Text fw={500} lh={1}>
                      {(14351).toLocaleString(locale)}
                    </Text>
                  </Group>
                </Grid.Col>
                <Grid.Col
                  span={1}
                  style={{
                    borderRight: "1px solid var(--mantine-color-gray-3)",
                  }}
                >
                  <Text fw={500}>1</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  <Stack gap={0} align="flex-end">
                    <Text size="xs" c="gray.7">
                      1 Oda 2 Yetişkin
                    </Text>
                    <Text size="sm">Toplam Fiyat</Text>
                    <Group c="blue" gap={4}>
                      <IconCurrencyLira size={16} />
                      <Text fw={500} lh={1}>
                        {(14351).toLocaleString(locale)}
                      </Text>
                    </Group>
                    <Button mt={8} onClick={() => push("/hotel/reservation/1")}>
                      Rezervasyon yap
                    </Button>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Group>
  );
};

export default Rooms;
