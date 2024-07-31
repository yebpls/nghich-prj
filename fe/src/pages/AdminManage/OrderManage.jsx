import React from "react";
import OrderList from "../../components/Admin/Order/OrderList";

export default function OrderManage() {
  return (
    <div>
      <div className="m-10 max-w-full text-black font-semibold">
        <h1 className="text-4xl my-2">Order Management</h1>
        <p className="text-xl mx-2 font-medium">You have Recieved(All Time)</p>
      </div>
      <OrderList />
    </div>
  );
}
