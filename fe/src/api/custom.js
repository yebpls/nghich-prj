import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./api-endpoint";
import http from "../config/http";

// GET CUSTOM BAGS FUNCTION
const getCustom = async () => {
    debugger
  const { data } = await http.get(API_ENDPOINTS.GET_CUSTOM);
  console.log("query custom bags:", data);
  return data.data;
};

// GET CUSTOM BAGS HOOK USING REACT-QUERY
export const useGetCustom = () => {
  const { data, isLoading, isFetching, error, refetch } = useQuery(
    "customBags",
    getCustom
  );

  return { data, isLoading, isFetching, error, refetch };
};
