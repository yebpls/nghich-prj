import { create } from "zustand";
import { getCart, setCart } from "../localStorage/handleCart";

const cartCookies = JSON.parse(getCart())?.map((item) => ({
  ...item,
  check: true,
}));

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
  updateCart: (itemId, quantity) => {
    set((state) => {
      const newCartItems = state.cartItems.map((item) =>
        item.item._id === itemId ? { ...item, quantity: quantity } : item
      );
      console.log("newCartItems", newCartItems);
      setCart(newCartItems);
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
      console.log("newCartItems", newCartItems);
      setCart(newCartItems);
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
