import React, { useState } from "react";
import { Collapse, Table, Image } from "antd";
import { useGetAllOrders, useUpdateOrderStatus } from "../../../api/orders";
import { useAllUser } from "../../../api/User/user";
import useColumnFilters from "../../Table/utils";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
export default function TestTable() {
  const { data: orders, isFetching, isLoading, refetch } = useGetAllOrders();
  const { mutate: updateOrderStatus, isSuccess } = useUpdateOrderStatus();
  const { getColumnSearchProps } = useColumnFilters();
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
        order_key: orderKey, // Use the safe variable here
      },
    };
  });
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      width: "13%",
      ...getColumnSearchProps("username", "Search"),
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
        return (
          <Collapse
            ghost
            accordion
            items={[
              {
                key: "1",
                label: item.order_key,
                children: (
                  <div className="">
                    {
                      item.order_key.startsWith("CT") ? (
                        <div>
                          <p>Custom tote</p>
                          {item.order_details?.map((item) => (
                            <div
                              key={item._id}
                              className="flex text-sm text-center my-1"
                            >
                              <Image
                                width={50}
                                src={item?.image}
                                className="rounded-lg"
                              />
                              <div>
                                <p className="text-slate-500 flex items-center  ml-1">
                                  {item?.name}: {item.quantity}
                                </p>
                                <div className="mx-1 w-fit flex">
                                  <p>color: {item.color}</p>
                                  <span style={{ color: `#${item.color}` }}>
                                    ■
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div> // Replace null with your desired JSX/content for "CT" condition
                      ) : item.order_key.startsWith("PD") ? (
                        <div>
                          {item.order_details?.map((item) => (
                            <div
                              key={item._id}
                              className="flex text-sm text-center"
                            >
                              <Image
                                width={50}
                                src={item?.product?.images[0]?.url}
                                className="rounded-lg"
                              />
                              <p className="text-slate-500 flex items-center justify-center ml-1">
                                {item.product.name}: {item.quantity}
                              </p>
                            </div>
                          ))}
                        </div> // Replace null with your desired JSX/content for "PD" condition
                      ) : null // Replace null with your desired JSX/content for the default condition
                    }
                  </div>
                ),
              },
            ]}
          />
        );
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
      width: "25%",
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
              switch (payment) {
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
          <div className=" px-3 -py-1 ">
            {record?.order_status === 0 ? (
              <div className="flex text-sm">
                <button
                  className="bg-white mx-1 text-blue-400 border-[1px] border-blue-400 hover:bg-blue-400 hover:text-white px-5 font-light py-1 rounded-full"
                  onClick={() =>
                    handleUpdateStatus({
                      id: record._id,
                      status: record.order_status,
                    })
                  }
                >
                  Shipping
                </button>
                <button
                  className="bg-white mx-1 text-red-400 border-[1px] border-red-400 hover:bg-red-400 hover:text-white px-5 font-light py-1 rounded-full"
                  onClick={() =>
                    cancelOrder({ id: record._id, status: record.order_status })
                  }
                >
                  Cancel
                </button>
              </div>
            ) : record?.order_status === 1 ? (
              <div className="flex text-sm">
                <button
                  className="bg-white mx-1 text-pink-400 border-[1px] border-pink-400 hover:bg-pink-400 hover:text-white px-5 font-light py-1 rounded-full"
                  onClick={() =>
                    handleUpdateStatus({
                      id: record._id,
                      status: record.order_status,
                    })
                  }
                >
                  Complete
                </button>
                <button
                  className="bg-white mx-1 text-red-400 border-[1px] border-red-400 hover:bg-red-400 hover:text-white px-5 font-light py-1 rounded-full"
                  onClick={() =>
                    cancelOrder({ id: record._id, status: record.order_status })
                  }
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        );
      },
      width: "20%",
    },
  ];
  console.log(orders, "combinedListt");
  return (
    <Table columns={columns} dataSource={combinedList} onChange={onChange} />
  );
}
