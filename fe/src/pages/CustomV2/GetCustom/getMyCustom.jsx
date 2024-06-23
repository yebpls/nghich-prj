import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Card, Row, Col, Spin, notification } from "antd";
import http from "../../../config/http";
import { API_ENDPOINTS } from "../../../api/api-endpoint";
import { useGetCustom } from "../../../api/custom";

const MyCustom = () => {
  const { data, isLoading, error } = useGetCustom();

  console.log("data custom", data);

  useEffect(() => {
    if (error) {
      notification.error({
        message: "Error",
        description: "Failed to fetch custom bags. Please try again later.",
      });
    }
  }, [error]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Custom Bags</h1>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Row gutter={[16, 16]}>
          {data &&
            data.map((customBag) => (
              <Col key={customBag.id} xs={24} sm={12} md={8} lg={6}>
                <Card title={customBag.productName} bordered={false}>
                  <p>ID: {customBag.id}</p>
                  <p>Price: ${customBag.price}</p>
                </Card>
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};

export default MyCustom;
