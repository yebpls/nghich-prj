import React from "react";
import { useSetDefaultAddress } from "../../../api/User/address";
import { set } from "react-hook-form";

export default function AddressCard({ item }) {
  const { mutate: setDefaultAddress } = useSetDefaultAddress();
  const setDefault = (itemId) => {
    if (itemId) {
      setDefaultAddress(itemId);
    }
  };
  return (
    <div>
      {item ? (
        <div className=" p-4 px-5 m-3 border-2 rounded-lg text-xs lg:text-sm text-black font-extralight ">
          {item.default ? (
            <p className="text-red-500 font-bold pb-2 pt-1">Default Address</p>
          ) : (
            <div className="font-bold text-black pb-2 pt-1 flex">
              <p>Option Address</p>
              <a
                className="cursor-pointer ml-auto font-thin"
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
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
