"use client";

import HotelListFilters from "@/components/HotelPageElements/HotelListFilters";
import { useRouter } from "@/i18n/navigation";
import { ActionIcon, Button, Drawer, Group, Stack, Text } from "@mantine/core";
import { IconFilter, IconX } from "@tabler/icons-react";
import { InfoWindow, Map } from "@vis.gl/react-google-maps";
import { useTranslations } from "next-intl";
import React, { useCallback, useEffect, useState } from "react";
import { CastlesGeojson, loadCastlesGeojson } from "./hotels";
import { Feature, Point } from "geojson";
import { ClusteredMarkers } from "@/components/HotelPageElements/_MapList/ClusteredMarkers";
import HotelListCard from "@/components/HotelPageElements/HotelListCard";

const defaultMapProps = {
  mapContainerStyle: {
    width: "100%",
    height: "calc(100vh - 60px)",
  },
  center: {
    lat: 41.10711,
    lng: 29.019195,
  },
  zoom: 9,
  options: {
    tilt: 0,
    gestureHandling: "auto",
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  },
};

const HotelListMap = () => {
  const t = useTranslations();

  const { push } = useRouter();

  const [opened, setOpened] = useState(false);

  const center = {
    lat: 41.10711,
    lng: 29.019195,
  };

  const [geojson, setGeojson] = useState<CastlesGeojson | null>(null);
  const [activeHotel, setActiveHotel] = useState<null | string>(null);

  useEffect(() => {
    void loadCastlesGeojson().then((data) => setGeojson(data));
  }, []);

  return (
    <Stack gap={0}>
      <Group h={60} px="sm" justify="space-between">
        <Group>
          <Button
            leftSection={<IconFilter size={16} />}
            variant="subtle"
            onClick={() => setOpened(true)}
          >
            {t("Filters")}
          </Button>
          <Text fw={500}>Paris, Fransa</Text>
        </Group>

        <ActionIcon
          size="lg"
          variant="subtle"
          onClick={() => push("/hotel/list")}
        >
          <IconX size={16} />
        </ActionIcon>
      </Group>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size="sm"
        position="left"
        title={t("Filters")}
      >
        <HotelListFilters />
      </Drawer>

      <Map
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        style={{ width: "100%", height: "calc(100vh - 60px)" }}
        defaultCenter={center}
        defaultZoom={10}
        gestureHandling={"greedy"}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        scaleControl={false}
        onClick={() => setActiveHotel(null)}
      >
        {geojson && (
          <ClusteredMarkers
            geojson={geojson}
            activeHotel={activeHotel}
            onClick={setActiveHotel}
          />
        )}
      </Map>

      {/* {activeHotel && (
        <HotelListCard
          onSelect={() => push("/hotel/detail/1")}
          onClose={() => setActiveHotel(null)}
          style={{
            position: "fixed",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)"
          }}
        />
      )} */}
    </Stack>
  );
};

export default HotelListMap;
