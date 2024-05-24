import { useMutation } from "react-query";
import { toast } from "react-hot-toast";
import http from "../config/http";
import { API_ENDPOINTS } from "./api-endpoint";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../zustand-store/loginState";

//LOGIN FUNCTION
async function login(input) {
  console.log(input, "login input");

  const { data } = await http.post(API_ENDPOINTS.LOGIN, input);
  console.log("login response", data);

  return data.data;
}

//LOGIN MUTATION BY USE LOGIN FUNCTION
export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setLogin = useLoginStore((state) => state.login);

  return useMutation((input) => login(input), {
    onSuccess: (data) => {
      toast.success("login success");
      Cookies.set("auth_token", data?.access_token);
      navigate("/user");
      setLogin();
      console.log(data, "login success");
    },
    onError: (error) => {
      toast.error("login fail");
      console.log(error, "login fail");
    },
  });
};

//REGISTER FUNCTION
//   {
//     "name": "baotest1",
//     "username": "baotest1",
//     "email": "baotest1@gmail.com",
//     "password": "Bao0105*",
//     "confirm_password": "Bao0105*"
// }
async function registerAccount(input) {
  console.log(input, "register input");

  const { data } = await http.post(API_ENDPOINTS.REGISTER, input);
  console.log("register response", data);

  return data.data;
}
//REGISTER MUTATION BY USE REGISTER FUNCTION
export const useRegisterMutation = () => {
  return useMutation((input) => registerAccount(input), {
    onSuccess: (data) => {
      console.log(data, "register success");
      toast.success("register success");
      Cookies.set("auth_token", data.access_token);
      console.log(data, "register success");
    },
    onError: (error) => {
      console.log(error.response.data.errors, "register fail");
      toast.error("register fail");
      // console.log(error, "register fail");
    },
  });
};
