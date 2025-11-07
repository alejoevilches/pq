"use client";
import { useModalStore } from "@/app/store/modalStore";
import Modal from "./Modal";
import AddPlaceModal from "../profile/AddPlaceModal";
import DeletePlaceModal from "../profile/DeletePlaceModal";
import AddTripModal from "../trips/AddTripModal";

export default function GlobalModals() {
  const { openModal, closeModal } = useModalStore();

  switch (openModal) {
    case "addPlace":
      return (
        <Modal title="Agregar Lugar" onClose={closeModal}>
          <AddPlaceModal />
        </Modal>
      );
    case "deletePlace":
      return(
        <Modal title="Eliminar Lugar" onClose={closeModal}>
          <DeletePlaceModal />
        </Modal>
      );
    case "addTrip":
      return(
        <Modal title="Agregar Viaje" onClose={closeModal}>
          <AddTripModal />
        </Modal>
      );
    default:
      return null;
  }
}