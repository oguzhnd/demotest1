import { FlightListFiltersForm } from "@/components/FlightPageElements/FlightListFilters";
import { FlightSearchFormProps } from "@/components/SearchArea/Contents/Flight";
import { create } from "zustand";

export interface FlightType {
  provider: "THYDom";
  searchId: "36ee0ca6-6bf9-4c1a-97d9-38951fc03d7f";
  flightID: "ffd60e60-596e-49c8-9fd3-7f213243faa5";
  flightNo: "TK2116";
  airway: "Turkish Airlines";
  totalPrice: string;
  totalTime: "01:15";
  totalTimeM: string;
  totalFligthTime: "01:15";
  totalFligthTimeM: 75;
  waitTime: "00:00";
  waitTimeM: 0;
  brandCode: "EF";
  brandKey: "EFTK21";
  brandName: "ECOFLY";
  productItemId: "4a2df807-e4cc-40b7-b80e-67da920b32b9";
  fareType: "EF";
  packID: "paketsiz";
  isDomestic: true;
  carrierCode: "TK";
  serviceFee: 0;
  amount: 0;
  seatCount: "9";
  legCount: number;
  bag: "15 KG";
  class: "T";
  classType: "T";
  dTime: "06:00";
  aTime: "07:15";
  dDate: "2026-05-20";
  aDate: "2026-05-20";
  dCode: "IST";
  aCode: "ESB";
  legs: "IST > ESB";
  legInfo: [
    {
      flightNo: "TK2116";
      operatingFlightNo: "2116";
      operatingAirwayName: "Turkish Airlines";
      operatingAirwayCode: "TK";
      marketingAirwayCode: "TK";
      marketingAirwayName: "Turkish Airlines";
      airway: "Turkish Airlines";
      carrierCode: "TK";
      departure: "IST";
      arrival: "ESB";
      dDate: "2026-05-20";
      aDate: "2026-05-20";
      dTime: "06:00";
      aTime: "07:15";
      dDateTime: "2026-05-20T06:00:00.000+03:00";
      aDateTime: "2026-05-20T07:15:00.000+03:00";
      dCity: "İstanbul";
      aCity: "Ankara";
      dName: "İstanbul Havaalanı";
      aName: "Esenboğa Havaalanı";
      classType: "T";
      class: "T";
      seatCount: "9";
      supplier: "TK";
      flightTime: "01:15";
      flightTimeM: 75;
      waittime: 0;
      waittimeM: 0;
      overday: false;
      overdayCount: 0;
      hiddenStops: false;
      hiddenStopsDetail: [];
    }
  ];
  reservable: true;
  AlternativePrices: {
      BrandName: "ECOFLY";
      BrandKey: "EFTK21";
      BrandCode: "EF";
      BrandId: "4a08a14f-629d-43b3-9ea4-7752831d9bf4";
      offerId: "";
      supplier: "THYDom";
      FareBasisCode: ["TEF"];
      FareType: ["EF"];
      FareReference: ["T"];
      Bag: [
        {
          SegmentIndex: 0;
          BaggageValue: "15";
          BaggageUnit: "KG";
          PassengerType: "ADT";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "15";
          CheckedBaggageUnit: "1";
        },
        {
          SegmentIndex: 0;
          BaggageValue: "15";
          BaggageUnit: "KG";
          PassengerType: "CNN";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "15";
          CheckedBaggageUnit: "1";
        },
        {
          SegmentIndex: 0;
          BaggageValue: "15";
          BaggageUnit: "KG";
          PassengerType: "CNN";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "15";
          CheckedBaggageUnit: "1";
        }
      ];
      class: ["ECONOMY"];
      classType: ["T"];
      MealInfo: "\t";
      MileInfo: {
        BonusMile: false;
        BonusMileAmount: "0";
      };
      BusinessLounge: false;
      seatCount: 9;
      SeatSelection: {
        SeatSelection: false;
        PreferredSeatSelection: false;
      };
      reservable: true;
      ChangePenalty: {
        paidChange: "";
        freeChange: false;
        list: [
          {
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
            IsChangeable: false;
          },
          {
            TimeToDeparture: {
              TimePeriodCondition: "MORE";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
            IsChangeable: false;
          },
          {
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "1";
            };
            IsChangeable: false;
          }
        ];
      };
      CancellationPenalty: {
        paidCancellation: "";
        freeCancellation: false;
        list: [
          {
            IsRefundable: false;
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
          },
          {
            IsRefundable: false;
            TimeToDeparture: {
              TimePeriodCondition: "MORE";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
          }
        ];
      };
      Features: [
        "8 KG Cabin Baggage",
        "15 KG Baggage Allowance",
        "No change allowedz",
        "No refund"
      ];
      FeaturesPaid: [];
      nonRefundable: "";
      totalPrice: 3797.66;
      priceDetail: [
        {
          passType: "ADT";
          quantity: "1";
          exchangeRate: {
            error: false;
            result: 1;
            rate: 1;
            exchangeRate: 1;
          };
          SingleBaseFare: 1473.59;
          SingleTaxFare: 494.92;
          SingleSF: 4;
          SingleMsaComm: 0;
          SingleTotalFare: 1972.51;
          TotalBaseFare: 1473.59;
          TotalTaxFare: 494.92;
          TotalSF: 4;
          TotalMsaComm: 0;
          TotalFare: 1972.51;
          Currency: "TRY";
          Taxes: [
            {
              Amount: "136.32";
              passengerType: "ADT";
              TaxCode: "VQ";
              RefundableInd: "false";
            },
            {
              Amount: "350.00";
              passengerType: "ADT";
              TaxCode: "YR";
              RefundableInd: "false";
            },
            {
              Amount: "8.60";
              passengerType: "ADT";
              TaxCode: "M6";
              RefundableInd: "false";
            }
          ];
        },
        {
          passType: "CHD";
          quantity: "1";
          exchangeRate: {
            error: false;
            result: 1;
            rate: 1;
            exchangeRate: 1;
          };
          SingleBaseFare: 1326.23;
          SingleTaxFare: 494.92;
          SingleSF: 4;
          SingleMsaComm: 0;
          SingleTotalFare: 1825.15;
          TotalBaseFare: 1326.23;
          TotalTaxFare: 494.92;
          TotalSF: 4;
          TotalMsaComm: 0;
          TotalFare: 1825.15;
          Currency: "TRY";
          Taxes: [
            {
              Amount: "136.32";
              passengerType: "CNN";
              TaxCode: "VQ";
              RefundableInd: "false";
            },
            {
              Amount: "350.00";
              passengerType: "CNN";
              TaxCode: "YR";
              RefundableInd: "false";
            },
            {
              Amount: "8.60";
              passengerType: "CNN";
              TaxCode: "M6";
              RefundableInd: "false";
            }
          ];
        }
      ];
    }[];
  returnFlight: "false" | "true";
}

export interface FlightStore {
  flightList: FlightType[];
  setFlightList: (flights: FlightStore["flightList"]) => void;

