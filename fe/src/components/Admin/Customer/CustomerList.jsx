import React, { useEffect, useState } from "react";
import { useAllUser } from "../../../api/User/user";
import CustomerListLine from "./CustomerListLine";

export default function CustomerList() {
  const { data: users, isLoading, isFetching, error, refetch } = useAllUser();
  const [isUpdate, setIsUpdate] = useState(false);

  const user_address = (address) => {
    return address?.find((address) => address.default);
  };
  const filteredUsers = users
    ?.filter((user) => user.role === 1)
    .map((user) => {
      return {
        ...user,
        address: user_address(user.address),
      };
    });
  useEffect(() => {
    if (isUpdate) {
      refetch();
      setIsUpdate(false);
    }
  }, [isUpdate]);
  return (
    <div>
      <div className="m-6">
        <div className="w-full flex text-sm font-bold">
          <div className="w-[13%] p-3">Name</div>
          <div className="w-[13%] p-3">Username</div>
          <div className="w-1/5 p-3">Email</div>
          <div className="w-1/4 p-3">Address</div>
          <div className="w-1/6 p-3">Birthday</div>
        </div>
        {filteredUsers &&
          filteredUsers.map((user, index) =>
            user.role === 1 ? (
              <CustomerListLine
                key={user._id}
                index={index}
                user={user}
                setIsUpdate={setIsUpdate}
              />
            ) : null
          )}
      </div>
    </div>
  );
}
