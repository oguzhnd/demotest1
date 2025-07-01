import { RoomDetailType } from "@/components/HotelPageElements/HotelDetails/Rooms";
import { HotelListFiltersForm } from "@/components/HotelPageElements/HotelListFilters";
import { create } from "zustand";

export interface HotelType {
  hotelID: string;
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

export interface HotelOffer {
  expiresOn: "2025-06-28T14:53:04.70923Z";
  offerId: "2$2$TR~^005^~23488~^005^~1194.26598000~^005^~~^005^~0~^005^~b1dccb62-f226-4007-9a92-8c75ba3c630e";
  checkIn: "2025-07-15T00:00:00Z";
  checkOut: "2025-07-18T00:00:00Z";
  isSpecial: true;
  isAvailable: true;
  availability: 1;
  isRefundable: true;
  notes: "Conditions: 1-If an existing booking is cancelled and rebooked at a cheaper rate for the same hotel and date, the hotel have the right to reject the booking. 2-Late check in:  Arrivals after 6PM must be communicated with the hotel directly. Failure of this might result in no show or cancellation. 3-Room configuration: Double/Twin rooms are subject to hotels availability at the time of check in. Specific room categories such as adapted rooms cannot be guaranteed. 4-Special Requests: Extra beds, rooms with views or baby cots are subject to hotels availability and may incur extra charges. 5-Local fees: Due to country regulations; city taxes, resort fees and any other surcharges must be paid to the hotel directly. 6-Early check in before 11AM and late check out after 2PM are subject to availability and may incur extra charges. 7-Bookings cancelled on the day of check-in or after will be charged in full as a no-show.";
  price: {
    amount: "1206.30";
    currency: "EUR";
  };
  cancellationPolicies: [
    {
      roomNumber: "1";
      dueDate: "2025-07-07T03:00:00";
      price: {
        amount: "1206.30";
        currency: "EUR";
      };
      provider: 2;
    }
  ];
  priceBreakdowns: [
    {
      roomNumber: "1";
      date: "2025-07-15T03:00:00+03:00";
      price: {
        amount: "402.10";
        currency: "EUR";
      };
    },
    {
      roomNumber: "1";
      date: "2025-07-16T03:00:00+03:00";
      price: {
        amount: "402.10";
        currency: "EUR";
      };
    },
    {
      roomNumber: "1";
      date: "2025-07-17T03:00:00+03:00";
      price: {
        amount: "402.10";
        currency: "EUR";
      };
    }
  ];
  thirdPartyInformation: {
    infos: [];
  };
  reservableInfo: {
    reservable: true;
    optionDate: "2025-07-06T20:00:00";
  };
  priceDetail: {
    roomPrice: 1194.27;
    nttCom: "11.94";
    msaCom: 0;
    salesPrice: "1206.30";
    salesCurrency: "EUR";
  };
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

  bookingOffer: HotelOffer | undefined;
  setBookingOffer: (value: HotelStore["bookingOffer"]) => void;
  
  bookingRoom: RoomDetailType | undefined;
  setBookingRoom: (value: HotelStore["bookingRoom"]) => void;
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

  bookingOffer: undefined,
  setBookingOffer: (value) => {
    set({
      bookingOffer: value,
    });
  },

  bookingRoom: undefined,
  setBookingRoom: (value) => {
    set({
      bookingRoom: value,
    });
  },
}));
