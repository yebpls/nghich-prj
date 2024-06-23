import React, { useEffect, useState } from "react";
import { useGetAllOrders } from "../../../api/orders";
import OrderListLine from "./OrderListLine";
import { useAllUser } from "../../../api/User/user";

export default function OrderList() {
  const { data: orders, isFetching, isLoading, refetch } = useGetAllOrders();
  const { data: users } = useAllUser();
  const [isUpdate, setIsUpdate] = useState(false);
  console.log(orders, users, "orders");

  const combinedList = orders?.map((order) => {
    // Find the user that matches the order's user_id
    const user = users?.find((user) => user._id === order.user_id);
    // Return a new object that combines the order with the username
    // If the user is found, add the username, otherwise, username is undefined
    return {
      ...order,
      username: user ? user.username : undefined,
    };
  });
  useEffect(() => {
    console.log(isUpdate, "is update");
    if (isUpdate) {
      refetch();
      setIsUpdate(false);
    }
  }, [isUpdate]);

  // Ensure isLoading correctly reflects the loading state
  return (
    <div>
      <div className="w-full flex p-3 text-sm text-black">
        <div className="w-1/6 pr-3 pl-9">Username</div>

        <div className="w-1/4 pr-3 pl-9">Order Detail</div>

        <div className="w-[13%] px-3">Value</div>
        <div className="w-[10%] px-3">Payment</div>
        <div className="w-[10%] px-3">Status</div>
      </div>
      {isLoading ? ( // Changed to !isLoading to correctly display when not loading
        <div>Loading</div>
      ) : (
        <div>
          {combinedList?.map((order) =>
            order.order_key ? (
              <OrderListLine
                key={order.order_key} // Added key prop for list rendering
                order={order}
                isUpdate={isUpdate}
                setIsUpdate={setIsUpdate}
                // updateParent={() => triggerReload} // Directly pass triggerReload
              />
            ) : (
              <div key={`empty-${Math.random()}`}></div> // Ensure even empty divs have a unique key
            )
          )}
        </div>
      )}
    </div>
  );
}
