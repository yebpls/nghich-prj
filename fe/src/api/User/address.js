import { useMutation, useQuery, useQueryClient } from "react-query";
import http from "../../config/http";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../api-endpoint";

//GET ALL ADDRESS
const getAllAddress = async () => {
  const { data } = await http.get(API_ENDPOINTS.GET_USER_ADDRESSES);
  const newAddress = data
    ? data.data.map((item) => {
        const address = item.address;
        if (address) {
          const [AddressView, AddressCode] = address.split("$$");

          // Trim any leading or trailing spaces`
          const addressView = AddressView.trim().split("...")[0].trim();
          const addressCode = AddressCode ? AddressCode.trim() : "";

          const addressViewParts = addressView ? addressView.split(", ") : "";

          // Extract components
          const streets = addressViewParts ? addressViewParts[0] : "";
          const ward = addressViewParts ? addressViewParts[1] : "";
          const district = addressViewParts ? addressViewParts[2] : "";
          const province = addressViewParts ? addressViewParts[3] : "";

          const addressCodeParts = addressCode ? addressCode.split("+") : "";

          // Extract components
          const provinceCode = addressCodeParts ? addressCodeParts[0] : "";
          const districtCode = addressCodeParts ? addressCodeParts[1] : "";
          const wardCode = addressCodeParts ? addressCodeParts[2] : "";
          return {
            ...item,
            addressView: { streets, ward, district, province },
            addressCode: {
              province: provinceCode,
              district: districtCode,
              ward: wardCode,
            },
          };
        } else {
          return {
            ...item,
            addressView: { streets: "There is no address value" },
          };
        }
      })
    : [];
  return newAddress;
};

//GET WARD QUERY BY USE GET WARD FUNCTION
export const useGetAddresses = () => {
  const { data, isLoading, isFetching, error, refetch } = useQuery(
    "userAddress",
    getAllAddress
  );
  // console.log("check addresses:", data);
  return { data, isLoading, isFetching, error, refetch };
};

//ADD ADDRESS
async function addUserAddress(input) {
  console.log(input, "register input");

  const { data } = await http.post(API_ENDPOINTS.ADD_USER_ADDRESSES, input);
  console.log("register response", data);

  return data.data;
}
//REGISTER MUTATION BY USE REGISTER FUNCTION
export const useAddUserAddressMutation = () => {
  return useMutation((input) => addUserAddress(input), {
    onSuccess: (data) => {
      console.log(data, "add success");
      toast.success("add success");
    },
    onError: (error, data) => {
      console.log(error.response.data.errors, data, "add fail");
      toast.error("add fail");
    },
  });
};

//SET DEFAULT ADDRESS
async function setDefaultAddress(address_id) {
  console.log(address_id, "address_id");

  const { data } = await http.post(
    API_ENDPOINTS.SET_DEFAULT_ADDRESS + address_id
  );
  console.log("register response", data);

  return data.data;
}
//REGISTER MUTATION BY USE REGISTER FUNCTION
export const useSetDefaultAddress = () => {
  const queryClient = useQueryClient();

  return useMutation((address_id) => setDefaultAddress(address_id), {
    onSuccess: (data) => {
      console.log(data, "set default address success");
      queryClient.invalidateQueries("userAddress");
      toast.success("set default address success");
    },
    onError: (error, data) => {
      console.log(error.response.data.errors, data, "set default address fail");
      toast.error("set default address fail");
    },
  });
};
