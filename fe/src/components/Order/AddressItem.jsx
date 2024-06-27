import React from "react";
import { useCheckedItemsState } from "../../zustand-store/AddressSelectState";
import { useOrderState } from "../../zustand-store/OrderState";
import styled from "styled-components";
import ConfirmButton from "../UI/ModalConfirm";
import { DeleteOutlined } from "@ant-design/icons";
import EditAddress from "../User/Address/edit-address";
import { useDeleteAddressMutation } from "../../api/User/address";

const StyledButton = styled(ConfirmButton)`
  border-color: #ffffff !important;
  box-shadow: none !important;
`;

export default function AddressItem({ item }) {
  const { checkedItems, setCheckedItem } = useCheckedItemsState();
  const { mutate: deleteAddress } = useDeleteAddressMutation();

  const { addAddressId, orderState } = useOrderState((state) => state);
  const selectedItem = checkedItems.find(
    (checkedItem) => checkedItem._id === item._id
  );
  const setSelectAddress = (id) => {
    setCheckedItem(id);
    addAddressId(id);
  };

  const handleDeleteAddress = (address_id) => {
    debugger;
    deleteAddress(address_id);
  };
  return (
    <div>
      <div onClick={() => setSelectAddress(item._id)}>
        <div
          className={
            " p-3 px-3 lg:px-10 m-3 rounded-lg text-xs lg:text-sm text-black font-extralight " +
            (selectedItem?.isCheck
              ? "border-pink-300 border-2"
              : "border-gray-300 hover:border-pink-300 border-[1px]")
          }
        >
          <div className="flex">
            <div className="w-2/3">
              {item.default ? (
                <p className="text-red-500 font-bold pb-2 pt-1">
                  Default Address
                </p>
              ) : (
                <p className="font-bold text-black pb-2 pt-1">Option Address</p>
              )}
            </div>
            <div className=" flex w-1/3 justify-end ">
              <div>
                <StyledButton
                  onClick={() => handleDeleteAddress(item._id)}
                  title={"Do you want to delete this address"}
                  content={"This action will be delete addres forever"}
                >
                  <DeleteOutlined className="cursor-pointer text-red-200 hover:text-red-500 mb-3 text-lg" />
                </StyledButton>
              </div>
              <div className="mt-1">
                <EditAddress item={item} />
              </div>
            </div>
          </div>
          <p>{item.addressView?.streets} District</p>
          <p className="py-2">{item.phoneNumber}</p>

          <p className="py-1">
            {item.addressView?.streets}, {item.addressView?.ward},{" "}
            {item.addressView?.district}, {item.addressView?.province}
          </p>
        </div>
      </div>
    </div>
  );
}
