import React, { useEffect, useState } from "react";
import { useGetAllOrders } from "../../../api/orders";
import OrderListLine from "./OrderListLine";
import { useAllUser } from "../../../api/User/user";
import TestTable from "./TestTableOrder";

export default function OrderList() {
  return (
    <div>
      <TestTable />
    </div>
  );
}
