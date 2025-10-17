"use client";
import { useModalStore } from "@/app/store/modalStore";
import Modal from "./Modal";

export default function GlobalModals() {
  const { openModal, modalProps, closeModal } = useModalStore();

  switch (openModal) {
    case "addPlace":
      return (
        <Modal title="Agregar Lugar" onClose={closeModal}>
          <p>Holis</p>
        </Modal>
      );

    default:
      return null;
  }
}