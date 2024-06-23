import { useEffect, useState } from "react";
import { useCartStore } from "../../zustand-store/cartState";
import { Radio } from "antd";
import CartItem from "./CartItem";
import { useOrderNavState } from "../../zustand-store/OrderNavState";
import { useOrderState } from "../../zustand-store/OrderState";
import { useCustomBagOrderState } from "../../zustand-store/customBagOrderState";
import CustomBagCartItem from "./CustomBagCartItem";

const CartPage = () => {
  const { cartItems } = useCartStore((state) => state);

  const {
    addPaymentType: addProductPaymentType,
    orderState: productOrderState,
    addNewOrderDetails: addProductOrderDetails,
    getSubtotal: getProductSubtotal,
    subtotal: productSubtotal,
  } = useOrderState((state) => state);

  const {
    addPaymentType: addCustomBagPaymentType,
    orderState: customBagOrderState,
    addNewOrderDetails: addCustomBagOrderDetails,
    getSubtotal: getCustomBagSubtotal,
    subtotal: customBagSubtotal,
  } = useCustomBagOrderState((state) => state);

  console.log("productOrderState", productOrderState);
  console.log("customBagOrderState", customBagOrderState);

  const [productPaymentType, setProductPaymentType] = useState(
    productOrderState?.payment_type ?? 0
  );
  const [customBagPaymentType, setCustomBagPaymentType] = useState(
    customBagOrderState?.payment_type ?? 0
  );

  const { checkout } = useOrderNavState();

  const changeProductPaymentType = (e) => {
    setProductPaymentType(e.target.value);
    addProductPaymentType(e.target.value);
    console.log("Product radio checked", e.target.value);
  };

  const changeCustomBagPaymentType = (e) => {
    setCustomBagPaymentType(e.target.value);
    addCustomBagPaymentType(e.target.value);
    console.log("Custom Bag radio checked", e.target.value);
  };

  const createCheckout = () => {
    checkout();
    if (productItems.length > 0) {
      addProductOrderDetails(productItems);
    }
    if (customBagItems.length > 0) {
      addCustomBagOrderDetails(customBagItems);
    }
    console.log("checkout", productOrderState, customBagOrderState);
  };

  useEffect(() => {
    getProductSubtotal();
    getCustomBagSubtotal();
  }, [
    productOrderState.order_details,
    customBagOrderState?.custom_bag_details,
  ]);

  const productItems = cartItems.filter((item) => !item.item.custom);
  const customBagItems = cartItems.filter((item) => item.item.custom);

  return (
    <div className="main text-black w-11/12 lg:w-5/6 mx-auto">
      <div className="cart mb-20">
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
                {productItems &&
                  productItems.map((item) => (
                    <CartItem key={item.item._id} item={item} />
                  ))}
              </div>
            </div>

            <div className="cart-right w-full lg:w-1/3 border border-black rounded-lg">
              <div className="content-wrapper p-7">
                <h3 className="form-label text-lg pb-4 font-semibold">
                  Cart Summary
                </h3>
                <div className="payment">
                  <Radio.Group
                    onChange={changeProductPaymentType}
                    value={productPaymentType}
                  >
                    <Radio
                      value={0}
                      className={`text-black p-2 rounded-md border-[1px] border-black my-1 w-full ${
                        productPaymentType === 0 ? "bg-pink-400" : ""
                      }`}
                    >
                      Ship cod + 30.000vnd
                    </Radio>
                    <Radio
                      value={1}
                      className={`text-black p-2 rounded-md border-[1px] border-black my-1 w-full ${
                        productPaymentType === 1 ? "bg-pink-400" : ""
                      }`}
                    >
                      Banking
                    </Radio>
                    <Radio
                      value={2}
                      className={`text-black p-2 rounded-md border-[1px] border-black my-1 w-full ${
                        productPaymentType === 2 ? "bg-pink-400" : ""
                      }`}
                    >
                      MOMO
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="total flex justify-between mt-[50px] text-[30px] font-bold">
                  <h3>Total</h3>
                  <h3>
                    {productSubtotal.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </h3>
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
      <div className="cart pb-[300px]">
        <div className="container my-0 mx-[auto]">
          <div className="content-wrapper flex flex-wrap">
            <div className="cart-left w-full lg:w-2/3 pr-0 lg:pr-10">
              <div className="w-full text-left">
                <div className="pb-3 flex border-b border-black text-sm lg:text-base">
                  <div className="w-1/2">Custom Bag</div>
                  <div className="w-1/6">Quantity</div>
                  <div className="w-1/6">Price</div>
                  <div className="w-1/6">Subtotal</div>
                </div>

                {customBagOrderState?.custom_bag_details.map((bag) => (
                  <CustomBagCartItem key={bag.product_id} item={bag} />
                ))}
              </div>
            </div>

            <div className="cart-right w-full lg:w-1/3 border border-black rounded-lg">
              <div className="content-wrapper p-7">
                <h3 className="form-label text-lg pb-4 font-semibold">
                  Custom Bag Cart Summary
                </h3>
                <div className="payment">
                  <Radio.Group
                    onChange={changeCustomBagPaymentType}
                    value={customBagPaymentType}
                  >
                    <Radio
                      value={0}
                      className={`text-black p-2 rounded-md border-[1px] border-black my-1 w-full ${
                        customBagPaymentType === 0 ? "bg-pink-400" : ""
                      }`}
                    >
                      Ship cod + 30.000vnd
                    </Radio>
                    <Radio
                      value={1}
                      className={`text-black p-2 rounded-md border-[1px] border-black my-1 w-full ${
                        customBagPaymentType === 1 ? "bg-pink-400" : ""
                      }`}
                    >
                      Banking
                    </Radio>
                    <Radio
                      value={2}
                      className={`text-black p-2 rounded-md border-[1px] border-black my-1 w-full ${
                        customBagPaymentType === 2 ? "bg-pink-400" : ""
                      }`}
                    >
                      MOMO
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="total flex justify-between mt-[50px] text-[30px] font-bold">
                  <h3>Total</h3>
                  <h3>
                    {customBagSubtotal.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </h3>
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
