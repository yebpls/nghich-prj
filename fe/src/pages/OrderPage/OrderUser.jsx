import { useState } from "react";
import { useOrderNavState } from "../../zustand-store/OrderNavState.js";
import CartPage from "../../components/Order/Cart.jsx";
import CheckOutPage from "../../components/Order/CheckOut.jsx";
import CompletePage from "../../components/Order/Complete.jsx";
import { useOrderState } from "../../zustand-store/OrderState.js";
import { useCustomBagOrderState } from "../../zustand-store/customBagOrderState.js";

const OrderUser = () => {
  const {
    cartStatus,
    checkoutStatus,
    completeStatus,
    viewCart,
    checkout,
    complete,
  } = useOrderNavState();

  const { cartItems } = useOrderState((state) => ({
    cartItems: state.cartItems,
  }));

  const { orderState: customBagOrderState } = useCustomBagOrderState(
    (state) => ({
      orderState: state.orderState,
    })
  );

  console.log(cartStatus, checkoutStatus, completeStatus);
  console.log("Cart Items:", cartItems); // Log cart items
  console.log("Custom Bag Order State:", customBagOrderState);

  return (
    <div>
      <div className=" text-black w-11/12 lg:w-5/6 mx-auto">
        <div className="page-name text-center pt-7">
          <h1 className="text-lg">CART</h1>
        </div>
        <div className="process flex flex-wrap justify-center py-7">
          <div className="process-step w-1/3  font-bold py-3 px-2 lg:px-20 ">
            <div
              className="flex items-center border-b-2 border-black w-fit py-3 cursor-pointer "
              onClick={viewCart}
            >
              <div
                className={
                  `step-no rounded-full w-6 lg:w-12 h-6 lg:h-12 text-center content-center text-sm lg:text-lg ` +
                  (cartStatus === 1
                    ? "bg-slate-400  text-white"
                    : cartStatus === 2
                    ? "bg-[#CFF53E] text-black"
                    : cartStatus === 3
                    ? "bg-pink-400  text-white"
                    : "")
                }
              >
                {cartStatus === 3 ? "✓" : "1"}
              </div>
              <div className="step-name text-[10px] lg:text-xl ml-3  mr-3">
                Shopping cart
              </div>
            </div>
          </div>
          <div className="process-step w-1/3  font-bold py-3 px-2 lg:px-20 ">
            <div
              className="flex items-center border-b-2 border-black w-fit py-3 cursor-pointer "
              onClick={checkout}
            >
              <div
                className={
                  `step-no rounded-full w-6 lg:w-12 h-6 lg:h-12 text-center content-center text-sm lg:text-lg ` +
                  (checkoutStatus === 1
                    ? "bg-slate-400  text-white"
                    : checkoutStatus === 2
                    ? "bg-[#CFF53E] text-black"
                    : checkoutStatus === 3
                    ? "bg-pink-400  text-white"
                    : "")
                }
              >
                {checkoutStatus === 3 ? "✓" : "2"}
              </div>
              <div className="step-name text-[10px] lg:text-xl ml-3  mr-3">
                Checkout Details
              </div>
            </div>
          </div>
          <div className="process-step w-1/3  font-bold py-3 px-2 lg:px-20 ">
            <div
              className="flex items-center border-b-2 border-black w-fit py-3 cursor-pointer "
              onClick={complete}
            >
              <div
                className={
                  `step-no rounded-full w-6 lg:w-12 h-6 lg:h-12 text-center content-center text-sm lg:text-lg ` +
                  (completeStatus === 1
                    ? "bg-slate-400  text-white"
                    : completeStatus === 2
                    ? "bg-[#CFF53E] text-black"
                    : completeStatus === 3
                    ? "bg-pink-400  text-black"
                    : "")
                }
              >
                {checkoutStatus === 3 ? "✓" : "3"}
              </div>
              <div className="step-name text-[10px] lg:text-xl ml-3 mr-3 ">
                Order complete
              </div>
            </div>
          </div>
        </div>
      </div>
      {cartStatus === 2 && <CartPage />}
      {checkoutStatus === 2 && <CheckOutPage />}
      {completeStatus === 2 && <CompletePage />}
    </div>
  );
};

export default OrderUser;
