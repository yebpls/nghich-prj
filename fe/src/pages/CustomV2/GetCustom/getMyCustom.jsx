import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Card, Row, Col, Spin, notification, Button } from "antd";
import http from "../../../config/http";
import { API_ENDPOINTS } from "../../../api/api-endpoint";
import { useGetCustom } from "../../../api/custom";
import { useNavigate } from "react-router-dom";
import CartCustom from "../OrderCustom/CartCustom";
import styled from "styled-components";
import { format } from "date-fns";
import BreadcrumbWithBackButton from "../../../components/UI/Breadcrum";
import moment from "moment/moment";

const CustomButton = styled(Button)`
  background-color: #cef53d;
  color: black;
  border: 1px solid black;
  border-radius: 8px; /* Adjust the value as needed for roundness */

  &:hover {
    background-color: black;
    color: white;
  }
`;

const AddCusButton = styled(Button)`
  background-color: #ff78c5;
  color: black;
  border: 1px solid black;
  border-radius: 8px; /* Adjust the value as needed for roundness */

  &:hover {
    background-color: black;
    color: white;
  }
`;
const MyCustom = () => {
  const { data, isLoading, error } = useGetCustom();
  const navigate = useNavigate();

  const [prices, setPrices] = useState(400000);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItemsCus");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  console.log("cartItemsCus", cartItems);

  useEffect(() => {
    if (error) {
      notification.error({
        message: "Error",
        description: "Failed to fetch custom bags. Please try again later.",
      });
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      const initialPrices = data.reduce((acc, customBag) => {
        acc[customBag._id] = customBag.price || 400000; // Default price if not specified
        return acc;
      }, {});
      setPrices(initialPrices);
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem("cartItemsCus", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleCreateCustomBag = () => {
    navigate("/customize");
  };

  const handleOrderBag = (customBag) => {
    const newCartItem = {
      key: customBag._id,
      product: customBag.name || "Untitled Bag",
      image: customBag.url,
      quantity: 1,
      price: prices[customBag._id],
      subtotal: prices[customBag._id],
    };

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.key === customBag._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.key === customBag._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1),
              }
            : item
        );
      }
      return [...prevItems, newCartItem];
    });

    notification.success({
      message: "Success",
      description: `Item ${customBag.name} has been added to your cart.`,
    });
  };

  const handleRemoveItem = (key) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.key !== key));
  };

  const handleUpdateQuantity = (key, quantity) => {
    if (quantity <= 0) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.key === key
          ? { ...item, quantity, subtotal: item.price * quantity }
          : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div style={{ padding: "20px" }} className="max-w-[1250px] mx-auto">
      <div className=" mb-8">
        <BreadcrumbWithBackButton currentTab={"My List Customize"} />
      </div>
      <div className="flex justify-between items-center mb-5 mx-10">
        <h1 className="uppercase font-semibold text-center text-xl my-4">
          My List Custom Bags
        </h1>
        <AddCusButton type="primary" onClick={handleCreateCustomBag}>
          Create Custom Bag
        </AddCusButton>
      </div>
      <hr className="my-2 mb-10" />
      {isLoading ? (
        <Spin size="large" />
      ) : data && data.length > 0 ? (
        <Row gutter={[16, 16]}>
          {data &&
            data.map((customBag) => {
              const formattedDate = moment(customBag.created_at).format(
                "MMMM Do YYYY, h:mm:ss a"
              );
              return (
                <Col key={customBag._id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    bordered={false}
                    className="hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={customBag.url}
                      alt={customBag.name || "Chưa có tên"}
                      style={{
                        width: "100%",
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
                    <p className="font- text-gray-500 my-2 text-xs">
                      ID: {customBag._id}
                    </p>
                    <p className="font-bold text-black-900 mt-2 ">
                      Product name:{" "}
                      {customBag.name ? customBag.name : "No Name"}
                    </p>
                    <div className="flex justify-between">
                      <p className="mb-4 text-sm font-bold">
                        Price:{" "}
                        <span className="text-[#FF5733]">
                          {prices[customBag._id]?.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </p>
                      <p className=" text-sm font-semibold ">Quantity: 1</p>
                    </div>
                    <p className="text-gray-600 text-xs"> {formattedDate}</p>

                    <CustomButton
                      type="primary"
                      onClick={() => handleOrderBag(customBag)}
                      className="mt-2"
                      block
                    >
                      Add to Cart
                    </CustomButton>
                  </Card>
                </Col>
              );
            })}
        </Row>
      ) : (
        <div className="text-center">
          <p className="font-semibold text-sm text-gray-600 text-center flex items-center justify-center">
            <img src="/images/iconsad.png" className="w-6 mr-4" />

            <span>
              OOPS! Currently the shopping cart is empty. Please return to the
              home page to purchase!
            </span>
          </p>
          <a class="inline-flex items-center px-4 py-2 mt-4 text-white bg-[#4848FF] border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span
              className="text-sm font-medium cursor-pointer"
              onClick={() => navigate("/customize")}
            >
              Customize my bag
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

export default MyCustom;
