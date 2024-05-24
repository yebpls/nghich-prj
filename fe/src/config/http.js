import axios from "axios";
import Cookies from "js-cookie";

const getToken = () => {
  if (typeof window === undefined) {
    return null;
  }
  return Cookies.get("auth_token");
};

const http = axios.create({
  baseURL: "http://localhost:8080/",

  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add interceptor for request
http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers = {
        ...config.headers,
        // Authorization: `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    console.log("error: ", error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // This function runs if the response is successful (status in the 2xx range)
    if (response.status >= 200 && response.status < 300) {
      return response; // Resolve the promise with the response
    }
    // If the response status is not in the 2xx range, reject the promise
    return Promise.reject(response);
  },
  (error) => {
    // This function runs if an error occurs while handling the response
    console.log("error: ", error);
    return Promise.reject(error); // Reject the promise with the error
  }
);

export default http;
