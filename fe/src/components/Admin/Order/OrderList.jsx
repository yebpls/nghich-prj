import React, { useState } from "react";
import { Collapse, Table, Image } from "antd";
import { useGetAllOrders, useUpdateOrderStatus } from "../../../api/orders";
import { useAllUser } from "../../../api/User/user";
import OrderDetail from "./OrderDetail";
import OrderAction from "./OrderAction";
import { useGetAllTransactions } from "../../../api/transactionApi";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
export default function OrderList() {
  const { data: orders, isFetching, isLoading, refetch } = useGetAllOrders();
  const { mutate: updateOrderStatus, isSuccess } = useUpdateOrderStatus();
  const { data: transactions } = useGetAllTransactions();
  console.log(transactions, "transactions");
  console.log(orders, "orders");
  const handleUpdateStatus = (value) => {
    console.log(value.id, value.status, "id, status");
    switch (value.status) {
      case 0:
        updateOrderStatus({ orderId: value.id, input: { order_status: 1 } });
        break;
      case 1:
        updateOrderStatus({ orderId: value.id, input: { order_status: 2 } });
        break;
      default:
        updateOrderStatus({ orderId: value.id, input: { order_status: 0 } });
    }
  };
  const cancelOrder = (value) => {
    console.log(value.id, value.status, "id, status");

    updateOrderStatus({ orderId: value.id, input: { order_status: 3 } });
  };
  const combinedList = orders?.map((order) => {
    // Ensure order.order_key is defined before calling startsWith
    const orderKey = order.order_key || ""; // Fallback to an empty string if undefined
    return {
      ...order,
      total: orderKey.startsWith("PD")
        ? order.order_details
            ?.reduce((acc, item) => acc + item.price_final * item.quantity, 0)
            .toLocaleString()
        : orderKey.startsWith("CT")
        ? order.custom_detail
            ?.reduce((acc, item) => acc + item.price_final * item.quantity, 0)
            .toLocaleString()
        : "",
      username: order.user.username,
      order_list: {
        order_details: orderKey.startsWith("PD")
          ? order.order_details
          : orderKey.startsWith("CT")
          ? order.custom_detail
          : null,
        order_key: orderKey,
        address: order.address,
        // Use the safe variable here
      },
    };
  });
  // const combinedList = orders?.map((order) => {
  //   // Ensure order.order_key is defined before calling startsWith
  //   const orderKey = order.order_key || ""; // Fallback to an empty string if undefined

  //   // Find matching transactions for the current order
  //   const matchingTransactions = transactions?.filter(
  //     (transaction) =>
  //       transaction.order_id === order.id && transaction.order_key === orderKey
  //   );

  //   return {
  //     ...order,
  //     total: orderKey.startsWith("PD")
  //       ? order.order_details
  //           ?.reduce((acc, item) => acc + item.price_final * item.quantity, 0)
  //           .toLocaleString()
  //       : orderKey.startsWith("CT")
  //       ? order.custom_detail
  //           ?.reduce((acc, item) => acc + item.price_final * item.quantity, 0)
  //           .toLocaleString()
  //       : "",
  //     username: order.user.username,
  //     order_list: {
  //       order_details: orderKey.startsWith("PD")
  //         ? order.order_details
  //         : orderKey.startsWith("CT")
  //         ? order.custom_detail
  //         : null,
  //       order_key: orderKey,
  //       address: order.address,
  //     },
  //     transaction: matchingTransactions, // Add the matching transactions here
  //   };
  // });
  const orderListLine = [
    {
      title: "Username",
      dataIndex: "username",
      width: "13%",
    },
    {
      title: "Value",
      dataIndex: "total",
      sorter: (a, b) =>
        parseInt(a.total?.replace(/,/g, ""), 10) -
        parseInt(b.total?.replace(/,/g, ""), 10),
      width: "13%",
    },
    {
      title: "Order List",
      dataIndex: "order_list",
      render: (item) => {
        console.log(item, "item");
        return <OrderDetail item={item} />;
      },
      filters: [
        {
          text: "Custom Tote",
          value: "CT",
        },
        {
          text: "Product Tote",
          value: "PD",
        },
      ],
      onFilter: (value, record) => {
        // Ensure record.order_detail and record.order_detail.order_key are not undefined
        if (
          record.order_list &&
          record.order_list.order_key &&
          (value === "CT" || value === "PD")
        ) {
          return record.order_list.order_key.startsWith(value);
        }
        return false;
      },
      filterSearch: true,
      width: "30%",
    },
    {
      title: "Status",
      dataIndex: "order_status",
      render: (status) => {
        return (
          <p>
            {(() => {
              switch (status) {
                case 0:
                  return <p className="text-orange-400">Pending</p>;
                case 1:
                  return <p className="text-blue-400">Shipping</p>;

                case 2:
                  return <p className="text-pink-400">Completed</p>;

                case 3:
                  return <p className="text-red-400">Cancel</p>;

                default:
                  return "Unknown Status";
              }
            })()}
          </p>
        );
      },
      filters: [
        {
          text: "Pending",
          value: "0",
        },
        {
          text: "Shipping",
          value: "1",
        },
        {
          text: "Completed",
          value: "2",
        },
        {
          text: "Canceled",
          value: "3",
        },
      ],

      onFilter: (value, record) =>
        record.order_status.toString().startsWith(value.toString()),
      filterSearch: true,
      width: "15%",
    },
    {
      title: "Payment",
      dataIndex: "payment_type",
      render: (payment) => {
        return (
          <p>
            {(() => {
              const paymentType = parseInt(payment, 10); // Parse payment as an integer
              switch (paymentType) {
                case 0:
                  return <p className="text-orange-400">Shipcod</p>;
                case 1:
                  return <p className="text-blue-400">Banking</p>;
                case 2:
                  return <p className="text-pink-500">Momo</p>;
                default:
                  return "Unknown Payment Type";
              }
            })()}
          </p>
        );
      },
      filters: [
        {
          text: "Shipcod",
          value: "0",
        },
        {
          text: "Banking",
          value: "1",
        },
        {
          text: "Momo",
          value: "2",
        },
      ],
      onFilter: (value, record) =>
        record.payment_type.toString().startsWith(value.toString()),
      filterSearch: true,
      width: "15%",
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <OrderAction
            record={record}
            handleUpdateStatus={handleUpdateStatus}
            cancelOrder={cancelOrder}
          />
        );
      },
      width: "10%",
    },
  ];
  console.log(orders, "combinedListt");
  return (
    <Table
      columns={orderListLine}
      dataSource={combinedList}
      onChange={onChange}
    />
  );
}
