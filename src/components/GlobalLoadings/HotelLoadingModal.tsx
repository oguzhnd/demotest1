import { useModalManager } from "@/store/managers/modal";
import { Carousel } from "@mantine/carousel";
import { Image, Modal } from "@mantine/core";
import React from "react";

const HotelLoadingModal = () => {
  const { modals, closeModal } = useModalManager();

  const hotelAds = [
    "https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Modal
      centered
      opened={modals.hotelLoadingModal.opened}
      onClose={() => {}}
      withCloseButton={false}
      padding={0}
    >
      <Carousel
        withIndicators={hotelAds.length > 1}
        withControls={hotelAds.length > 1}
        emblaOptions={{
          loop: true,
        }}
      >
        {hotelAds.map((ad, i) => (
          <Image key={`ad-${i}`} src={ad} />
        ))}
      </Carousel>
    </Modal>
  );
};

export default HotelLoadingModal;
