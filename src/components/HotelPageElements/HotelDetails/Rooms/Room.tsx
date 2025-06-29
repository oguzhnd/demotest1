import { useRouter } from "@/i18n/navigation";
import {
  Badge,
  Button,
  Grid,
  Group,
  HoverCard,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconCurrencyLira, IconUserFilled } from "@tabler/icons-react";
import { useLocale, useTranslations } from "next-intl";
import { FC } from "react";
import { RoomDetailType } from ".";

const Room: FC<{
  room: {
    roomName: "Junior Suite";
    boardName: "Ultra All Inclusive";
  };
  details: RoomDetailType;
  onSelect: () => void
}> = ({ details, room, onSelect }) => {
  const t = useTranslations();
  const locale = useLocale();

  const { push } = useRouter();

  const matchesSm = useMediaQuery("(max-width: 48em)");

  return matchesSm ? (
    <Paper p="sm" bg="gray.1">
      <Stack>
        <Group gap={0}>
          <IconUserFilled size={14} color="var(--mantine-color-gray-7)" />
          <IconUserFilled size={14} color="var(--mantine-color-gray-7)" />
        </Group>
        <Group gap={4}>
          <Badge variant="light" tt="capitalize" fw={500} radius="sm">
            Kahvaltı dahil
          </Badge>
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

        <Stack align="center">
          <Stack gap={0} align="center">
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
        </Stack>
      </Stack>
    </Paper>
  ) : (
    <Grid
      w="100%"
      columns={9}
      styles={{
        col: {
          padding: "8px 10px",
        },
      }}
    >
      <Grid.Col
        span={4}
        style={{
          borderRight: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        <Stack gap={8}>
          <Text size="sm">{details.roomName}</Text>
          <Group gap={4}>
            {room.boardName.split(",").map((e, i) =>
              e !== "" ? (
                <Badge
                  key={`board-${i}`}
                  variant="light"
                  tt="capitalize"
                  fw={500}
                  radius="sm"
                >
                  {e}
                </Badge>
              ) : undefined
            )}
            {/* <HoverCard width={250}>
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
            </HoverCard> */}
            {/* <Badge
              color="yellow"
              variant="light"
              tt="capitalize"
              fw={500}
              radius="sm"
            >
              Erken rezervasyon fırsatı
            </Badge> */}
          </Group>
        </Stack>
      </Grid.Col>
      <Grid.Col
        span={1}
        style={{
          borderRight: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        {details.travellers.map((t, i) => (
          <IconUserFilled
            key={`traveller-${i}`}
            size={14}
            color="var(--mantine-color-gray-7)"
          />
        ))}
      </Grid.Col>
      <Grid.Col
        span={2}
        style={{
          borderRight: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        <Group c="blue" gap={4} wrap="nowrap">
          <Text fw={500} lh={1}>
            {(+details.price).toLocaleString(locale)} {details.currency}
          </Text>
        </Group>
      </Grid.Col>
      {/* <Grid.Col
        span={1}
        style={{
          borderRight: "1px solid var(--mantine-color-gray-3)",
        }}
      >
        <Text fw={500}>1</Text>
      </Grid.Col> */}
      <Grid.Col span={2}>
        <Stack gap={0} align="flex-end">
          <Text size="xs" c="gray.7">
            1 {t("Room")} {details.travellers.length} {t("Guest")}
          </Text>
          <Text size="sm">{t("Total Price")}</Text>
          <Group c="blue" gap={4}>
            <Text fw={500} lh={1}>
              {(+details.price * details.travellers.length).toLocaleString(
                locale
              )}
            </Text>
            {details.currency}
          </Group>
          <Button mt={8} onClick={() => onSelect()}>
            {t("Make a reservation")}
          </Button>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default Room;
