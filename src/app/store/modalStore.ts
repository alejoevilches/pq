import { create } from "zustand";

//TODO: Por seguridad, esto deberia ser un enum
type ModalName = string | null;

interface ModalStore {
  openModal: ModalName;
  modalProps: any;
  setOpenModal: (modalName: ModalName, props?: any) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  openModal: null,
  modalProps: null,
  setOpenModal: (name, props = null) => set({ openModal: name, modalProps: props }),
  closeModal: () => set({ openModal: null, modalProps: null }),
}));