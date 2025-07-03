import { useModalManager } from "@/store/managers/modal";
import { Image, Modal } from "@mantine/core";
import React from "react";

const RentalLoadingModal = () => {
  const { modals, closeModal } = useModalManager();

  return (
    <Modal
      centered
      opened={modals.rentalLoadingModal.opened}
      onClose={() => closeModal("rentalLoadingModal")}
      withCloseButton={false}
      padding={0}
    >
      <Image src="https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?_gl=1*yvd7ok*_ga*MTI5Nzg1NTY1OC4xNzUxNTQ3Mjgw*_ga_8JE65Q40S6*czE3NTE1NDcyNzkkbzEkZzEkdDE3NTE1NDcyODQkajU1JGwwJGgw" />
    </Modal>
  );
};

export default RentalLoadingModal;
