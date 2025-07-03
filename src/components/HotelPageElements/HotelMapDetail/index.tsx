import { CastlesGeojson } from "@/app/[locale]/(blank)/hotel/list/map/hotels";
import { useModalManager } from "@/store/managers/modal";
import { CloseButton, LoadingOverlay, Modal } from "@mantine/core";
import { Map } from "@vis.gl/react-google-maps";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ClusteredMarkers } from "../_MapList/ClusteredMarkers";
import { HotelType, useHotelStore } from "@/store/products/hotel";
import { useSearchStore } from "@/store/search";
import { useListState, useMediaQuery } from "@mantine/hooks";
import { xiorInstance } from "@/utils/xior";
import { useLoading } from "@/utils/hooks/useLoading";
import { convertDate } from "@/components/SearchArea/Contents/Flight";
import { pick } from "lodash";
import { useLocale } from "next-intl";
import { FeatureMarker } from "../_MapList/FeatureMarker";
import HotelListCard from "../HotelListCard";
import { useRouter } from "@/i18n/navigation";

const HotelMapDetail = () => {
  const locale = useLocale();

  const { modals, closeModal } = useModalManager();

  const { push } = useRouter();

  const {
    hotelFilters,
    bookingHotel,
    setBookingHotel,
    setFilterOpt,
    setHotelList,
  } = useHotelStore();
  const { hotelSearch } = useSearchStore();

  const [loading, startLoading, stopLoading] = useLoading();

  const [center, setCenter] = useState({
    lat: 41.10711,
    lng: 29.019195,
  });

  const matchesSm = useMediaQuery("(max-width: 48em)");

  const [geojson, setGeojson] = useState<CastlesGeojson | null>(null);
  const [selectedHotel, setSelectedHotel] = useState<string>("Q170495");
  const [activeHotel, setActiveHotel] = useState<null | string>(null);

  const [currentHotelList, hotelListHandlers] = useListState<HotelType>([]);

  const checkFlightList = useCallback(async () => {
    if (loading) {
      return true;
    }

    startLoading();
    try {
      const res = await xiorInstance.post("/searchLocation", {
        product: "1",
        location: hotelSearch.hotel?.id,
        name: hotelSearch.hotel?.name,
        checkIn: convertDate(hotelSearch.checkIn),
        checkOut: convertDate(hotelSearch.checkOut),
        rooms: hotelSearch.rooms.map((e) => ({
          adult: `${e.adult}`,
          child: e.child,
        })),
        language: locale,
      });

      console.log(res);

      hotelListHandlers.setState(res.data.list);
      setFilterOpt(
        pick(res.data, [
          "boardGroups",
          "facilities",
          "iconList",
          "ratings",
          "roomTypes",
          "stars",
          "themes",
        ])
      );
    } catch (err) {
      console.error(err);
    } finally {
      stopLoading();
    }
  }, [loading, xiorInstance, hotelSearch]);

  const handleClose = useCallback(() => {
    hotelListHandlers.setState([]);
    closeModal("hotelMapDetail");
  }, []);

  useEffect(() => {
    if (bookingHotel?.hotelID) {
      setActiveHotel(bookingHotel?.hotelID);
    }
    if (modals.hotelMapDetail.opened) {
      checkFlightList();
    }
  }, [hotelSearch, modals.hotelMapDetail.opened]);

  useEffect(() => {
    console.log(bookingHotel);
    setCenter({
      lat: +(bookingHotel?.latitude || 41.10711),
      lng: +(bookingHotel?.longitude || 29.019195),
    });

    bookingHotel?.hotelID && setSelectedHotel(bookingHotel?.hotelID);

    setGeojson({
      type: "FeatureCollection",
      features: currentHotelList.map((e) => ({
        type: "Feature",
        id: e.hotelID,
        geometry: {
          type: "Point",
          coordinates: [+e.longitude, +e.latitude],
        },
        properties: {
          name: e.title,
          price:
            +e.roomDetail[0].priceDetail.salesPrice * e.roomDetail[0].night,
        },
      })),
    });
  }, [bookingHotel, currentHotelList]);

  const activeHotelData = useMemo(
    () => currentHotelList.find((e) => e.hotelID === activeHotel),
    [activeHotel, currentHotelList]
  );

  return (
    <Modal
      opened={modals.hotelMapDetail.opened}
      onClose={handleClose}
      size="100%"
      withCloseButton={false}
      padding={0}
    >
      <CloseButton
        size="lg"
        bg="white"
        pos="absolute"
        top={16}
        right={16}
        style={{ zIndex: 10 }}
        onClick={handleClose}
      />

      <LoadingOverlay visible={loading} />

      <Map
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        style={{ width: "100%", height: "calc(100vh - 94.5px)" }}
        defaultCenter={center}
        center={center}
        onCenterChanged={(event) => {
          setCenter(event.detail.center);
        }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        mapTypeControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        scaleControl={false}
        onClick={() => setActiveHotel(null)}
      >
        {bookingHotel && (
          <FeatureMarker
            key={bookingHotel.hotelID}
            featureId={bookingHotel.hotelID as string}
            position={{
              lat: +bookingHotel?.latitude,
              lng: +bookingHotel?.longitude,
            }}
            selected={selectedHotel === bookingHotel.hotelID}
            active={activeHotel === bookingHotel.hotelID}
            onMarkerClick={(_, featureId) => setActiveHotel(featureId)}
            properties={{
              name: bookingHotel.title,
              price:
                +bookingHotel?.roomDetail?.[0]?.priceDetail.salesPrice *
                bookingHotel?.roomDetail?.[0]?.night,
            }}
          />
        )}
        {geojson && (
          <ClusteredMarkers
            geojson={geojson}
            activeHotel={activeHotel || null}
            onClick={setActiveHotel}
          />
        )}

        {activeHotel && activeHotelData && (
          <HotelListCard
            hotel={activeHotelData}
            onSelect={() => push(`/hotel/detail/${activeHotelData.providerID}`)}
            onClose={() => setActiveHotel(null)}
            style={{
              width: matchesSm ? "calc(100% - 32px)" : undefined,
              position: "fixed",
              bottom: 32,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        )}
      </Map>
    </Modal>
  );
};

export default HotelMapDetail;
