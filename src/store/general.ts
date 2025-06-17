import { create } from "zustand";

export interface GeneralStore {
  promoBanner: string
  help: {
    number: string
    whatsapp: string
  }

  headerPinned: boolean;
  setHeaderPinned: (value: boolean) => void;
}

export const useGeneralStore = create<GeneralStore>((set) => ({
  products: ["hotel", "flight", "rental"],
  
  promoBanner: "Yaz Fırsatları %30'a Varan İndirimlerle Başladı!",
  help: {
    number: "444 4 444",
    whatsapp: ""
  },

  headerPinned: true,

  setHeaderPinned: (value) => set({ headerPinned: value }),
}));
