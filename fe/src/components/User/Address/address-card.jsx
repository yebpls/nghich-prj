import React from "react";
import {
  useDeleteAddressMutation,
  useSetDefaultAddress,
} from "../../../api/User/address";
import { set } from "react-hook-form";
import EditAddress from "./edit-address";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import ConfirmButton from "../../UI/ModalConfirm";
import { Button } from "antd";

const StyledButton = styled(ConfirmButton)`
  border-color: #ffffff !important;
  box-shadow: none !important;
`;

export default function AddressCard({ item, setIsUpdateAddress }) {
  const { mutate: setDefaultAddress } = useSetDefaultAddress();
  const { mutate: deleteAddress } = useDeleteAddressMutation();
  const setDefault = (itemId) => {
    if (itemId) {
      setDefaultAddress(itemId);
    }
  };
  const handleDeleteAddress = (address_id) => {
    // debugger;
    deleteAddress(address_id);
  };
  return (
    <div>
      {item ? (
        <div className=" p-4 px-5 m-3 border-2 rounded-lg text-xs lg:text-sm text-black font-extralight ">
          {item.default ? (
            <p className="text-red-500 font-bold pb-2 pt-1">Default Address</p>
          ) : (
            <div className="font-bold pb-2 pt-1 flex">
              <p>Option Address</p>
              <a
                className="cursor-pointer ml-auto text-red-400 hover:text-red-500 font-thin"
                onClick={() => setDefault(item._id)}
              >
                Set default
              </a>
            </div>
          )}

          <p>{item.addressView.streets} District</p>
          <p className="py-2">{item.phoneNumber}</p>

          <p className="py-1">
            {item.addressView.streets}, {item.addressView.ward},{" "}
            {item.addressView.district}, {item.addressView.province}
          </p>

          <div className=" flex justify-end ">
            <div>
              <StyledButton
                onClick={() => handleDeleteAddress(item._id)}
                title={"Do you want to delete this address"}
                content={"This action will be delete addres forever"}
              >
                <DeleteOutlined className="cursor-pointer text-red-200 hover:text-blue-600 mt-0.5 text-lg" />
              </StyledButton>
            </div>
            <div className="mt-3">
              <EditAddress item={item} />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
