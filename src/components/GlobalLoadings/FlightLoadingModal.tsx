import { useModalManager } from "@/store/managers/modal";
import { Image, Modal } from "@mantine/core";
import React from "react";

const FlightLoadingModal = () => {
  const { modals, closeModal } = useModalManager();

  return (
    <Modal
      centered
      opened={modals.flightLoadingModal.opened}
      onClose={() => closeModal("flightLoadingModal")}
      withCloseButton={false}
      padding={0}
    >
      <Image src="https://img.freepik.com/free-photo/view-3d-airplane-with-wings-engine_23-2151022210.jpg" />
    </Modal>
  );
};

export default FlightLoadingModal;
