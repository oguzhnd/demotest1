import { useModalManager } from "@/store/managers/modal";
import { Image, Modal } from "@mantine/core";
import React from "react";

const HotelLoadingModal = () => {
  const { modals, closeModal } = useModalManager();

  return (
    <Modal
      centered
      opened={modals.hotelLoadingModal.opened}
      onClose={() => closeModal("hotelLoadingModal")}
      withCloseButton={false}
      padding={0}
    >
      <Image src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </Modal>
  );
};

export default HotelLoadingModal;
