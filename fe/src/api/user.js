import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./api-endpoint";
import http from "../config/http";

const getWishlist = async () => {
  const { data } = await http.get(API_ENDPOINTS.GET_WISHLIST);
  console.log("query wishlist:", data);
  return data.data.products;
};

export const useGetWishlist = () => {
  const { data, isLoading, isFetching, error } = useQuery(
    "wishlist",
    getWishlist
  );
  return { data, isLoading, error, isFetching };
};
