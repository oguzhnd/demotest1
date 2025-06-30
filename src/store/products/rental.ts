import { ExtraProductType } from "@/components/RentalPageElements/_Booking/ExtraProducts";
import { RentalListFiltersForm } from "@/components/RentalPageElements/RentalListFilters";
import { create } from "zustand";

export interface RentalType {
  productId: "e15aeead-9d69-4181-881a-05e61bd3460a";
  rentalPeriod: {
    count: 3;
    unit: "day";
  };
  carDetail: {
    model: "Clio";
    bag: {
      smallBagCount: 1;
      bigBagCount: 2;
    };
    transmission: "manual";
    brand: "Renault";
    class: "economic";
    seats: 5;
    fuel: "gas";
    image: {
      small: "https://static.yolcu360.com/thumbnails/19/a5/19a528fc798c5377018c35a5dd020ae2.png";
      large: "https://static.yolcu360.com/thumbnails/10/c6/10c680f8d845ad6069c95518cacef8d0.png";
      medium: "https://static.yolcu360.com/thumbnails/87/26/8726242c937b041c8759b292e230535c.png";
    };
  }[];
  rules: {
    dailyRangeLimit: 0;
    totalRangeLimit: 1200;
    driverAge: 21;
    doubleCreditCard: false;
    licenseYears: 3;
  };
  vendor: {
    supportsFullCredit: true;
    logoUrl: "https://static.yolcu360.com/thumbnails/bc/7c/bc7c5d5aa70f5a0c0bc580824a5d8a0b.png";
    id: 150;
    name: "Yolcutest";
  };
  priceDetail: {
    provision: 9257;
    agencyPrice: 1387.5;
    agentFee: null;
    msaFee: 0;
    salesPrice: 1388.5;
    currency: "TRY";
  }[];
  officeInfo: {
    pickupLocation: {
      phones: [
        {
          country: "TR";
          dialCode: 90;
          number: "5381111111";
        }
      ];
      deliveryType: "fromOffice";
      coordinates: {
        latitude: 41.0046867;
        longitude: 29.0713179;
      };
      id: 7569;
      address: {
        city: "İstanbul";
        line: "Test Adress";
        country: "TR";
      };
      openingHours: {
        monday: {
          close: "23:59";
          open: "07:30";
        };
        tuesday: {
          close: "23:59";
          open: "07:30";
        };
        friday: {
          close: "23:59";
          open: "07:30";
        };
        wednesday: {
          close: "23:59";
          open: "07:30";
        };
        thursday: {
          close: "23:59";
          open: "07:30";
        };
        sunday: {
          close: "23:59";
          open: "07:30";
        };
        saturday: {
          close: "23:59";
          open: "07:30";
        };
      };
      email: "yolcutest@yolcu360.com";
    };
    dropoffLocation: {
      phones: [
        {
          country: "TR";
          dialCode: 90;
          number: "5381111111";
        }
      ];
      deliveryType: "fromOffice";
      coordinates: {
        latitude: 41.0046867;
        longitude: 29.0713179;
      };
      id: 7569;
      address: {
        city: "İstanbul";
        line: "Test Adress";
        country: "TR";
      };
      openingHours: {
        monday: {
          close: "23:59";
          open: "07:30";
        };
        tuesday: {
          close: "23:59";
          open: "07:30";
        };
        friday: {
          close: "23:59";
          open: "07:30";
        };
        wednesday: {
          close: "23:59";
          open: "07:30";
        };
        thursday: {
          close: "23:59";
          open: "07:30";
        };
        sunday: {
          close: "23:59";
          open: "07:30";
        };
        saturday: {
          close: "23:59";
          open: "07:30";
        };
      };
      email: "yolcutest@yolcu360.com";
    };
  };
}

export interface RentalStore {
  rentalList: RentalType[];
  setRentalList: (rentals: RentalStore["rentalList"]) => void;

  filterOpt: {
    delivery_type: {
      count: number;
      value: string;
    }[];
    vendor: {
      count: number;
      display: string;
      value: string;
    }[];
    class_type: {
      count: number;
      value: string;
    }[];
    transmission: {
      count: number;
      value: string;
    }[];
    provision: {
      maximumValue: number;
      minimumValue: number;
    };
    price: {
      maximumValue: number;
      minimumValue: number;
    };
    full_credit: {
      count: number;
      value: boolean;
    }[];
    average_rating: {
      maximumValue: number;
      minimumValue: number;
    };
    fuel: {
      count: number;
      value: string;
    }[];
    model: {
      count: number;
      value: string;
    }[];
    distance_limit: {
      maximumValue: number;
      minimumValue: number;
    };
    brand: {
      count: number;
      value: string;
    }[];
  };
  setFilterOpt: (filterOpt: RentalStore["filterOpt"]) => void;

  rentalFilters: RentalListFiltersForm;
  setRentalFilters: (filters: RentalStore["rentalFilters"]) => void;

  searchId: string | undefined;
  tempId: string | undefined;
  bookingRental: RentalType | undefined;
  setBookingRental: (
    value: RentalStore["bookingRental"],
    searchId?: string,
    tempId?: string
  ) => void;

  extraProducts: ExtraProductType[];
  setExtraProducts: (value: RentalStore["extraProducts"]) => void;

  selectedExtraProducts: Record<string, number>;
  setSelectedExtraProducts: (id: string, value: number) => void;
}

export const useRentalStore = create<RentalStore>((set, get) => ({
  rentalList: [],
  setRentalList: (rentalList) => {
    set({
      rentalList,
    });
  },

  filterOpt: {
    average_rating: {
      maximumValue: 0,
      minimumValue: 100,
    },
    brand: [],
    class_type: [],
    delivery_type: [],
    distance_limit: {
      maximumValue: 0,
      minimumValue: 100,
    },
    fuel: [],
    full_credit: [],
    model: [],
    price: {
      maximumValue: 0,
      minimumValue: 100,
    },
    provision: {
      maximumValue: 0,
      minimumValue: 100,
    },
    transmission: [],
    vendor: [],
  },
  setFilterOpt: (filterOpt) => {
    set({
      filterOpt,
    });
  },

  rentalFilters: {
    transmission: [],
    vendor: [],
    fuel: [],
    brand: [],
    model: [],
    price: [0, 100],
    deposit: [0, 100],
    deliveryType: [],
  },
  setRentalFilters: (filters) => {
    set({
      rentalFilters: filters,
    });
  },

  searchId: undefined,
  tempId: undefined,
  bookingRental: undefined,
  setBookingRental: (value, searchId, tempId) => {
    set({
      bookingRental: value,
      searchId,
      tempId,
    });
  },

  extraProducts: [],
  setExtraProducts: (data) => {
    set({
      extraProducts: data,
    });
  },

  selectedExtraProducts: {},
  setSelectedExtraProducts: (id, value) => {
    set({
      selectedExtraProducts: {
        ...get().selectedExtraProducts,
        [id]: value,
      },
    });
  },
}));
