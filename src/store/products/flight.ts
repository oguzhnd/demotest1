import { FlightListFiltersForm } from "@/components/FlightPageElements/FlightListFilters";
import { FlightSearchFormProps } from "@/components/SearchArea/Contents/Flight";
import { create } from "zustand";

export interface FlightType {
  provider: "THYDom";
  searchId: "36ee0ca6-6bf9-4c1a-97d9-38951fc03d7f";
  flightID: "ffd60e60-596e-49c8-9fd3-7f213243faa5";
  flightNo: "TK2116";
  airway: "Turkish Airlines";
  totalPrice: 3797.66;
  totalTime: "01:15";
  totalTimeM: 75;
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
  AlternativePrices: [
    {
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
    },
    {
      BrandName: "EXTRAFLY";
      BrandKey: "XFTK64";
      BrandCode: "XF";
      BrandId: "9cd49969-b8d5-4d51-bf4b-cd70e397bca2";
      offerId: "";
      supplier: "THYDom";
      FareBasisCode: ["TXF"];
      FareType: ["XF"];
      FareReference: ["T"];
      Bag: [
        {
          SegmentIndex: 0;
          BaggageValue: "20";
          BaggageUnit: "KG";
          PassengerType: "ADT";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "20";
          CheckedBaggageUnit: "1";
        },
        {
          SegmentIndex: 0;
          BaggageValue: "20";
          BaggageUnit: "KG";
          PassengerType: "CNN";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "20";
          CheckedBaggageUnit: "1";
        },
        {
          SegmentIndex: 0;
          BaggageValue: "20";
          BaggageUnit: "KG";
          PassengerType: "CNN";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "20";
          CheckedBaggageUnit: "1";
        }
      ];
      class: ["ECONOMY"];
      classType: ["T"];
      MealInfo: "\t";
      MileInfo: {
        BonusMile: true;
        BonusMileAmount: "150";
      };
      BusinessLounge: false;
      seatCount: 9;
      SeatSelection: {
        SeatSelection: true;
        PreferredSeatSelection: false;
      };
      reservable: true;
      ChangePenalty: {
        paidChange: "";
        freeChange: true;
        list: [
          {
            PercentageOrFixedAmount: {
              FixedAmount: {
                CurrencyCode: "TRY";
                Amount: "600.00";
              };
            };
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
            IsChangeable: true;
          },
          {
            PercentageOrFixedAmount: {
              FixedAmount: {
                CurrencyCode: "TRY";
                Amount: "350.00";
              };
            };
            TimeToDeparture: {
              TimePeriodCondition: "MORE";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
            IsChangeable: true;
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
        freeCancellation: true;
        list: [
          {
            IsRefundable: false;
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "1";
            };
          },
          {
            PercentageOrFixedAmount: {
              FixedAmount: {
                CurrencyCode: "TRY";
                Amount: "950.00";
              };
            };
            IsRefundable: true;
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
          },
          {
            PercentageOrFixedAmount: {
              FixedAmount: {
                CurrencyCode: "TRY";
                Amount: "650.00";
              };
            };
            IsRefundable: true;
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
        "20 KG Baggage Allowance",
        "Standard Seat Selection",
        "Change with a fee ((up to 12 hours) 600.00 TRY",
        "Refund with a fee ((up to 12 hours) 950.00 TRY",
        "150 Extra Miles"
      ];
      FeaturesPaid: [];
      nonRefundable: "";
      totalPrice: 5023.16;
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
          SingleBaseFare: 2118.59;
          SingleTaxFare: 494.92;
          SingleSF: 4;
          SingleMsaComm: 0;
          SingleTotalFare: 2617.51;
          TotalBaseFare: 2118.59;
          TotalTaxFare: 494.92;
          TotalSF: 4;
          TotalMsaComm: 0;
          TotalFare: 2617.51;
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
          SingleBaseFare: 1906.73;
          SingleTaxFare: 494.92;
          SingleSF: 4;
          SingleMsaComm: 0;
          SingleTotalFare: 2405.65;
          TotalBaseFare: 1906.73;
          TotalTaxFare: 494.92;
          TotalSF: 4;
          TotalMsaComm: 0;
          TotalFare: 2405.65;
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
    },
    {
      BrandName: "PRIMEFLY";
      BrandKey: "PFTK62";
      BrandCode: "PF";
      BrandId: "74fcb0ac-26d1-4d12-a021-a1e5384e639e";
      offerId: "";
      supplier: "THYDom";
      FareBasisCode: ["TPF"];
      FareType: ["PF"];
      FareReference: ["T"];
      Bag: [
        {
          SegmentIndex: 0;
          BaggageValue: "25";
          BaggageUnit: "KG";
          PassengerType: "ADT";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "25";
          CheckedBaggageUnit: "1";
        },
        {
          SegmentIndex: 0;
          BaggageValue: "25";
          BaggageUnit: "KG";
          PassengerType: "CNN";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "25";
          CheckedBaggageUnit: "1";
        },
        {
          SegmentIndex: 0;
          BaggageValue: "25";
          BaggageUnit: "KG";
          PassengerType: "CNN";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "1";
          CheckedBaggageAllowance: "25";
          CheckedBaggageUnit: "1";
        }
      ];
      class: ["ECONOMY"];
      classType: ["T"];
      MealInfo: "\t";
      MileInfo: {
        BonusMile: true;
        BonusMileAmount: "250";
      };
      BusinessLounge: false;
      seatCount: 9;
      SeatSelection: {
        SeatSelection: true;
        PreferredSeatSelection: true;
      };
      reservable: true;
      ChangePenalty: {
        paidChange: "";
        freeChange: true;
        list: [
          {
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
            IsChangeable: true;
          },
          {
            TimeToDeparture: {
              TimePeriodCondition: "MORE";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
            IsChangeable: true;
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
        freeCancellation: true;
        list: [
          {
            IsRefundable: false;
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "1";
            };
          },
          {
            PercentageOrFixedAmount: {
              FixedAmount: {
                CurrencyCode: "TRY";
                Amount: "850.00";
              };
            };
            IsRefundable: true;
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
          },
          {
            IsRefundable: true;
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
        "25 KG Baggage Allowance",
        "Preferred Seat Selection",
        "Penalty-free change (up to 12 hours)",
        "Refundable (up to 12 hours)",
        "250 Extra Miles"
      ];
      FeaturesPaid: [];
      nonRefundable: "";
      totalPrice: 5393.66;
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
          SingleBaseFare: 2313.59;
          SingleTaxFare: 494.92;
          SingleSF: 4;
          SingleMsaComm: 0;
          SingleTotalFare: 2812.51;
          TotalBaseFare: 2313.59;
          TotalTaxFare: 494.92;
          TotalSF: 4;
          TotalMsaComm: 0;
          TotalFare: 2812.51;
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
          SingleBaseFare: 2082.23;
          SingleTaxFare: 494.92;
          SingleSF: 4;
          SingleMsaComm: 0;
          SingleTotalFare: 2581.15;
          TotalBaseFare: 2082.23;
          TotalTaxFare: 494.92;
          TotalSF: 4;
          TotalMsaComm: 0;
          TotalFare: 2581.15;
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
    },
    {
      BrandName: "BUSINESS";
      BrandKey: "BUTK24";
      BrandCode: "BU";
      BrandId: "a8c542ac-8574-4fec-8a2c-1c6caa89562e";
      offerId: "";
      supplier: "THYDom";
      FareBasisCode: ["JBU"];
      FareType: ["BU"];
      FareReference: ["J"];
      Bag: [
        {
          SegmentIndex: 0;
          BaggageValue: "30";
          BaggageUnit: "KG";
          PassengerType: "ADT";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "2";
          CheckedBaggageAllowance: "30";
          CheckedBaggageUnit: "1";
        },
        {
          SegmentIndex: 0;
          BaggageValue: "30";
          BaggageUnit: "KG";
          PassengerType: "CNN";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "2";
          CheckedBaggageAllowance: "30";
          CheckedBaggageUnit: "1";
        },
        {
          SegmentIndex: 0;
          BaggageValue: "30";
          BaggageUnit: "KG";
          PassengerType: "CNN";
          CarryOnBaggageAllowance: "8";
          CarryOnBaggageUnit: "2";
          CheckedBaggageAllowance: "30";
          CheckedBaggageUnit: "1";
        }
      ];
      class: ["BUSINESS"];
      classType: ["J"];
      MealInfo: "\t";
      MileInfo: {
        BonusMile: false;
        BonusMileAmount: "0";
      };
      BusinessLounge: true;
      seatCount: 8;
      SeatSelection: {
        SeatSelection: true;
        PreferredSeatSelection: false;
      };
      reservable: true;
      ChangePenalty: {
        paidChange: "";
        freeChange: true;
        list: [
          {
            PercentageOrFixedAmount: {
              FixedAmount: {
                CurrencyCode: "TRY";
                Amount: "3500.00";
              };
            };
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
            IsChangeable: true;
          },
          {
            TimeToDeparture: {
              TimePeriodCondition: "MORE";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
            IsChangeable: true;
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
        freeCancellation: true;
        list: [
          {
            IsRefundable: false;
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "1";
            };
          },
          {
            IsRefundable: true;
            TimeToDeparture: {
              TimePeriodCondition: "MORE";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
          },
          {
            PercentageOrFixedAmount: {
              FixedAmount: {
                CurrencyCode: "TRY";
                Amount: "3500.00";
              };
            };
            IsRefundable: true;
            TimeToDeparture: {
              TimePeriodCondition: "LESS";
              TimeUnit: "HOUR";
              TimeAmount: "12";
            };
          }
        ];
      };
      Features: [
        "8 KG Cabin Baggage",
        "30 KG Baggage Allowance",
        "Standard Seat Selection",
        "Penalty-free change (up to 12 hours)",
        "Refundable (up to 12 hours)",
        "Business Lounge"
      ];
      FeaturesPaid: [];
      nonRefundable: "";
      totalPrice: 13662.27;
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
          SingleBaseFare: 6845.64;
          SingleTaxFare: 494.92;
          SingleSF: 4;
          SingleMsaComm: 0;
          SingleTotalFare: 7344.56;
          TotalBaseFare: 6845.64;
          TotalTaxFare: 494.92;
          TotalSF: 4;
          TotalMsaComm: 0;
          TotalFare: 7344.56;
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
          SingleBaseFare: 5818.79;
          SingleTaxFare: 494.92;
          SingleSF: 4;
          SingleMsaComm: 0;
          SingleTotalFare: 6317.71;
          TotalBaseFare: 5818.79;
          TotalTaxFare: 494.92;
          TotalSF: 4;
          TotalMsaComm: 0;
          TotalFare: 6317.71;
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
    }
  ];
  returnFlight: "false";
}

export interface FlightStore {
  flightList: FlightType[];
  setFlightList: (flights: FlightStore["flightList"]) => void;

  flightSearch: FlightSearchFormProps;
  setFlightSearch: (value: FlightStore["flightSearch"]) => void;

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
}

export const useFlightStore = create<FlightStore>((set) => ({
  flightList: [],
  setFlightList: (flightList) => {
    set({
      flightList,
    });
  },

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
  setFlightSearch: (value) => {
    set({
      flightSearch: value,
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
    hours: {
      departure: {
        min: 0,
        max: 0,
      },
      return: {
        min: 0,
        max: 0,
      },
    },
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
}));
