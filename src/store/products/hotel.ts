import { RoomDetailType } from "@/components/HotelPageElements/HotelDetails/Rooms";
import { HotelListFiltersForm } from "@/components/HotelPageElements/HotelListFilters";
import { create } from "zustand";

export interface HotelType {
  hotelID: "c68fe42a-9f44-48e8-9863-31cc272b06a7";
  providerID: "100910";
  title: "Xanadu Resort";
  longitude: "31.117466";
  latitude: "36.840168";
  stars: 5;
  rating: "5.22";
  hotelThemes: "";
  hotelfreeamenities: "Air conditioning,Foyer,Lifts,Small supermarket,Shops,Hairdresser,Bar(s),Pub(s),Nightclub,Theatre,Games room,Restaurant(s),Conference Room,Internet access,WLAN access,Room Service,Laundry Service,Car Park,Kids Club,Playground,TV Room";
  hotelfreeamenitiesId: "67,74,75,78,79,80,81,82,83,84,87,88,92,94,95,96,97,101,103,104,194";
  locationName: "Belek";
  locationCountryId: "TR";
  locationProvider: 2;
  locationIsTopRegion: false;
  locationId: "23488";
  internationalCode: "TR";
  countryName: "Turkey";
  countryProvider: 2;
  countryIsTopRegion: false;
  cityName: "Belek";
  cityCountryId: "TR";
  cityProvider: 2;
  cityIsTopRegion: false;
  cityId: "23488";
  giataId: "4736";
  giataDestinationId: "931";
  address: "Acısu Mevkii Belek Turizm Merkezi Serik Antalya";
  hotelBoardGroups: "All Inclusive,Bed and Breakfast,Ultra All Inclusive";
  hotelCategoryName: "5";
  hotelCategoryId: "5";
  hotelCategoryCode: "5";
  provider: "Paximum";
  image_key: "/images/product/2/1/0/2/2/100910;7951928422709234861ee5793dcd352a;jpg/xanadu_resort.jpg";
  image_key_full: "https://media.dev.paximum.com/hotelimages/100910/7951928422709234861ee5793dcd352a.jpg";
  descriptionText: "A lobby and a reception are available to travellers. Most storeys are accessible by lift. Wireless internet access in public areas allows guests to stay connected. The hotel's culinary facilities include a restaurant, a bar and a pub. Various shops are available, including a supermarket. The grounds of the hotel feature a playground and an attractive garden. Additional features at the establishment include a TV room and a playroom. Those arriving in their own vehicles can leave them in the car park of the accommodation. Available services and facilities include a babysitting service, a childcare service, room service, a laundry service and a hairdresser.";
  roomDetail: RoomDetailType[];
}

export interface HotelStore {
  hotelList: HotelType[];
  setHotelList: (hotels: HotelStore["hotelList"]) => void;

  filterOpt: Record<string, any>;
  setFilterOpt: (filterOpt: HotelStore["filterOpt"]) => void;

  hotelFilters: HotelListFiltersForm;
  setHotelFilters: (filters: HotelStore["hotelFilters"]) => void;

  bookingHotel:
    | (HotelType & {
        packetIndex: number;
      })
    | undefined;
  setBookingHotel: (value: HotelStore["bookingHotel"]) => void;
}

export const useHotelStore = create<HotelStore>((set) => ({
  hotelList: [],
  setHotelList: (hotelList) => {
    set({
      hotelList,
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

  hotelFilters: {
    boardGroups: [],
    facilities: [],
    ratings: [],
    roomTypes: [],
    stars: [],
    themes: [],
  },
  setHotelFilters: (filters) => {
    set({
      hotelFilters: filters,
    });
  },

  bookingHotel: undefined,
  setBookingHotel: (value) => {
    set({
      bookingHotel: value,
    });
  },
}));
