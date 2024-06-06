import { create } from "zustand";
import { getCart, setCart } from "../localStorage/handleCart";

const cartCookies = JSON.parse(getCart());

export const useCartStore = create((set) => ({
  cartItems: cartCookies ? cartCookies : [],
  countCart: cartCookies ? cartCookies.length : 0,
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
          setCart(cartItem);
          return cartItem;
        });
        // const quantity = state.countCart + quantity;
        setCart(updatedCartItems);

        return {
          cartItems: updatedCartItems,
        };
      } else {
        const updatedCartItems = [...state.cartItems, { item, quantity }];
        setCart(updatedCartItems);
        return {
          cartItems: updatedCartItems,
          countCart: state.countCart + 1,
        };
      }
    });
  },
  updateCart: (itemId, updatedItem) => {
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? updatedItem : item
      ),
    }));
  },
  deleteFromCart: (itemId) => {
    set((state) => {
      const newCartItems = state.cartItems.filter((item) => item.item._id !== itemId);
      setCart(newCartItems);
      return {
        cartItems: newCartItems,
        countCart: state.countCart - 1,
      };
    });
  },
}));
