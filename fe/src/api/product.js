import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./api-endpoint";
import http from "../config/http";

const getProducts = async () => {
  const { data } = await http.get(API_ENDPOINTS.ALL_PRODUCT);
  // console.log("query product:", data);
  return data.data;
};

export const useGetProducts = () => {
  const { data, isLoading, isFetching, error } = useQuery(
    "products",
    getProducts
  );
  return { data, isLoading, error, isFetching };
};

//GET PRODUCT BY ID
const getProductById = async (id) => {
  const { data } = await http.get(API_ENDPOINTS.PRODUCT_DETAIL + id);
  console.log("query product by id:", data);
  return data.data;
};

export const useGetProductById = (id) => {
  const { data, isLoading, error } = useQuery(["product", id], () =>
    getProductById(id)
  );
  return { data, isLoading, error };
};
