import React, { FC, useCallback } from "react";
import { FlightTicketType } from ".";
import {
  BackgroundImage,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";

import classes from "../Flight.module.css";
import { useHover } from "@mantine/hooks";
import { IconChevronRight, IconTransfer } from "@tabler/icons-react";
import { localeDateRangeFormat } from "@/utils/tools";
import { useLocale } from "next-intl";
import { useFlightStore } from "@/store/products/flight";
import { xiorInstance } from "@/utils/xior";
import { useSearchStore } from "@/store/search";
import { useRouter } from "@/i18n/navigation";
import {
  convertDate,
  FlightSearchFormProps,
} from "@/components/SearchArea/Contents/Flight";

const TicketCard: FC<FlightTicketType> = ({
  airline,
  class: cabinetClass,
  dates,
  from,
  price,
  to,
}) => {
  const locale = useLocale();

  const { ref, hovered } = useHover();

  const { push } = useRouter();

  const { setFlightList, setFilterOpt } = useFlightStore();
  const { flightSearch, setSearch } = useSearchStore();

  const handleSubmit = useCallback(async () => {
    try {
      const values: FlightSearchFormProps = {
        type: "one-way",
        dep: {
          type: 3,
          geolocation: {
            longitude: "30.8",
            latitude: "36.89",
          },
          airport: {
            name: "Antalya, Antalya Havalimanı, Türkiye (AYT)",
            id: "AYT",
            code: "AYT",
          },
        },
        arr: {
          type: 3,
          geolocation: {
            longitude: "32.995083",
            latitude: "40.128082",
          },
          airport: {
            name: "Ankara, Esenboğa Havalimanı, Türkiye (ESB)",
            id: "ESB",
            code: "ESB",
          },
        },
        departureDate: new Date(),
        returnDate: null,
        passengers: {
          adult: 1,
          child: 0,
          baby: 0,
        },
        class: "economy",
      };

      const val = {
        dep:
          values.dep?.type === 1
            ? values.dep.city?.id
            : values.dep?.airport?.id,
        arr:
          values.arr?.type === 1
            ? values.arr.city?.id
            : values.arr?.airport?.id,
        dDate: convertDate(values.departureDate),
        aDate: convertDate(values.returnDate),
        adt: values.passengers.adult + "",
        chd: values.passengers.child + "",
        inf: values.passengers.baby + "",
        serviceTypes: "",
        nonStop: "0",
      };

      const res = await xiorInstance.post("/searchFlight", val);

      setFlightList(res.data.result);
      setFilterOpt(res.data.filterOpt);
      setSearch("flightSearch", values);
    } catch (err) {
      console.error(err);
    } finally {
      push("/flight/list");
    }
  }, [setSearch]);

  return (
    <Paper
      ref={ref}
      withBorder
      radius="lg"
      p="md"
      style={{ cursor: "pointer" }}
      onClick={handleSubmit}
    >
      <Stack gap="xs">
        <Group justify="space-between">
          <Group gap="xs">
            <Image src={airline.image} w={24} h={24} />
            <Text size="sm" lh={1}>
              {airline.name}
            </Text>
          </Group>

          <IconChevronRight
            size={20}
            color="var(--mantine-color-blue-7)"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(0px)" : "translateX(-16px)",
              transition: "all .1s ease",
            }}
          />
        </Group>
        <Group gap={4}>
          <Text size="sm" fw={500}>
            {from}
          </Text>
          <IconTransfer size={16} />
          <Text size="sm" fw={500}>
            {to}
          </Text>
        </Group>

        <Group justify="space-between" align="flex-end">
          <Stack gap={0}>
            <Text size="xs">
              {dates[0].toLocaleDateString(locale, {
                weekday: "short",
                month: "short",
                day: "2-digit",
              })}{" "}
              -{" "}
              {dates[1].toLocaleDateString(locale, {
                weekday: "short",
                month: "short",
                day: "2-digit",
              })}
            </Text>
            <Text size="xs">{cabinetClass}</Text>
          </Stack>
          <Text fw={500}>{price.toLocaleString(locale)} $</Text>
        </Group>
      </Stack>
    </Paper>
  );
};

export default TicketCard;
