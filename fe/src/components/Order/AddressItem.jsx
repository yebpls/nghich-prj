import React from "react";
import { useCheckedItemsState } from "../../zustand-store/AddressSelectState";
import { useOrderState } from "../../zustand-store/OrderState";

export default function AddressItem({ item }) {
  const { checkedItems, setCheckedItem } = useCheckedItemsState();
  const { addAddressId, orderState } = useOrderState((state) => state);
  const selectedItem = checkedItems.find(
    (checkedItem) => checkedItem._id === item._id
  );
  const setSelectAddress = (id) => {
    setCheckedItem(id);
    addAddressId(id);
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
          {item.default ? (
            <p className="text-red-500 font-bold pb-2 pt-1">Default Address</p>
          ) : (
            <p className="font-bold text-black pb-2 pt-1">Option Address</p>
          )}
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
