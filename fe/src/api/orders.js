import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "./api-endpoint";
import http from "../config/http";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import { useCartStore } from "../zustand-store/cartState";
import { useOrderNavState } from "../zustand-store/OrderNavState";

//GET ALL ORDERS
const getOrders = async () => {
  const { data } = await http.get(API_ENDPOINTS.ORDERS);
  return data.data.data;
};

//GET WARD QUERY BY USE GET WARD FUNCTION
export const useGetOrders = () => {
  const { data, isLoading, isFetching, error } = useQuery(
    "userOrders",
    getOrders
  );
  // console.log("check addresses:", data);
  return { data, isLoading, isFetching, error };
};

//MAKE ORDER FUNCTION
const makeOrder = async (input) => {
  console.log(input, "order input");

  const { data } = await http.post(API_ENDPOINTS.ORDERS, input);
  console.log("login response", data);

  return input;
};

//ORDER MUTATION BY USE ORDER FUNCTION
export const useMakeOrder = () => {
  const { clearCart } = useCartStore((state) => state);
  const { complete } = useOrderNavState();
  return useMutation(
    async (input) => {
      const data = await makeOrder(input);
      return data;
    },
    {
      onSuccess: (data) => {
        toast.success("order success");
        clearCart();
        complete();
        console.log(data, "order success");
      },
      onError: (error) => {
        toast.error("order fail");
        console.log(error, "order fail");
      },
    }
  );
};
