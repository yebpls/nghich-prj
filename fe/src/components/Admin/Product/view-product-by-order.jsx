import React, { useEffect, useState } from "react";
import { useGetAllOrders } from "../../../api/orders";
import { useGetProducts } from "../../../api/product";
import LineChartComponent from "./ProductChartLine";
import { create } from "zustand";
import EditProduct from "./edit-product";
import UploadProductImage from "./upload-file";
import { ref } from "yup";

export default function ProductByOrder({
  orders,
  products,
  isFetching,
  isUpdate,
  setIsUpdate,
}) {
  const newOrders = orders?.flatMap((data) => {
    return data.order_details.map((detail) => ({
      ...detail,
      created_at: data.created_at,
    }));
  });
  console.log("newOrders", newOrders);
  //separate by create_at week
  // Helper function to get the month name
  function getMonthName(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[date.getUTCMonth()];
  }

  //   // Helper function to get week number within the month
  function getWeekNumberWithinMonth(date) {
    const firstDay = new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1)
    );
    const dayOfWeek = firstDay.getUTCDay(); // 0 (Sunday) - 6 (Saturday)
    const adjustedDate = date.getUTCDate() + dayOfWeek;
    return Math.ceil(adjustedDate / 7);
  }

  const groupedProductByWeek = newOrders?.reduce((acc, item) => {
    const date = new Date(item.created_at);
    const weekNumber = getWeekNumberWithinMonth(date);
    const monthName = getMonthName(date);
    const weekKey = `${monthName}-W${weekNumber}`;
    const productKey = item.product._id;
    console.log("productItem", item);
    if (!acc[productKey]) {
      acc[productKey] = {
        product_id: productKey,
        quantity: {},
        revenue: {},
        created_at: [],
      };
    }

    if (!acc[productKey].quantity[weekKey]) {
      acc[productKey].quantity[weekKey] = 0;
      acc[productKey].revenue[weekKey] = 0;
      acc[productKey].created_at.push(weekKey); // Add weekKey to created_at array only once
    }

    acc[productKey].quantity[weekKey] += item.quantity;
    acc[productKey].revenue[weekKey] += item.price_final;

    return acc;
  }, {});

  const productSoldList =
    groupedProductByWeek && Object.keys(groupedProductByWeek).length > 0
      ? Object.values(groupedProductByWeek).map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity ? Object.values(item.quantity) : [],
          revenue: item.revenue ? Object.values(item.revenue) : [],
          created_at: item.created_at,
        }))
      : [];
  console.log("orders", productSoldList);
  const productList = products?.map((product) => {
    const productSold = productSoldList.find(
      (item) => item.product_id === product._id
    );

    return {
      ...product,
      total: productSold?.quantity.reduce((acc, item) => acc + item, 0) || 0,
      sold_quantity: productSold?.quantity,
      created_at: productSold?.created_at,
    };
  });
  console.log("products", productList);

  return (
    <div>
      <div className="flex w-2/3">
        <div className="w-4/5"></div>
        <div className="w-1/5 flex text-sm">
          <div className="w-1/2 text-green-500">Available</div>
          <div className="w-1/2 text-pink-500">Sold</div>
        </div>
      </div>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div>
          {productList &&
            productList?.map((item) => (
              <div className="flex">
                <div className="w-2/3 flex">
                  <div className="w-1/5 p-3">
                    {item.images[0]?.url ? (
                      <img src={item.images[0]?.url} alt="" />
                    ) : (
                      <UploadProductImage product_id={item._id} />
                    )}
                    {/* <UploadProductImage product_id={item._id} />

              <img src={item.images[0]?.url} alt="" /> */}
                  </div>
                  <div className="w-3/5 my-auto p-3 text-black text-lg">
                    <div className="text-right mr-9">
                      <EditProduct
                        updateItem={item}
                        setIsUpdate={setIsUpdate}
                      />
                    </div>
                    <p>
                      {item.name}: {item._id}
                    </p>
                    <p className="text-xs py-3">{item.description}</p>
                  </div>
                  <div className="flex w-1/5">
                    <div className="w-1/2 my-auto mx-auto text-3xl font-bold text-green-400">
                      <p>{item.quantity}</p>
                    </div>
                    <div className="w-1/2 my-auto mx-auto text-3xl font-bold text-pink-400">
                      <p>{item.total}</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 p-3">
                  <LineChartComponent
                    key={item.product_id}
                    labels={item.created_at}
                    labelChart={item.name}
                    quantity={item.sold_quantity}
                  />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
