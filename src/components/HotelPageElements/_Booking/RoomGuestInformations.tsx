import { useHotelStore } from "@/store/products/hotel";
import { useSearchStore } from "@/store/search";
import {
  Badge,
  Button,
  Checkbox,
  Divider,
  Grid,
  Group,
  HoverCard,
  Image,
  Input,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useMediaQuery } from "@mantine/hooks";
import { IconInfoCircle } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import React from "react";
import { IMaskInput } from "react-imask";

const RoomGuestInformations = () => {
  const t = useTranslations();

  const { bookingHotel, bookingOffer, bookingRoom } = useHotelStore();
  const { flightSearch } = useSearchStore();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const Parent = matchesSm ? Stack : Group;

  return (
    <Paper withBorder p="md">
      <Stack>
        <Group wrap="nowrap">
          <Image
            w={matchesSm ? "100%" : 200}
            h={120}
            radius="md"
            src={bookingRoom}
          />
          <Stack mih={120} w="100%" gap={4}>
            <Text size="md" fw={600} c="blue">
              {bookingRoom?.roomName}
            </Text>
            <Group gap="xs">
              <Group gap={4}>
                <Text size="sm" fw={500}>
                  Konuk Sayısı:
                </Text>
                <Text size="sm" c="gray.7">
                  {bookingRoom?.travellers.length}
                </Text>
              </Group>
              <Group gap={4}>
                <Text size="sm" fw={500}>
                  Oda Sayısı:
                </Text>
                <Text size="sm" c="gray.7">
                  1
                </Text>
              </Group>
            </Group>
            <Group mt="xs">
              <HoverCard width={250}>
                <HoverCard.Target>
                  <Badge color="gray" tt="capitalize" fw={500} radius="sm">
                    İade Yapılamaz
                  </Badge>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Stack gap={0}>
                    <Text size="sm" fw={500}>
                      İade Yapılamaz
                    </Text>
                    <Text size="xs">
                      Rezervasyonun iptali, değiştirilmesi veya kullanılmaması
                      durumunda, toplam tutar sizden alınacaktır.
                    </Text>
                  </Stack>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </Stack>
        </Group>
        <Divider />
        <Stack gap={8}>
          <Text size="xs" fw={500}>
            Bu odadaki konuklar
          </Text>
          {[
            ...Array(flightSearch.passengers.adult).fill("adult"),
            ...Array(flightSearch.passengers.child).fill("child"),
            ...Array(flightSearch.passengers.baby).fill("baby"),
          ].map((traveller, i) => {
            if (traveller === "adult") {
              return (
                <Parent key={`traveller-${i}`} gap={4}>
                  <Text size="xs" fw={500} c="gray.7" w={70}>
                    {t("Adult")}
                  </Text>
                  <Grid w="100%" gutter={8}>
                    <Grid.Col
                      span={{
                        base: 12,
                        xs: 6,
                        sm: 2,
                      }}
                    >
                      <TextInput placeholder={t("Name")} />
                    </Grid.Col>
                    <Grid.Col
                      span={{
                        base: 12,
                        xs: 6,
                        sm: 2,
                      }}
                    >
                      <TextInput placeholder={t("Surname")} />
                    </Grid.Col>
                    {i === 0 && (
                      <Grid.Col
                        span={{
                          base: 12,
                          xs: 6,
                          sm: 3,
                        }}
                      >
                        <TextInput placeholder={t("E-Mail")} />
                      </Grid.Col>
                    )}
                    {i === 0 && (
                      <Grid.Col
                        span={{
                          base: 12,
                          xs: 6,
                          sm: 5,
                        }}
                      >
                        <Group wrap="nowrap" gap={4} align="flex-start">
                          <Select
                            w={130}
                            maw="100%"
                            style={{
                              flexShrink: 0,
                            }}
                            placeholder={t("Country Code")}
                            data={["+1", "+90"]}
                          />
                          <Input.Wrapper w="100%">
                            <Input
                              component={IMaskInput}
                              mask="000 000 00 00"
                              placeholder={t("Phone Number")}
                            />
                          </Input.Wrapper>
                        </Group>
                      </Grid.Col>
                    )}
                  </Grid>
                </Parent>
              );
            } else if (traveller === "child") {
              return (
                <Parent key={`traveller-${i}`} gap={4}>
                  <Text size="xs" fw={500} c="gray.7" w={70}>
                    {t("Child")}
                  </Text>
                  <Grid w="100%" gutter={8}>
                    <Grid.Col
                      span={{
                        base: 12,
                        xs: 6,
                        sm: 2,
                      }}
                    >
                      <TextInput placeholder={t("Name")} />
                    </Grid.Col>
                    <Grid.Col
                      span={{
                        base: 12,
                        xs: 6,
                        sm: 2,
                      }}
                    >
                      <TextInput placeholder={t("Surname")} />
                    </Grid.Col>
                    <Grid.Col
                      span={{
                        base: 12,
                        xs: 6,
                        sm: 3,
                      }}
                    >
                      <DatePickerInput placeholder={t("Birth Date")} />
                    </Grid.Col>
                  </Grid>
                </Parent>
              );
            } else if (traveller === "baby") {
              return (
                <Parent key={`traveller-${i}`} gap={4}>
                  <Text size="xs" fw={500} c="gray.7" w={70}>
                    {t("Baby")}
                  </Text>
                  <Grid w="100%" gutter={8}>
                    <Grid.Col
                      span={{
                        base: 12,
                        xs: 6,
                        sm: 2,
                      }}
                    >
                      <TextInput placeholder={t("Name")} />
                    </Grid.Col>
                    <Grid.Col
                      span={{
                        base: 12,
                        xs: 6,
                        sm: 2,
                      }}
                    >
                      <TextInput placeholder={t("Surname")} />
                    </Grid.Col>
                    <Grid.Col
                      span={{
                        base: 12,
                        xs: 6,
                        sm: 3,
                      }}
                    >
                      <DatePickerInput placeholder={t("Birth Date")} />
                    </Grid.Col>
                  </Grid>
                </Parent>
              );
            }
          })}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default RoomGuestInformations;
