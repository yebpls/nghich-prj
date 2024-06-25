import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { set, useForm } from "react-hook-form";
import AddAddress from "../../components/User/Address/add-address";
import { useGetAddresses } from "../../api/User/address";
import AddressCard from "../../components/User/Address/address-card";

export default function UserAddress() {
  const [isAddAddress, setIsAddAddress] = useState(false);
  const {
    data: addressData,
    isLoading: addressLoading,
    refetch,
  } = useGetAddresses();
  console.log("check addresses:", addressData);
  useEffect(() => {
    if (isAddAddress) {
      refetch();
      setIsAddAddress(false);
    }
  }, [isAddAddress]);
  return (
    <div>
      <AddAddress setIsAddAddress={setIsAddAddress} />
      <div className="md:grid md:grid-cols-2">
        {addressData &&
          addressData.map((item) => <AddressCard key={item._id} item={item} />)}
      </div>
    </div>
  );
}
