import React from "react";
import { useGetOrders } from "../../api/orders";

export default function UserOrder() {
  const { data, isLoading, isFetching, error } = useGetOrders();
  console.log("check orders:", data);
  return <div>UserOder</div>;
}
