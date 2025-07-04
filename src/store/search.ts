import { FlightSearchFormProps } from "@/components/SearchArea/Contents/Flight";
import { HotelSearchFormProps } from "@/components/SearchArea/Contents/Hotel";
import { RentalSearchForm } from "@/components/SearchArea/Contents/Rental";
import { TourSearchForm } from "@/components/SearchArea/Contents/Tour";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface SearchStore {
  flightSearch: FlightSearchFormProps;
  hotelSearch: HotelSearchFormProps;
  rentalSearch: RentalSearchForm;
  tourSearch: TourSearchForm;

  setSearch: (
    type: "flightSearch" | "hotelSearch" | "rentalSearch" | "tourSearch",
    data:
      | FlightSearchFormProps
      | HotelSearchFormProps
      | RentalSearchForm
      | TourSearchForm
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
        differentDropoff: false,
        pickupLocation: {
          name: "İstanbul-Sabiha Gökçen Havalimanı (SAW)",
          city: "Pendik",
          country: "Türkiye",
          id: "30",
        },
        dropoffLocation: {
          name: "İstanbul-Sabiha Gökçen Havalimanı (SAW)",
          city: "Pendik",
          country: "Türkiye",
          id: "30",
        },
        pickupDate: new Date(),
        pickupTime: "10:00",
        deliveryDate: new Date(),
        deliveryTime: "10:00",
      },
      tourSearch: {
        tour: undefined,
        date: new Date(),
        passengers: {
          adult: 1,
          child: 0,
          baby: 0,
        },
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
