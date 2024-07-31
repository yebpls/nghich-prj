import React from "react";

export default function RevenueOverall({ data, productOrders, customOrders }) {
  const revenue = data.reduce(
    (acc, item) => {
      acc.totalCostPrice += item.cost_price;
      acc.totalPriceFinal += item.price_final * item.quantity;
      return acc;
    },
    { totalCostPrice: 0, totalPriceFinal: 0 }
  );
  const product = productOrders.reduce(
    (acc, item) => {
      acc.totalCostPrice += item.cost_price;
      acc.totalPriceFinal += item.price_final * item.quantity;
      return acc;
    },
    { totalCostPrice: 0, totalPriceFinal: 0 }
  );
  const custom = customOrders.reduce(
    (acc, item) => {
      acc.totalCostPrice += item.cost_price;
      acc.totalPriceFinal += item.price_final * item.quantity;
      return acc;
    },
    { totalCostPrice: 0, totalPriceFinal: 0 }
  );
  return (
    <div>
      <h1 className="text-2xl text-pink-500">Revenue Overall</h1>
      <p className=" font-light">
        Revenue: {revenue.totalPriceFinal.toLocaleString()}đ
      </p>
      <p className=" font-light text-sm text-slate-500">
        Own Product: {product.totalPriceFinal.toLocaleString()}đ - Custom
        Product: {custom.totalPriceFinal.toLocaleString()}đ
      </p>
      <p className=" font-light">
        Profit:
        {(revenue.totalPriceFinal - revenue.totalCostPrice).toLocaleString()}đ
      </p>
      <p className=" font-light text-sm text-slate-500">
        Own Product:{" "}
        {(product.totalPriceFinal - product.totalCostPrice).toLocaleString()}đ -
        Custom Product:{" "}
        {(custom.totalPriceFinal - custom.totalCostPrice).toLocaleString()}đ
      </p>
    </div>
  );
}
