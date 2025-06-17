import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface GlobalStore {
  currency: string;

  setCurrency: (value: GlobalStore["currency"]) => void;
}

export const useGlobalStore = create(
  persist<GlobalStore>(
    (set) => ({
      currency: "TRY",
      setCurrency: (currency) => {
        set({
          currency,
        });
      },
    }),
    {
      name: "global-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
