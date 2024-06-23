import { create } from "zustand";

const calculateSubtotal = (orderDetails) => {
  return orderDetails.reduce(
    (total, item) => total + item.price_final * item.quantity,
    0
  );
};

export const useCustomBagOrderState = create((set) => ({
  orderState: {
    custom_bag_details: [],
    address_id: "",
    payment_type: 0,
    ship_method: 1,
  },
  subtotal: 0,

  addCustomBagOrderDetail: (customBag) => {
    set((state) => {
      const updatedCustomBagDetails = [
        ...state.orderState.custom_bag_details,
        {
          product_id: customBag._id,
          price_final: customBag.price,
          quantity: 1,
          custom: true,
          name: customBag.name,
          url: customBag.url,
        },
      ];

      return {
        orderState: {
          ...state.orderState,
          custom_bag_details: updatedCustomBagDetails,
        },
        subtotal: calculateSubtotal(updatedCustomBagDetails),
      };
    });
  },

  addCustomBagNewOrderDetails: (orderDetailsArray) => {
    set((state) => {
      const orderDetails = orderDetailsArray.map((item) => ({
        product_id: item.item._id,
        price_final: item.item.price,
        quantity: item.quantity,
        custom: item.item.custom,
        name: item.item.name,
        url: item.item.url,
      }));

      return {
        orderState: {
          ...state.orderState,
          custom_bag_details: orderDetails,
        },
        subtotal: calculateSubtotal(orderDetails),
      };
    });
  },

  updateCustomOrderDetail: (product_id, quantity) => {
    set((state) => {
      const newCustomBagDetails = state.orderState.custom_bag_details.map(
        (orderDetail) =>
          orderDetail.product_id === product_id
            ? { ...orderDetail, quantity: quantity }
            : orderDetail
      );

      return {
        orderState: {
          ...state.orderState,
          custom_bag_details: newCustomBagDetails,
        },
        subtotal: calculateSubtotal(newCustomBagDetails),
      };
    });
  },
  deleteOrderDetail: (product_id) => {
    set((state) => {
      const newCustomBagDetails = state.orderState.custom_bag_details.filter(
        (orderDetail) => orderDetail.product_id !== product_id
      );

      return {
        orderState: {
          ...state.orderState,
          custom_bag_details: newCustomBagDetails,
        },
        subtotal: calculateSubtotal(newCustomBagDetails),
      };
    });
  },

  addPaymentType: (payment_type) => {
    set((state) => ({
      orderState: {
        ...state.orderState,
        payment_type,
      },
    }));
  },

  getSubtotal: () => {
    set((state) => ({
      subtotal: calculateSubtotal(state.orderState.custom_bag_details),
    }));
  },
}));
