"use client";
import { useModalStore } from "@/app/store/modalStore";
import Modal from "./Modal";
import AddPlaceModal from "../profile/AddPlaceModal";

export default function GlobalModals() {
  const { openModal, closeModal } = useModalStore();

  switch (openModal) {
    case "addPlace":
      return (
        <Modal title="Agregar Lugar" onClose={closeModal}>
          <AddPlaceModal />
        </Modal>
      );
    default:
      return null;
  }
}