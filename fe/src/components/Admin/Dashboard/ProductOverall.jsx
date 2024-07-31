import React from "react";

export default function ProductOverall({ data }) {
  const totals = data.reduce(
    (acc, item) => {
      acc.totalCostPrice += item.cost_price;
      acc.totalPriceFinal += item.price_final * item.quantity;
      return acc;
    },
    { totalCostPrice: 0, totalPriceFinal: 0 }
  );

  console.log(`Total Cost Price: ${totals.totalCostPrice}`);
  console.log(`Total Price Final: ${totals.totalPriceFinal}`);
  return (
    <div>
      <h1 className="text-2xl text-pink-500">Own Product</h1>
      <p className="font-light">
        Revenue: {totals.totalPriceFinal.toLocaleString()}đ
      </p>
      <p className="font-light">
        Profit:{" "}
        {(totals.totalPriceFinal - totals.totalCostPrice).toLocaleString()}đ
      </p>
    </div>
  );
}
