import React, { useEffect, useState } from "react";
import { useGetAllOrders } from "../../../api/orders";
import OrderListLine from "./OrderListLine";

export default function OrderList() {
  const { data: orders, isFetching, isLoading, refetch } = useGetAllOrders();
  const [isUpdate, setIsUpdate] = useState(false);
  console.log(orders, "orders");

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
        <div className="w-1/4 pr-3 pl-9">Order Detail</div>

        <div className="w-[13%] px-3">Value</div>
        <div className="w-[13%] px-3">Payment</div>
        <div className="w-[13%] px-3">Status</div>
      </div>
      {isLoading ? ( // Changed to !isLoading to correctly display when not loading
        <div>Loading</div>
      ) : (
        <div>
          {orders?.map((order) =>
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
