import { create } from "zustand";

export const useCheckedItemsState = create((set) => ({
  checkedItems: [],
  initializeItems: (items) => {
    set(() => ({
      checkedItems: items.map((item, index) => ({
        _id: item._id,
        isCheck: item.default ? true : false,
      })),
    }));
  },
  setCheckedItem: (_id) => {
    set((state) => ({
      checkedItems: state.checkedItems.map((item) =>
        item._id === _id
          ? { ...item, isCheck: true }
          : { ...item, isCheck: false }
      ),
    }));
  },
}));