  filterOpt: Record<string, any>;
  setFilterOpt: (filterOpt: FlightStore["filterOpt"]) => void;

  flightFilters: FlightListFiltersForm;
  setFlightFilters: (filters: FlightStore["flightFilters"]) => void;

  bookingFlight:
    | (FlightType & {
        packetIndex: number;
      })
    | undefined;
  setBookingFlight: (value: FlightStore["bookingFlight"]) => void;

  returnFlight:
    | (FlightType & {
        packetIndex: number;
      })
    | undefined;
  setReturnFlight: (flight: FlightStore["bookingFlight"]) => void;
}

export const useFlightStore = create<FlightStore>((set) => ({
  flightList: [],
  setFlightList: (flightList) => {
    set({
      flightList,
    });
  },

  filterOpt: {},
  setFilterOpt: (filterOpt) => {
    set({
      filterOpt,
    });
  },

  flightFilters: {
    transfers: [],
    baggages: [],
    cabin: [],
    airports: [],
    airlines: [],
    price: [0, 0],
    hours: [0, 1]
  },
  setFlightFilters: (filters) => {
    set({
      flightFilters: filters,
    });
  },

  bookingFlight: undefined,
  setBookingFlight: (value) => {
    set({
      bookingFlight: value,
    });
  },

  returnFlight: undefined,
  setReturnFlight: (returnFlight) => {
    set({
      returnFlight,
    });
  },
}));
