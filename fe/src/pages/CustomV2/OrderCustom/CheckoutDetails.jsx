import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Steps, Radio, Button, Spin, Form, Input, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  useAddUserAddressMutation,
  useDeleteAddressMutation,
  useGetAddresses,
  useSetDefaultAddress,
  useUpdateAddressMutation,
} from "../../../api/User/address";
import { useMakeOrder } from "../../../api/orders";
import BreadcrumbWithBackButton from "../../../components/UI/Breadcrum";
import CustomSteps from "../../../components/UI/StepCartCustom";
// import "./OrderCustom.css";

const { Step } = Steps;

const CheckoutDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: addresses, isLoading } = useGetAddresses();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const addUserAddressMutation = useAddUserAddressMutation();
  const setDefaultAddressMutation = useSetDefaultAddress();
  const updateAddressMutation = useUpdateAddressMutation();
  const deleteAddressMutation = useDeleteAddressMutation();

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItemsCus")) || []
  );
  const [total, setTotal] = useState(location.state?.total || 0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const { mutate: makeOrder } = useMakeOrder();

  const [form] = Form.useForm();
  const [editForm] = Form.useForm();

  useEffect(() => {
    if (addresses && addresses.length > 0) {
      const defaultAddress = addresses.find((address) => address.default);
      if (defaultAddress) {
        setSelectedAddress(defaultAddress._id);
      }
    }
  }, [addresses]);

  const handleAddAddress = (values) => {
    addUserAddressMutation.mutate(values);
    setIsModalVisible(false);
  };

  const handleUpdateAddress = (values) => {
    if (editingAddress) {
      updateAddressMutation.mutate({
        ...values,
        address_id: editingAddress._id,
      });
      setIsEditModalVisible(false);
    }
  };

  const handleDeleteAddress = (address_id) => {
    deleteAddressMutation.mutate(address_id);
  };

  const handleEditClick = (address) => {
    setEditingAddress(address);
    editForm.setFieldsValue(address);
    setIsEditModalVisible(true);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
    localStorage.removeItem("cartItemsCus");
  };

  const handleSubmit = () => {
    const orderCustom = {
      custom_detail: cartItems.map((item) => ({
        product_id: item.key,
        price_final: item.price,
        quantity: item.quantity,
      })),
      address_id: selectedAddress,
      payment_type: 0, // You can change this value based on your requirement
      ship_method: 1, // You can change this value based on your requirement
      subtotal: total,
    };

    console.log("please order", orderCustom);
    debugger;

    if (orderCustom) {
      makeOrder(orderCustom, {
        onSuccess: () => {
          clearCart();
          navigate("/order-custom-complete", { state: { cartItems, total } });
        },
        onError: (error) => {
          console.error("Order failed:", error);
        },
      });
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className=" mb-8">
        <BreadcrumbWithBackButton currentTab={"Check Out Custom Bag"} />
      </div>
      <h1 className="text-2xl font-semibold mb-10 text-center">
        My Cart Order Custom Bag
      </h1>
      <CustomSteps current={1} />

      <div className="flex">
        <div className="w-3/5 pr-4">
          <h2 className="text-xl font-semibold mb-4">Cash On Delivery (COD)</h2>
          <div className="border-pink-300 rounded-lg ">
            <div className="w-full overflow-y-auto max-h-[550px] ">
              {addresses?.map((address) => (
                <div
                  key={address._id}
                  onClick={() => setSelectedAddress(address._id)}
                  className={
                    "relative p-3 px-3 lg:px-10 m-3 rounded-lg text-xs lg:text-sm text-black font-extralight cursor-pointer " +
                    (selectedAddress === address._id
                      ? "border-pink-300 border-2"
                      : "border-gray-300 hover:border-pink-300 border-[1px]")
                  }
                >
                  {address.default ? (
                    <p className="text-red-500 font-bold pb-2 pt-1">
                      Default Address
                    </p>
                  ) : (
                    <p className="font-bold text-black pb-2 pt-1">
                      Option Address
                    </p>
                  )}
                  <p>{address.addressView?.streets} District</p>
                  <p className="py-2">{address.phoneNumber}</p>
                  <p className="py-1">
                    {[
                      address.addressView?.streets,
                      address.addressView?.ward,
                      address.addressView?.district,
                      address.addressView?.province,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </p>

                  <div className="absolute top-2 right-2 flex ">
                    <EditOutlined
                      className="cursor-pointer text-blue-200 hover:text-blue-600 mr-4 text-xl"
                      onClick={() => handleEditClick(address)}
                    />
                    <DeleteOutlined
                      className="cursor-pointer text-red-200 hover:text-blue-600  text-xl"
                      onClick={() => handleDeleteAddress(address._id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            className="mt-4 bg-lime-500"
            type="primary"
            onClick={() => setIsModalVisible(true)}
          >
            Add new
          </Button>
          <Modal
            title="Add Address"
            open={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            <Form form={form} layout="vertical" onFinish={handleAddAddress}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please enter the address" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  { required: true, message: "Please enter the phone number" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={addUserAddressMutation.isLoading}
                >
                  Add Address
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            title="Edit Address"
            open={isEditModalVisible}
            onCancel={() => setIsEditModalVisible(false)}
            footer={null}
          >
            <Form
              form={editForm}
              layout="vertical"
              onFinish={handleUpdateAddress}
            >
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  { required: true, message: "Please enter the address" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  { required: true, message: "Please enter the phone number" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={updateAddressMutation.isLoading}
                >
                  Update Address
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>

        <div className="cart-left w-full h-fit  lg:w-2/5 pr-0 lg:pr-10 p-3 lg:px-3 border-[1px] border-pink-300 rounded-lg  mb-4">
          <p className="text-lg my-2 font-semibold text-center">
            Order Summary
          </p>
          <div className="w-full text-left ">
            {cartItems.map((item, index) => (
              <div className="flex text-xs lg:text-base border-b-2 mx-2">
                <div className="py-5 w-4/5">
                  <div className="product-col flex items-center">
                    <p className="font-semibold my-1">{index + 1}</p>
                    <img
                      //   className="w-12 md:w-16 lg:w-20 ml-3"
                      src={item?.image}
                      alt={item?.name}
                      style={{
                        width: "40%",
                        height: "auto",
                        maskImage:
                          "url('/images/bagsBody/BagTransparentBg.png')",
                        WebkitMaskImage:
                          "url('/images/bagsBody/BagTransparentBg.png')",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                      }}
                    />
                    <div className="product-info ml-3">
                      <h6 className="product-name lg:text-sm text-xs font-bold">
                        {item?.name ?? "Bag Custom"}
                      </h6>
                      <div className="product-color py-1 whitespace-nowrap  text-gray_2">
                        ID: {item?.key}
                      </div>
                      <div className="w-20">
                        <div className="text-center w-full my-auto text-md bg-[#CFF53E] rounded-md border-[1px] border-slate-500 flex flex-row">
                          <div className="w-1/2 font-light">
                            {item?.quantity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/5 my-auto">
                  {item?.price_final?.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between my-2 mt-4">
            <span>Shipping fee</span>
            <span>30.000</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>
              {total.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total</span>
            <span>
              {(total + 30000).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <Button
            className="w-full bg-pink-500 text-white"
            type="primary"
            onClick={handleSubmit}
            disabled={!selectedAddress}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
