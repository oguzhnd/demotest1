import { create } from "zustand";

export interface DrawerManager {
  drawers: Record<
    string,
    {
      opened: boolean;
      type?: "add" | "edit";
      data?: any;
    }
  >;

  openDrawer: (name: string, type?: "add" | "edit", data?: any) => void;
  closeDrawer: (name: string) => void;
}

export const useDrawerManager = create<DrawerManager>((set, get) => ({
  drawers: {
    mobileHeader: {
      opened: false,
    },
    passengerDrawer: {
      opened: false,
    },
    passportDrawer: {
      opened: false
    },
    mileCardDrawer: {
      opened: false
    },
    billingInformationDrawer: {
      opened: false
    }
  },

  openDrawer: (name, type = "add", data) => {
    set({
      drawers: {
        ...get().drawers,
        [name]: {
          opened: true,
          type,
          data,
        },
      },
    });
  },

  closeDrawer: (name) => {
    set({
      drawers: {
        ...get().drawers,
        [name]: {
          opened: false,
          type: "add",
          data: undefined,
        },
      },
    });
  },
}));
