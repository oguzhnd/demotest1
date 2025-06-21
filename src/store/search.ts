import { FlightSearchFormProps } from "@/components/SearchArea/Contents/Flight";
import { removeUserToken, setAccessToken, xiorInstance } from "@/utils/xior";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface SearchStore {
  flightSearch: FlightSearchFormProps;

  setSearch: (type: "flightSearch", data: FlightSearchFormProps) => void;
}

export const useSearchStore = create(
  persist<SearchStore>(
    (set) => ({
      flightSearch: {
        type: "one-way",
        dep: undefined,
        arr: undefined,
        departureDate: new Date(),
        returnDate: null,
        passengers: {
          adult: 1,
          child: 0,
          baby: 0,
        },
        class: "economy",
      },
      setSearch: (type, data) => {
        set({
          [type]: data,
        });
      },
    }),
    {
      name: "search-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
