import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useForm } from "react-hook-form";
import AddAddress from "../../components/User/Address/add-address";
import { useGetAddresses } from "../../api/User/address";
import AddressCard from "../../components/User/Address/address-card";

export default function UserAddress() {
  const { data: addressData, isLoading: addressLoading } = useGetAddresses();
  console.log("check addresses:", addressData);
  return (
    <div>
      <AddAddress />
      <div className="md:grid md:grid-cols-2">
        {addressData &&
          addressData.map((item) => <AddressCard key={item._id} item={item} />)}
      </div>
    </div>
  );
}
