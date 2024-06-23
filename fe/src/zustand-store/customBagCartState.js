// src/zustand-store/customBagCartState.js
import { create } from "zustand";
import { getCustomBagCart, setCustomBagCart } from "../localStorage/handleCustomBagCart";

const customBagCartCookies = JSON.parse(getCustomBagCart())?.map((item) => ({
  ...item,
  check: true,
}));

export const useCustomBagCartStore = create((set) => ({
  cartItems: customBagCartCookies ? customBagCartCookies : [],
  countCart: customBagCartCookies ? customBagCartCookies.length : 0,
  addToCart: (item, quantity) => {
    set((state) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.item._id === item._id
      );
      if (existingCartItem) {
        const updatedCartItems = state.cartItems.map((cartItem) => {
          if (cartItem.item._id === item._id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
            };
          }
          setCustomBagCart(cartItem);
          return cartItem;
        });
        setCustomBagCart(updatedCartItems);

        return {
          cartItems: updatedCartItems,
        };
      } else {
        const updatedCartItems = [...state.cartItems, { item, quantity }];
        setCustomBagCart(updatedCartItems);
        return {
          cartItems: updatedCartItems,
          countCart: state.countCart + 1,
        };
      }
    });
  },
  updateCart: (itemId, quantity) => {
    set((state) => {
      const newCartItems = state.cartItems.map((item) =>
        item.item._id === itemId ? { ...item, quantity: quantity } : item
      );
      setCustomBagCart(newCartItems);
      return {
        cartItems: newCartItems,
      };
    });
  },
  deleteFromCart: (itemId) => {
    set((state) => {
      const newCartItems = state.cartItems.filter(
        (item) => item.item._id !== itemId
      );
      setCustomBagCart(newCartItems);
      return {
        cartItems: newCartItems,
        countCart: state.countCart - 1,
      };
    });
  },
  toggleCheck: (id, isChecked) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.item._id === id) {
          return {
            ...cartItem,
            check: isChecked,
          };
        }
        return cartItem;
      });
      return { cartItems: updatedCartItems };
    });
  },
  clearCart: () => {
    set(() => ({
      cartItems: [],
      countCart: 0,
    }));
  },
}));
