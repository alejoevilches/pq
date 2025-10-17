"use client";
import { useModalStore } from "@/app/store/modalStore";
import Modal from "./Modal";

export default function GlobalModals() {
  const { openModal, modalProps, closeModal } = useModalStore();

  switch (openModal) {
    case "profile":
      return (
        <Modal title="Perfil" onClose={closeModal}>
          <p>Usuario: {modalProps?.user?.nombre}</p>
        </Modal>
      );

    case "editUser":
      return (
        <Modal title="Editar usuario" onClose={closeModal}>
          <p>Editando ID: {modalProps?.userId}</p>
        </Modal>
      );

    case "delete":
      return (
        <Modal title="Eliminar cuenta" onClose={closeModal}>
          <p>¿Seguro que querés eliminar esta cuenta?</p>
        </Modal>
      );

    default:
      return null;
  }
}