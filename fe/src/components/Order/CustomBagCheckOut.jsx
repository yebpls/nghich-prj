import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCustomBagOrderState } from "../../zustand-store/customBagOrderState";

export default function CustomBagCheckOut({ item, index }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const { updateOrderDetail, deleteOrderDetail, getSubtotal } =
    useCustomBagOrderState((state) => state);

  const deleteItem = (itemId) => {
    if (itemId) {
      deleteOrderDetail(itemId);
      getSubtotal();
    } else {
      toast.error("Item not found");
    }
  };

  useEffect(() => {
    if (quantity > 0) {
      updateOrderDetail(item.product_id, quantity);
      getSubtotal();
    }
  }, [quantity]);

  return (
    <div>
      {item && (
        <div className="flex text-xs lg:text-base border-b-2">
          <div className="py-5 w-4/5">
            <div className="product-col flex items-center">
              <img
                className="w-12 md:w-16 lg:w-20 ml-3"
                src={item.url}
                alt=""
                srcSet=""
              />
              <div className="product-info ml-3">
                <h6 className="product-name lg:text-sm text-xs font-bold">
                  {item.name || `Custom Bag - #${item.product_id}`}
                </h6>
                <div className="w-20">
                  <div className="text-center w-full my-auto text-md bg-[#CFF53E] rounded-md border-[1px] border-slate-500 flex flex-row">
                    <div
                      className="w-1/4 font-light ml-2 hover:bg-slate-300 rounded-lg cursor-pointer"
                      onClick={() =>
                        quantity === 1
                          ? deleteItem(item.product_id)
                          : setQuantity(quantity - 1)
                      }
                    >
                      -
                    </div>
                    <div className="w-1/2 font-light">{quantity}</div>
                    <div
                      className="w-1/4 font-light hover:bg-slate-300 rounded-lg cursor-pointer mr-2"
                      onClick={() =>
                        setQuantity(quantity === 20 ? quantity : quantity + 1)
                      }
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/5 my-auto">
            {item.price_final.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
      )}
    </div>
  );
}
