import { useMutation, useQuery } from "react-query";
import { API_ENDPOINTS } from "../api-endpoint";
import http from "../../config/http";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//GET USER PROFILE FUNCTION
const getUserProfile = async () => {
  const { data } = await http.get(API_ENDPOINTS.GET_USER);
  console.log("query user profile:", data);
  return data.data;
};
//GET USER PROFILE MUTATION BY USE GET USER PROFILE FUNCTION
export const useGetUserProfile = () => {
  const { data, isLoading, isFetching, error } = useQuery(
    "user",
    getUserProfile
  );

  return { data, isLoading, isFetching, error };
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

//ADD WISHLIST FUNCTION

async function addWishlist(id) {
  const { data } = await http.post(API_ENDPOINTS.ADD_WISHLIST + id);
  console.log("add wishlist:", data);

  return data;
}

//ADD WISHLIST MUTATION BY USE ADD WISHLIST FUNCTION
export const useAddWishlist = () => {
  const navigate = useNavigate();
  return useMutation((id) => addWishlist(id), {
    onSuccess: () => {
      toast.success("Add to wishlist successfully");
    },
    onError: (error) => {
      if (error?.response.status === 401) {
        toast.error("Please login to add wishlist");
        navigate("/login");
      } else {
        toast.error("Add to wishlist failed");
      }
    },
  });
};
