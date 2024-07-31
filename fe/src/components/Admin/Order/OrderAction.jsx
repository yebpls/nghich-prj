import React from "react";

export default function OrderAction({
  record,
  handleUpdateStatus,
  cancelOrder,
}) {
  return (
    <div>
      {record?.order_status === 0 ? (
        <div className="flex text-sm">
          <button
            className="bg-white mx-1 text-blue-400 border-[1px] border-blue-400 hover:bg-blue-400 hover:text-white px-3 font-light py-1 rounded-full"
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
            className="bg-white mx-1 text-red-400 border-[1px] border-red-400 hover:bg-red-400 hover:text-white px-3 font-light py-1 rounded-full"
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
}
