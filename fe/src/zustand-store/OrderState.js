import { create } from "zustand";
import { useCartStore } from "./cartState";

const cartItems = useCartStore?.getState()?.cartItems;

const orderDetails = cartItems.map((item) => ({
  product_id: item.item._id,
  price_final: item.item.price,
  quantity: item.quantity,
}));
const calculateSubtotal = (orderDetails) => {
  console.log("orderDetailsss", orderDetails);
  return orderDetails.reduce(
    (total, item) => total + item.price_final * item.quantity,
    0
  );
};
export const useOrderState = create((set) => ({
  orderState: {
    order_details: [],
    address_id: "",
    payment_type: 0,
    ship_method: 1,
  },
  subtotal: calculateSubtotal(orderDetails),
  addNewOrderDetails: (orderDetailsArray) => {
    set((state) => {
      const orderDetails = orderDetailsArray
        .filter((item) => item.check === true)
        .map((item) => ({
          product_id: item.item._id,
          price_final: item.item.price,
          quantity: item.quantity,
        }));
      console.log("set order detail", orderDetails);
      return {
        orderState: {
          ...state.orderState,
          order_details: [...orderDetails],
        },
      };
    });
  },
  addOrderDetail: (product_id, quantity, price_final) => {
    set((state) => ({
      orderState: {
        ...state.orderState,
        order_details: [
          ...state.orderState.order_details,
          { product_id, quantity, price_final },
        ],
      },
    }));
  },

  updateOrderDetail: (product_id, quantity) => {
    set((state) => {
      const newOrderDetails = state.orderState.order_details.map(
        (orderDetail) =>
          orderDetail.product_id === product_id
            ? { ...orderDetail, quantity: quantity }
            : orderDetail
      );
      return {
        orderState: {
          ...state.orderState,
          order_details: newOrderDetails,
        },
      };
    });
  },
  deleteOrderDetail: (product_id) => {
    set((state) => {
      const newOrderDetails = state.orderState.order_details.filter(
        (orderDetail) => orderDetail.product_id !== product_id
      );
      return {
        orderState: {
          ...state.orderState,
          order_details: newOrderDetails,
        },
      };
    });
  },

  addAddressId: (address_id) => {
    set((state) => ({
      orderState: {
        ...state.orderState,
        address_id,
      },
    }));
  },
  addPaymentType: (payment_type) => {
    set((state) => ({
      orderState: {
        ...state.orderState,
        payment_type,
        subtotal:
          payment_type === 0
            ? calculateSubtotal(state.orderState.order_details) + 30000
            : calculateSubtotal(state.orderState.order_details),
      },
    }));
  },

  addShipMethod: (ship_method) => {
    set((state) => ({
      orderState: {
        ...state.orderState,
        ship_method,
      },
    }));
  },
  getSubtotal: () => {
    set((state) => {
      const baseSubtotal = calculateSubtotal(state.orderState.order_details);
      const paymentType = state.orderState.payment_type;
      const adjustedSubtotal =
        paymentType === 0 ? baseSubtotal + 30000 : baseSubtotal;

      return {
        subtotal: adjustedSubtotal,
      };
    });
  },
}));
