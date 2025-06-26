import { create } from "zustand";

export interface ModalManager {
  modals: Record<
    string,
    {
      opened: boolean;
    }
  >;

  openModal: (name: string) => void;
  closeModal: (name: string) => void;
}

export const useModalManager = create<ModalManager>((set, get) => ({
  modals: {
    accountModal: {
      opened: false,
    },
    hotelMapDetail: {
      opened: false,
    },
    queryTransaction: {
      opened: false
    }
  },

  openModal: (name) => {
    set({
      modals: {
        ...get().modals,
        [name]: {
          opened: true,
        },
      },
    });
  },

  closeModal: (name) => {
    set({
      modals: {
        ...get().modals,
        [name]: {
          opened: false,
        },
      },
    });
  },
}));
