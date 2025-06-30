import { FlightSearchFormProps } from "@/components/SearchArea/Contents/Flight";
import { HotelSearchFormProps } from "@/components/SearchArea/Contents/Hotel";
import { RentalSearchForm } from "@/components/SearchArea/Contents/Rental";
import { removeUserToken, setAccessToken, xiorInstance } from "@/utils/xior";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface SearchStore {
  flightSearch: FlightSearchFormProps;
  hotelSearch: HotelSearchFormProps;
  rentalSearch: RentalSearchForm;

  setSearch: (
    type: "flightSearch" | "hotelSearch" | "rentalSearch",
    data: FlightSearchFormProps | HotelSearchFormProps | RentalSearchForm
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
            child: [],
          },
        ],
        country: "TR",
      },
      rentalSearch: {
        pickupLocation: {
          name: "İstanbul-Sabiha Gökçen Havalimanı (SAW)",
          id: "30",
        },
        dropoffLocation: {
          name: "İstanbul-Sabiha Gökçen Havalimanı (SAW)",
          id: "30",
        },
        pickupDate: new Date(),
        pickupTime: "10:00",
        deliveryDate: new Date(),
        deliveryTime: "10:00",
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
