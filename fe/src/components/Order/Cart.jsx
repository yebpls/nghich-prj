import { useState } from "react";
import { useCartStore } from "../../zustand-store/cartState";
import { Radio } from "antd";
import CartItem from "./CartItem";
import { useOrderNavState } from "../../zustand-store/OrderNavState";
import { useOrderState } from "../../zustand-store/OrderState";

const CartPage = () => {
  const { cartItems } = useCartStore((state) => state);
  const {
    addPaymentType,
    orderState,
    addNewOrderDetails,
    getSubtotal,
    subtotal,
  } = useOrderState((state) => state);
  const [paymentType, setPaymentType] = useState(orderState.payment_type);

  const { checkout } = useOrderNavState();

  const changePaymentType = (e) => {
    setPaymentType(e.target.value);
    addPaymentType(e.target.value);
    console.log("radio checked", e.target.value);
  };

  const createCheckout = () => {
    checkout();
    if (cartItems) {
      addNewOrderDetails(cartItems);
      console.log("check order detail at cart", orderState);
    }
    console.log("checkout", cartItems, paymentType, orderState);
  };
  console.log("cartItems", cartItems);

  return (
    <div className="main text-black w-11/12 lg:w-5/6 mx-auto">
      <div className="cart pb-[300px]">
        <div className="container my-0 mx-[auto]">
          <div className="content-wrapper flex flex-wrap">
            <div className="cart-left w-full lg:w-2/3 pr-0 lg:pr-10">
              <div className="w-full text-left">
                <div className="pb-3 flex border-b border-black text-sm lg:text-base">
                  <div className="w-1/2">Product</div>
                  <div className="w-1/6">Quantity</div>
                  <div className="w-1/6">Price</div>
                  <div className="w-1/6">Subtotal</div>
                </div>
                {cartItems && cartItems.map((item) => <CartItem item={item} />)}
              </div>
            </div>

            <div className="cart-right w-full lg:w-1/3 border border-black rounded-lg">
              <div className="content-wrapper p-7">
                <h3 className="form-label text-lg pb-4 font-semibold">
                  Cart Summary
                </h3>
                <div className="payment">
                  <Radio.Group onChange={changePaymentType} value={paymentType}>
                    <Radio
                      value={0}
                      className={
                        `text-black p-2 rounded-md border-[1px] border-black my-1 w-full` +
                        (paymentType === 0 ? " bg-pink-400 " : "")
                      }
                    >
                      Ship cod + 30.000vnd
                    </Radio>

                    <Radio
                      value={1}
                      className={
                        `text-black p-2 rounded-md border-[1px] border-black my-1  w-full` +
                        (paymentType === 1 ? " bg-pink-400 " : "")
                      }
                    >
                      Banking
                    </Radio>
                    <Radio
                      value={2}
                      className={
                        `text-black p-2 rounded-md border-[1px] border-black my-1  w-full` +
                        (paymentType === 2 ? " bg-pink-400 " : "")
                      }
                    >
                      MOMO
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="total flex justify-between mt-[50px] text-[30px] font-bold">
                  <h3>Total</h3>
                  <h3>1</h3>
                </div>
                <button
                  className="bg-[#CFF53E] w-full py-[20px] text-[20px] rounded-lg font-bold mt-[50px]"
                  type="submit"
                  onClick={() => createCheckout()}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
