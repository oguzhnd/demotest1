import {
  CastlesGeojson,
  loadCastlesGeojson,
} from "@/app/[locale]/(blank)/hotel/list/map/hotels";
import { useModalManager } from "@/store/managers/modal";
import { CloseButton, Modal } from "@mantine/core";
import { Map } from "@vis.gl/react-google-maps";
import React, { useCallback, useEffect, useState } from "react";
import { ClusteredMarkers } from "../_MapList/ClusteredMarkers";

const HotelMapDetail = () => {
  const { modals, closeModal } = useModalManager();

  const handleClose = useCallback(() => {
    closeModal("hotelMapDetail");
  }, []);

  const center = {
    lat: 41.10711,
    lng: 29.019195,
  };

  const [geojson, setGeojson] = useState<CastlesGeojson | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<string>("Q170495");
  const [activeHotel, setActiveHotel] = useState<null | string>(null);

  useEffect(() => {
    void loadCastlesGeojson().then((data) => setGeojson(data));
  }, []);

  return (
    <Modal
      opened={modals.hotelMapDetail.opened}
      onClose={handleClose}
      size="100%"
      withCloseButton={false}
      padding={0}
    >
      <CloseButton size="lg" bg="white" pos="absolute" top={16} right={16} style={{ zIndex: 10 }} />

      <Map
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        style={{ width: "100%", height: "calc(100vh - 94.5px)" }}
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
            selectedHotel={selectedHotel}
            onClick={setActiveHotel}
          />
        )}
      </Map>
    </Modal>
  );
};

export default HotelMapDetail;
