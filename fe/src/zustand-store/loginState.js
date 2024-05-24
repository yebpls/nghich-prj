import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isLogin: false,
  login: () => {
    set(() => ({ isLogin: true }));
  },
  logout: () => {
    set(() => ({ isLogin: false }));
  },
}));
