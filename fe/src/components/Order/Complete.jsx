import React, { useEffect, useState } from "react";
import { useOrderState } from "../../zustand-store/OrderState";
import { useGetProducts } from "../../api/product";

export default function CompletePage() {
  const { data: productData, isLoading: productLoading } = useGetProducts();
  const [OrderList, setOrderList] = useState([]);

  const { subtotal, orderState, addAddressId, addNewOrderDetails } =
    useOrderState((state) => state);
  useEffect(() => {
    if (productData) {
      const combinedArray = orderState?.order_details?.map((orderItem) => {
        const productItem = productData.find(
          (product) => product._id === orderItem.product_id
        );
        if (productItem) {
          const { quantity, ...productItemWithoutQuantity } = productItem;
          return {
            ...orderItem,
            ...productItemWithoutQuantity,
          };
        }
        return orderItem;
      });
      setOrderList(combinedArray);
    }
  }, [productData, orderState]);
  console.log("orderList", OrderList);
  return (
    <div className="flex item-center mx-auto justify-center  ">
      <div className="w-1/4  flex flex-col text-center border-[1px] border-slate-400 rounded-xl p-8">
        <p className="text-lg ">Thank you!!!</p>
        <p className="text-2xl font-bold text-black">
          Your order have been received
        </p>
        <div className="flex flex-wrap my-3 item-center mx-auto">
          {OrderList?.map((item, index) => (
            <div className="" key={index}>
              <img
                className="w-10 md:w-12 lg:w-16 ml-3"
                src={item?.images[0]?.url}
                alt=""
                srcSet=""
              />
            </div>
          ))}
        </div>
        {/* <div className="flex flex-col items-start px-5 mx-auto">
          <p>Order Code: </p>
          <p>Date: </p>
          <p>Total: </p>
          <p>Payment Method: </p>
        </div> */}
      </div>
    </div>
  );
}
