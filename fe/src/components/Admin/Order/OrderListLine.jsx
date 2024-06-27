import React, { useEffect, useState } from "react";
import { useGetAllOrders, useUpdateOrderStatus } from "../../../api/orders";
import { Collapse, Image } from "antd";

export default function OrderListLine({ order, setIsUpdate, isUpdate }) {
  const { mutate: updateOrderStatus, isSuccess } = useUpdateOrderStatus();

  const total_price = new Intl.NumberFormat("en-US").format(
    order.order_details.reduce(
      (acc, item) => acc + item.price_final * item.quantity,
      0
    )
  );

  const handleUpdateStatus = (orderId) => {
    switch (order.order_status) {
      case 0:
        updateOrderStatus({ orderId, input: { order_status: 1 } });
        break;
      case 1:
        updateOrderStatus({ orderId, input: { order_status: 2 } });
        break;
      default:
        updateOrderStatus({ orderId, input: { order_status: 0 } });
    }
  };
  const cancelOrder = (orderId) => {
    updateOrderStatus({ orderId, input: { order_status: 3 } });
  };

  useEffect(() => {
    if (isSuccess) {
      setIsUpdate(true);
    }
  }, [isSuccess]);
  const items = [
    {
      key: "1",
      label: order.order_key,
      children: (
        <div className="">
          {order.order_details?.map((item) => (
            <div key={item._id} className="flex text-sm text-center">
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
        </div>
      ),
    },
  ];
  return (
    <div className="p-3 flex w-full" key={order.order_key}>
      <div className="w-1/6 pr-3 pl-9">{order.user.username}</div>

      <div className="w-1/4 px-3">
        <Collapse
          ghost
          accordion
          items={[
            {
              key: "1",
              label: order.order_key,
              children: (
                <div className="">
                  {order.order_details?.map((item) => (
                    <div key={item._id} className="flex text-sm text-center">
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
                </div>
              ),
            },
          ]}
        />
      </div>
      <div className="px-3 w-[13%]">
        <p>{total_price}</p>
      </div>
      <div className="px-3 w-[10%]">
        <p>
          {(() => {
            switch (order.payment_type) {
              case 0:
                return "Shipcod";
              case 1:
                return "Banking";
              case 2:
                return "MOMO";
              default:
                return "Unknown Payment Type";
            }
          })()}
        </p>
      </div>
      <div className="px-3 w-[10%]">
        <p>
          {(() => {
            switch (order.order_status) {
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
      </div>

      {/* <p>user id: {order.user_id}</p> */}
      <div className=" px-3 -py-1 ">
        {order?.order_status === 0 ? (
          <div className="flex text-sm">
            <button
              className="bg-white mx-1 text-blue-400 border-[1px] border-blue-400 hover:bg-blue-400 hover:text-white px-5 font-light py-1 rounded-full"
              onClick={() => handleUpdateStatus(order._id)}
            >
              Shipping
            </button>
            <button
              className="bg-white mx-1 text-red-400 border-[1px] border-red-400 hover:bg-red-400 hover:text-white px-5 font-light py-1 rounded-full"
              onClick={() => cancelOrder(order._id)}
            >
              Cancel
            </button>
          </div>
        ) : order?.order_status === 1 ? (
          <div className="flex text-sm">
            <button
              className="bg-white mx-1 text-pink-400 border-[1px] border-pink-400 hover:bg-pink-400 hover:text-white px-5 font-light py-1 rounded-full"
              onClick={() => handleUpdateStatus(order._id)}
            >
              Complete
            </button>
            <button
              className="bg-white mx-1 text-red-400 border-[1px] border-red-400 hover:bg-red-400 hover:text-white px-5 font-light py-1 rounded-full"
              onClick={() => cancelOrder(order._id)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
