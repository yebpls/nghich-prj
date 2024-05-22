import { useMutation } from "react-query";
import { toast } from "react-toastify";
import http from "../config/http";
import { API_ENDPOINTS } from "./api-endpoint";
import Cookies from "js-cookie";

async function login(input) {
  console.log(input, "login input");

  const { data } = await http.post(API_ENDPOINTS.LOGIN, input);
  console.log("login response", data);

  return data.data;
}

export const useLoginMutation = () => {
  return useMutation((input) => login(input), {
    onSuccess: (data) => {
      toast.success("login success");
      Cookies.set("auth_token", data?.access_token);

      console.log(data, "login success");
    },
    onError: (error) => {
      toast.error("login fail");
      console.log(error, "login fail");
    },
  });
};
