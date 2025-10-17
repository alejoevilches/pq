import { create } from "zustand";

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