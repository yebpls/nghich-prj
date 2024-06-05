import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useForm } from "react-hook-form";
import AddAddress from "../../components/User/Address/add-address";
import { useGetAddresses } from "../../api/User/address";

export default function UserAddress() {
  const { data: addressData, isLoading: addressLoading } = useGetAddresses();
  return (
    <div>
      <AddAddress />
      <div className="grid grid-cols-2">
        {addressData &&
          addressData.map((item) => (
            <div className=" p-4 px-5 m-3 border-2 rounded-lg text-xs lg:text-sm text-black font-extralight ">
              {item.default ? (
                <p className="text-red-500 font-bold pb-2 pt-1">
                  Default Address
                </p>
              ) : (
                <p className="font-bold text-black pb-2 pt-1">Option Address</p>
              )}
              <p>{item.addressView.streets} District</p>
              <p className="py-2">{item.phoneNumber}</p>

              <p className="py-1">
                {item.addressView.streets}, {item.addressView.ward},{" "}
                {item.addressView.district}, {item.addressView.province}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
