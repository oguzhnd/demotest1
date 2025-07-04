import { removeUserToken, setAccessToken, xiorInstance } from "@/utils/xior";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface AccountStore {
  isLogin: boolean;
  token: string | undefined;

  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAccountStore = create(
  persist<AccountStore>(
    (set) => ({
      isLogin: false,
      token: undefined,

      login: async (data) => {
        console.log(data);
        set({
          isLogin: true,
          token: "TOKEN"
        });
      },
      logout: async () => {
        set({
          isLogin: false,
          token: undefined
        });
      },
    }),
    {
      name: "global-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
