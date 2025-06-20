import { create } from "zustand";

export interface FlightType {

}

export interface FlightStore {
  flights: FlightType[]
}

export const useFlightStore = create<FlightStore>((set) => ({
  flights: []
}));
