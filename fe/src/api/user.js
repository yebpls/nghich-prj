import { useQuery } from "react-query";
import { API_ENDPOINTS } from "./api-endpoint";
import http from "../config/http";

//GET USER PROFILE FUNCTION
const getUserProfile = async () => {
  const { data } = await http.get(API_ENDPOINTS.GET_USER);
  console.log("query user profile:", data);
  return data.data;
};
//GET USER PROFILE MUTATION BY USE GET USER PROFILE FUNCTION
export const useGetUserProfile = () => {
  const { data, isLoading, error } = useQuery("user", getUserProfile);
  return { data, isLoading, error };
};
//GET WISHLIST FUNCTION

const getWishlist = async () => {
  const { data } = await http.get(API_ENDPOINTS.GET_WISHLIST);
  console.log("query wishlist:", data);
  return data.data.products;
};
//GET WISHLIST MUTATION BY USE GET WISHLIST FUNCTION
export const useGetWishlist = () => {
  const { data, isLoading, isFetching, error } = useQuery(
    "wishlist",
    getWishlist
  );
  return { data, isLoading, error, isFetching };
};
