import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./api-endpoint";
import http from "../config/http";

const getProducts = async () => {
  const { data } = await http.get(API_ENDPOINTS.ALL_PRODUCT);
  console.log("query product:", data);
  return data.data;
};

export const useGetProducts = () => {
  const { data, isLoading, isFetching, error } = useQuery(
    "products",
    getProducts
  );
  return { data, isLoading, error, isFetching };
};
