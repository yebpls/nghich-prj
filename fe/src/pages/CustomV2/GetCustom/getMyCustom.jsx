import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Card, Row, Col, Spin, notification, Button } from "antd";
import http from "../../../config/http";
import { API_ENDPOINTS } from "../../../api/api-endpoint";
import { useGetCustom } from "../../../api/custom";
import { useNavigate } from "react-router-dom";
import { useMakeOrder } from "../../../api/orders";
import { useOrderState } from "../../../zustand-store/OrderState";
import { useCustomBagOrderState } from "../../../zustand-store/customBagOrderState";

const MyCustom = () => {
  const { data, isLoading, error } = useGetCustom();
  const navigate = useNavigate();
  const { addCustomBagOrderDetail, orderState } = useCustomBagOrderState(
    (state) => ({
      addCustomBagOrderDetail: state.addCustomBagOrderDetail,
      orderState: state.orderState,
    })
  );
  const [prices, setPrices] = useState(400000);

  console.log("Order state:", orderState);

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

  const handleCreateCustomBag = () => {
    navigate("/customize");
  };

  const handleOrderBag = (customBag) => {
    addCustomBagOrderDetail({
      _id: customBag._id,
      name: customBag.name,
      url: customBag.url,
      price: prices[customBag._id],
    });
    navigate("/cart");
  };

  return (
    <div style={{ padding: "20px" }} className="max-w-[1300px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="uppercase font-semibold text-center text-xl my-4">
          My Custom Bags
        </h1>
        <Button type="primary" onClick={handleCreateCustomBag}>
          Create Custom Bag
        </Button>
      </div>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {data &&
            data.map((customBag) => (
              <Col key={customBag._id} xs={24} sm={12} md={8} lg={6}>
                <Card title={customBag.name || "Untitled Bag"} bordered={false}>
                  <img
                    src={customBag.url}
                    alt={customBag.name || "Chưa có tên"}
                    style={{
                      width: "100%",
                      height: "auto",
                      maskImage: "url('/images/bagsBody/BagTransparentBg.png')",
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
                  <p className="font-semibold text-gray-500 my-2">
                    ID: {customBag._id}
                  </p>
                  <p>Create date: {customBag.created_at}</p>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#FF5733",
                      fontWeight: "bold",
                    }}
                  >
                    Price:{" "}
                    {prices[customBag._id]?.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <Button
                    type="primary"
                    onClick={() => handleOrderBag(customBag)}
                    className="mt-2"
                    block
                  >
                    Order Bag
                  </Button>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};

export default MyCustom;
