import { useModalManager } from "@/store/managers/modal";
import { Carousel } from "@mantine/carousel";
import { Image, Modal } from "@mantine/core";
import React from "react";

const FlightLoadingModal = () => {
  const { modals, closeModal } = useModalManager();

  const flightAds = [
    "https://img.freepik.com/free-photo/view-3d-airplane-with-wings-engine_23-2151022210.jpg",
  ];

  return (
    <Modal
      centered
      opened={modals.flightLoadingModal.opened}
      onClose={() => {}}
      withCloseButton={false}
      padding={0}
    >
      <Carousel
        withIndicators={flightAds.length > 1}
        withControls={flightAds.length > 1}
        emblaOptions={{
          loop: true,
        }}
      >
        {flightAds.map((ad, i) => (
          <Image key={`ad-${i}`} src={ad} />
        ))}
      </Carousel>
    </Modal>
  );
};

export default FlightLoadingModal;
