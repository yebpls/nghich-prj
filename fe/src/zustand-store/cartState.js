import { create } from "zustand";
import { getCart, setCart } from "../localStorage/handleCart";

const cartCookies = JSON?.parse(getCart())?.map((item) => ({
  ...item,
  check: true,
}));

// Helper function to calculate subtotal
const calculateSubtotal = (cartItems) =>
  cartItems.reduce((total, { item, quantity, check }) => {
    if (!check) return total; // Skip if check is false
    return total + item.price * quantity;
  }, 0);

export const useCartStore = create((set) => ({
  cartItems: cartCookies ? cartCookies : [],
  countCart: cartCookies ? cartCookies.length : 0,
  subtotal: calculateSubtotal(cartCookies ? cartCookies : []),
  addToCart: (item, quantity) => {
    set((state) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.item._id === item._id
      );
      let updatedCartItems;
      if (existingCartItem) {
        updatedCartItems = state.cartItems.map((cartItem) => {
          if (cartItem.item._id === item._id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
            };
          }
          return cartItem;
        });
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { item, quantity, check: true },
        ];
      }
      setCart(updatedCartItems);
      const newSubtotal = calculateSubtotal(updatedCartItems);
      return {
        cartItems: updatedCartItems,
        countCart: updatedCartItems.length,
        subtotal: newSubtotal,
      };
    });
  },
  updateCart: (itemId, quantity) => {
    set((state) => {
      const newCartItems = state.cartItems.map((cartItem) =>
        cartItem.item._id === itemId
          ? { ...cartItem, quantity: quantity }
          : cartItem
      );
      setCart(newCartItems);
      const newSubtotal = calculateSubtotal(newCartItems);
      return {
        cartItems: newCartItems,
        subtotal: newSubtotal,
      };
    });
  },
  deleteFromCart: (itemId) => {
    set((state) => {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.item._id !== itemId
      );
      setCart(newCartItems);
      const newSubtotal = calculateSubtotal(newCartItems);
      return {
        cartItems: newCartItems,
        countCart: newCartItems.length,
        subtotal: newSubtotal,
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
      const newSubtotal = calculateSubtotal(updatedCartItems);
      return {
        cartItems: updatedCartItems,
        subtotal: newSubtotal,
      };
    });
  },
  clearCart: () => {
    set(() => ({
      cartItems: [],
      countCart: 0,
      subtotal: 0,
    }));
  },
}));
