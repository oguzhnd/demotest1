import { TourListFiltersForm } from "@/components/TourPageElements/TourListFilters";
import { create } from "zustand";

export interface TourType {}

export interface TourStore {
  tourList: TourType[];
  setTourList: (tours: TourStore["tourList"]) => void;

  filterOpt: Record<string, any>;
  setFilterOpt: (filterOpt: TourStore["filterOpt"]) => void;

  tourFilters: TourListFiltersForm;
  setTourFilters: (filters: TourStore["tourFilters"]) => void;

  bookingTour:
    | (TourType & {
        packetIndex: number;
      })
    | undefined;
  setBookingTour: (value: TourStore["bookingTour"]) => void;
}

export const useTourStore = create<TourStore>((set) => ({
  tourList: [],
  setTourList: (tourList) => {
    set({
      tourList,
    });
  },

  filterOpt: {
    boardGroups: [],
    facilities: [],
    iconList: [],
    ratings: [],
    roomTypes: [],
    stars: [],
    themes: [],
  },
  setFilterOpt: (filterOpt) => {
    set({
      filterOpt,
    });
  },

  tourFilters: {
    boardGroups: [],
    facilities: [],
    ratings: [],
    roomTypes: [],
    stars: [],
    themes: [],
  },
  setTourFilters: (filters) => {
    set({
      tourFilters: filters,
    });
  },

  bookingTour: undefined,
  setBookingTour: (value) => {
    set({
      bookingTour: value,
    });
  },
}));
