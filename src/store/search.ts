import { FlightSearchFormProps } from "@/components/SearchArea/Contents/Flight";
import { HotelSearchFormProps } from "@/components/SearchArea/Contents/Hotel";
import { removeUserToken, setAccessToken, xiorInstance } from "@/utils/xior";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface SearchStore {
  flightSearch: FlightSearchFormProps;
  hotelSearch: HotelSearchFormProps;

  setSearch: (
    type: "flightSearch" | "hotelSearch",
    data: FlightSearchFormProps | HotelSearchFormProps
  ) => void;
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
      hotelSearch: {
        hotel: undefined,
        checkIn: new Date(),
        checkOut: new Date(),
        rooms: [
          {
            adult: 1,
            child: 0,
          },
        ],
        country: "TR",
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
