import { create } from "zustand";

// CART STATUS
// 1: WAITING
// 2: DOING
// 3: DONE
export const useOrderNavState = create((set) => ({
  cartStatus: 3,
  checkoutStatus: 3,
  completeStatus: 2,
  viewCart: () => {
    set(() => ({ cartStatus: 2, checkoutStatus: 1, completeStatus: 1 }));
  },
  checkout: () => {
    set(() => ({ cartStatus: 3, checkoutStatus: 2, completeStatus: 1 }));
  },
  complete: () => {
    set(() => ({ cartStatus: 3, checkoutStatus: 3, completeStatus: 2 }));
  },
}));
