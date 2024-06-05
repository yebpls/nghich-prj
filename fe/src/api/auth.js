import { useMutation } from "react-query";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";
import http from "../config/http";
import { API_ENDPOINTS } from "./api-endpoint";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../zustand-store/loginState";

//LOGIN FUNCTION
const login = async (input) => {
  console.log(input, "login input");

  const { data } = await http.post(API_ENDPOINTS.LOGIN, input);
  console.log("login response", data);

  return data.data;
};

//LOGIN MUTATION BY USE LOGIN FUNCTION
export const useLoginMutation = () => {
  const navigate = useNavigate();
  const setLogin = useLoginStore((state) => state.login);

  return useMutation(
    async (input) => {
      const data = await login(input);
      Cookies.set("auth_token", data?.access_token);
      return data;
    },
    {
      onSuccess: (data) => {
        toast.success("login success");
        navigate("/user");
        setLogin();
        console.log(data, "login success");
      },
      onError: (error) => {
        toast.error("login fail");
        console.log(error, "login fail");
      },
    }
  );
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
  const navigate = useNavigate();
  const setLogin = useLoginStore((state) => state.login);
  return useMutation((input) => registerAccount(input), {
    onSuccess: (data) => {
      console.log(data, "register success");
      toast.success("register success");
      Cookies.set("auth_token", data.access_token);
      navigate("/user");
      setLogin();
    },
    onError: (error) => {
      console.log(error.response.data.errors, "register fail");
      const loginError = error.response.data.errors;
      if (loginError.email && loginError.username) {
        toast.error("Register fail");
      } else {
        toast.error(
          loginError.email
            ? loginError.email.msg
            : loginError.username
            ? loginError.username.msg
            : "Register fail"
        );
      }
    },
  });
};
