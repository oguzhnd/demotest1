import { xiorInstance } from "@/utils/xior";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface GlobalStore {
  isLogin: boolean;
  bearerToken: string | undefined;

  currency: string;

  setCurrency: (value: GlobalStore["currency"]) => void;

  makeSignin: (data: {
    agentKey: string;
    username: string;
    password: string;
  }) => Promise<void>;
  makeSignout: () => Promise<void>;
}

export const useGlobalStore = create(
  persist<GlobalStore>(
    (set) => ({
      isLogin: false,
      bearerToken: undefined,

      makeSignin: async (data) => {
        const res = await xiorInstance.post("/authentication", data)
        console.log(res)

        const rawResponse = await fetch(
          "https://api.nttreservation.com/services/v1/authentication",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const content = await rawResponse.json();

        console.log(content);
      },
      makeSignout: async () => {},

      currency: "TRY",
      setCurrency: (currency) => {
        set({
          currency,
        });
      },
    }),
    {
      name: "global-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
