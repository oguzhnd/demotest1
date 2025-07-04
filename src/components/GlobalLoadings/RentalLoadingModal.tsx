import { useModalManager } from "@/store/managers/modal";
import { Carousel } from "@mantine/carousel";
import { Image, Modal } from "@mantine/core";
import React from "react";

const RentalLoadingModal = () => {
  const { modals, closeModal } = useModalManager();

  const rentalAds = [
    "https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?_gl=1*yvd7ok*_ga*MTI5Nzg1NTY1OC4xNzUxNTQ3Mjgw*_ga_8JE65Q40S6*czE3NTE1NDcyNzkkbzEkZzEkdDE3NTE1NDcyODQkajU1JGwwJGgw",
  ];

  return (
    <Modal
      centered
      opened={modals.rentalLoadingModal.opened}
      onClose={() => {}}
      withCloseButton={false}
      padding={0}
    >
      <Carousel
        withIndicators={rentalAds.length > 1}
        withControls={rentalAds.length > 1}
        emblaOptions={{
          loop: true,
        }}
      >
        {rentalAds.map((ad, i) => (
          <Image key={`ad-${i}`} src={ad} />
        ))}
      </Carousel>
    </Modal>
  );
};

export default RentalLoadingModal;
