import { create } from "zustand";

export const useAccountStore = create((set) => ({
  setRole: (role) => {
    set(() => ({ role }));
  },
}));
