import React, { useState } from "react";
import { Collapse, Table, Image, Modal, Tooltip } from "antd";
import { useGetOrderByUser } from "../../api/orders";
import { set } from "react-hook-form";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
export default function UserOrder() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState({});

  const { data: orders, isFetching, isLoading, refetch } = useGetOrderByUser();

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
  console.log("combinelist ", combinedList);

  const showModal = (item) => {
    console.log("item", item);
    setModalData({
      payment_type: item.payment_type,
      order_key: item.order_key,
      total: item.total,
    });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const columns = [
    {
      title: "Order Key",
      dataIndex: "order_key",
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
                    <div className="text-sm text-slate-500">
                      Phone Number: {item.address?.phoneNumber}
                    </div>
                    <div className="text-xs text-slate-500 my-1">
                      Address: {item.address?.address?.split("...")[0]}
                    </div>

                    <div></div>
                    {
                      item.order_key.startsWith("CT") ? (
                        <div>
                          {item.order_details?.map((item) => (
                            <div
                              key={item._id}
                              className="flex text-sm text-center my-1"
                            >
                              <Image
                                width={100}
                                src={item?.image}
                                className="rounded-lg"
                              />
                              <div>
                                <p className="text-slate-500 flex items-center  ml-1">
                                  {item?.name}: {item.quantity}
                                </p>
                                <div
                                  className="mx-1 text-base w-fit flex"
                                  style={{ color: `#${item.color}` }}
                                >
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
      render: (item) => {
        console.log(item, "item");
        return (
          <p>
            {(() => {
              switch (item.payment_type) {
                case 0:
                  return <p className="text-orange-400">Shipcod</p>;
                case 1:
                  return item.order_status === 0 ? (
                    <Tooltip
                      placement="rightTop"
                      title="Click here to view transfer info"
                    >
                      <a
                        className="text-blue-600"
                        onClick={() => showModal(item)}
                      >
                        Banking
                      </a>
                    </Tooltip>
                  ) : (
                    <p className="text-blue-600">Banking</p>
                  );
                case 2:
                  return item.order_status === 0 ? (
                    <Tooltip
                      placement="rightTop"
                      title="Click here to view transfer info"
                    >
                      <a
                        className="text-pink-600"
                        onClick={() => showModal(item)}
                      >
                        Momo
                      </a>
                    </Tooltip>
                  ) : (
                    <p className="text-pink-600">Momo</p>
                  );
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
  ];
  console.log(orders, "combinedListt");
  return (
    <div>
      <Modal
        style={{ top: 13 }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p className="text-lg text-slate-800">
          Please make a transfer with the following information
        </p>
        <p className="text-sm text-slate-600">
          If you have been make tracsaction, you can just wait for shipping{" "}
        </p>
        <p className="text-lg text-red-500 mt-4">
          Value: {modalData?.total} VND
        </p>

        <p className="text-lg text-red-500">Content: {modalData.order_key}</p>
        {modalData.payment_type === 1 && (
          <img src="/banking.jpg" alt="Banking" />
        )}
        {modalData.payment_type === 2 && <img src="/momo.jpg" alt="Banking" />}
      </Modal>
      <Table
        columns={columns}
        dataSource={combinedList}
        onChange={onChange}
        pagination={
          combinedList && combinedList.length > 10 ? { pageSize: 10 } : false
        }
      />
    </div>
  );
}
