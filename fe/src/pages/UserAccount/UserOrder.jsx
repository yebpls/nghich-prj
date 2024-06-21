import React from "react";
import { useGetAllOrders } from "../../api/orders";

export default function UserOrder() {
  const { data, isLoading, isFetching, error } = useGetAllOrders();
  console.log("check orders:", data);
  return <div>UserOder</div>;
}
