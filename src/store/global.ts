import { removeUserToken, setAccessToken, xiorInstance } from "@/utils/xior";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface GlobalStore {
  isLogin: boolean;
  token: string | undefined;

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
      token: undefined,

      makeSignin: async (data) => {
        const res = await xiorInstance.post("/authentication", data);

        if (!res.data.error) {
          set({
            isLogin: true,
            token: res.data.accessToken,
          });

          setAccessToken(res.data.accessToken);
        }
      },
      makeSignout: async () => {
        set({
          isLogin: false,
          token: undefined,
        });

        removeUserToken()
      },

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
