import React, { useEffect, useState } from "react";
import { useOrderState } from "../../zustand-store/OrderState";
import { useGetProducts } from "../../api/product";
import { Link } from "react-router-dom";

export default function CompletePage() {
  const { data: productData, isLoading: productLoading } = useGetProducts();
  const [OrderList, setOrderList] = useState([]);

  // const { subtotal, orderState, addAddressId, addNewOrderDetails } =
  //   useOrderState((state) => state);
  const orderState = {
    order_details: [
      {
        product_id: "664b23651fa659f95ff46e7d",
        price_final: 800000,
        quantity: 1,
      },
      {
        product_id: "664b23771fa659f95ff46e80",
        price_final: 750000,
        quantity: 1,
      },
    ],
    address_id: "667e109bc6f4b92005444389",
    payment_type: 2,
    ship_method: 1,
  };
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
    // }, [productData, orderState]);
  }, [productData]);

  console.log("orderList", OrderList);
  console.log("subtotal", orderState);
  return (
    <div>
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
        <div className="w-1/4  flex flex-col text-center border-[1px] border-slate-400 rounded-xl p-8 ml-3">
          <p className="text-2xl font-bold text-red-600">Notice!!!</p>
          <p className="text-sm ">
            Please make a tranfers for the following account with the content is
            order key
          </p>

          <div className="flex flex-wrap my-3 item-center mx-auto">
            {orderState && // Check if orderState is truthy
              (orderState.payment_type === 1 ? (
                <img src="/banking.jpg" alt="Banking" />
              ) : orderState.payment_type === 2 ? (
                <img src="/momo.jpg" alt="Momo" />
              ) : null)}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-4">
        <Link to="/user/user-order" className="text-center">
          See My Order List
        </Link>
      </div>
    </div>
  );
}
