import React from "react";
import CustomerList from "../../components/Admin/Customer/CustomerList";

export default function CustomerManage() {
  return (
    <div>
      <div className="m-10 text-black font-semibold">
        <h1 className="text-4xl my-2">Customer Management</h1>
        <p className="text-xl mx-2 font-medium">You have Recieved(All Time)</p>
      </div>
      <CustomerList />
    </div>
  );
}
