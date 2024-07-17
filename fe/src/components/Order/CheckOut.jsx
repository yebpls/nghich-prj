import { useEffect, useState } from "react";
import { useCartStore } from "../../zustand-store/cartState";
import { Radio } from "antd";
import CartItem from "./CartItem";
import { useOrderState } from "../../zustand-store/OrderState";
import { useGetAddresses } from "../../api/User/address";
import AddressItem from "./AddressItem";
import { useCheckedItemsState } from "../../zustand-store/AddressSelectState";
import CartCheckOut from "./CartCheckOut";
import { useGetProducts } from "../../api/product";
import { useMakeOrder } from "../../api/orders";
import AddAddress from "../User/Address/add-address";

const CheckOutPage = () => {
  const [isAddAddress, setIsAddAddress] = useState(false);
  const { cartItems } = useCartStore((state) => state);
  const { initializeItems } = useCheckedItemsState();
  const {
    data: addressData,
    isLoading: addressLoading,
    refetch,
  } = useGetAddresses();
  const { data: productData, isLoading: productLoading } = useGetProducts();
  const { mutate: makeOrder } = useMakeOrder();
  const { subtotal, orderState, addAddressId, addNewOrderDetails } =
    useOrderState((state) => state);
  const [OrderList, setOrderList] = useState([]);

  const pleaseOrder = () => {
    if (orderState) {
      makeOrder(orderState);
    }
    console.log("please order", orderState);
  };

  useEffect(() => {
    if (addressData) {
      initializeItems(addressData);

      // Find the default address
      const defaultAddress = addressData.find((address) => address.default);

      // If a default address is found, add its ID
      if (defaultAddress) {
        addAddressId(defaultAddress?._id);
      }
      // console.log("defaultAddress", defaultAddress._id);
    }
  }, [addressData]);
  useEffect(() => {
    if (orderState) {
      addNewOrderDetails(cartItems);
      console.log("check order detail at check out", orderState, subtotal);
    }
  }, []);

  useEffect(() => {
    if (productData) {
      const combinedArray = orderState
        ? orderState?.order_details?.map((orderItem) => {
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
          })
        : [];
      setOrderList(combinedArray);
    }
  }, [productData, orderState]);
  useEffect(() => {
    if (isAddAddress) {
      console.log("isAddAddress", isAddAddress);
      refetch();
    }
  }, [isAddAddress]);
  return (
    <div className="main text-black w-11/12 lg:w-5/6 mx-auto">
      <div className="cart pb-[300px]">
        <div className="container my-0 mx-[auto]">
          <div className="content-wrapper flex flex-col-reverse md:flex-row">
            <div className="cart-right w-full lg:w-3/5 lg:mx-10 border-[1px] border-pink-300 rounded-lg h-fit">
              <div className="content-wrapper ">
                <h3 className="form-label text-lg p-4 font-semibold">
                  Cash On Delivery (COD){" "}
                </h3>
                <div className="px-3">
                  {addressData &&
                    addressData.map((item, index) => (
                      <AddressItem key={index} item={item} />
                    ))}
                </div>
                {/* <button
                  className=""
                  type="submit"
                >
                  Add new
                </button> */}
                <AddAddress
                  className={
                    "bg-[#CFF53E] w-1/4 py-2 my-3 rounded-lg font-bold mx-4  mt-3 text-sm float-right"
                  }
                  isAddAddress={isAddAddress}
                  setIsAddAddress={setIsAddAddress}
                />
              </div>
            </div>
            <div className="cart-left w-full lg:w-2/5 pr-0 lg:pr-10 p-3 lg:px-3 border-[1px] border-pink-300 rounded-lg  mb-4">
              <p className="text-lg pb-4 font-semibold">Order Summary</p>
              <div className="w-full text-left">
                {OrderList &&
                  OrderList.map((item) => <CartCheckOut item={item} />)}
              </div>
              <div className="flex flex-row border-b-[1px] p-3 text-sm">
                <div className="w-3/4">
                  <p>Shipping fee</p>
                </div>
                <div className="w-1/4 font-bold">
                  <p>{orderState.payment_type !== 0 ? "Free" : "30.000"}</p>
                </div>
              </div>
              <div className="flex flex-row border-b-[1px] p-3 text-sm">
                <div className="w-3/4">
                  <p>Subtotal</p>
                </div>
                <div className="w-1/4 font-bold">
                  <p>
                    {subtotal?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-3 text-lg">
                <div className="w-3/4">
                  <p>Total</p>
                </div>
                <div className="w-1/4 font-bold">
                  <p>
                    {" "}
                    {subtotal?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>
              </div>
              <div className="w-full flex mt-3">
                <a
                  className="mx-auto px-3 py-1 bg-pink-400 hover:bg-pink-500 text-white   rounded-md text-sm w-full cursor-pointer text-center "
                  onClick={() => pleaseOrder()}
                >
                  Place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
