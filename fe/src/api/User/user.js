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
  const { data, isLoading, isFetching, error, refetch } = useQuery(
    "user",
    getUserProfile
  );

  return { data, isLoading, isFetching, error, refetch };
};

//UPDATE USER FUNCTION
async function updateUser(input) {
  console.log("update user input:", input	);
  const { data } = await http.patch(API_ENDPOINTS.UPDATE_USER, input);
  console.log("update user:", data);

  return data;
}

//ADD WISHLIST MUTATION BY USE ADD WISHLIST FUNCTION
export const useUpdateUser = () => {
  return useMutation(async(input) => await updateUser(input), {
    onSuccess: () => {
      toast.success("Update user successfully");
    },
    onError: (error) => {
      console.log(error, "update user fail");	
        toast.error("Update User fail");
      
    },
  });
};