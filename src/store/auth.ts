import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface AuthStore {
  isLogin: boolean
}

export const useAuthStore = create(
  persist<AuthStore>((set, get) => ({
    isLogin: false
  }), {
    name: "auth-store",
    storage: createJSONStorage(() => sessionStorage),
  })
);
