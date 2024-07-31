import React, { useState } from "react";
import RevenueChartComponent from "../../components/Admin/Dashboard/RevenueChart";
import SellingChartComponent from "../../components/Admin/Dashboard/SellingChart";
import ProductChartComponent from "../../components/Admin/Dashboard/ProductChart";
import { useGetAllOrders } from "../../api/orders";
import { useGetAllTransactions } from "../../api/transactionApi";
import CustomChartComponent from "../../components/Admin/Dashboard/CustomChart";
import RevenueOverall from "../../components/Admin/Dashboard/RevenueOverall";
import CustomOverall from "../../components/Admin/Dashboard/CustomOverall";
import ProductOverall from "../../components/Admin/Dashboard/ProductOverall";

export default function Dashboard() {
  const [chart, setChart] = useState(1);
  const { data: orders } = useGetAllOrders();
  const { data: transactions } = useGetAllTransactions();

  const successOrder =
    transactions?.map((transaction) => {
      const order = orders?.find((order) => order._id === transaction.order_id);
      return {
        ...transaction,
        order_detail: order || {}, // Add the order data to the transaction, or an empty object if no matching order is found
      };
    }) || []; // Ensure successOrder is an array even if transactions is undefined

  const productOrders = successOrder.flatMap((data) => {
    console.log(data, "detail");

    return (
      data?.order_detail?.order_details?.map((detail) => ({
        ...detail,
        cost_price: parseInt(detail.product?.cost_price, 10),
        created_at: data?.order_detail?.created_at,
      })) || []
    ); // Ensure the result is an array even if order_details is undefined
  });

  const customOrders = successOrder.flatMap((data) => {
    return data?.order_detail?.custom_detail
      ? data.order_detail.custom_detail.map((detail) => ({
          _id: data?.order_detail?._id,
          ...detail,
          cost_price: 130000,
          created_at: data?.order_detail?.created_at,
        }))
      : []; // Ensure the result is an array even if custom_detail is undefined
  });
  const combinedOrders = [...productOrders, ...customOrders];

  console.log(
    successOrder,
    productOrders,
    customOrders,
    combinedOrders,
    "successOrder"
  );
  return (
    <div className="w-11/12 mx-auto">
      <div className="m-10 text-black font-semibold flex">
        <div className="w-1/2">
          <h1 className="text-4xl my-2">Start Investigate</h1>
          <p className="text-xl mx-2 font-medium">
            You have Recieved(All Time)
          </p>
        </div>
        <div className="w-1/2">
          {chart === 1 ? (
            <div className="w-5/6 mx-auto flex">
              <RevenueOverall
                data={combinedOrders}
                productOrders={productOrders}
                customOrders={customOrders}
              />
            </div>
          ) : chart === 2 ? (
            <div className="w-5/6 mx-auto flex">
              <ProductOverall data={productOrders} />
            </div>
          ) : chart === 3 ? (
            <div className="w-5/6 mx-auto flex">
              <CustomOverall data={customOrders} />
            </div>
          ) : (
            <div className="w-5/6 mx-auto flex"></div>
          )}
        </div>
      </div>
      {chart === 1 ? (
        <div className="w-5/6 mx-auto flex">
          <SellingChartComponent data={combinedOrders} />
        </div>
      ) : chart === 2 ? (
        <div className="w-5/6 mx-auto flex">
          <ProductChartComponent data={productOrders} />
        </div>
      ) : chart === 3 ? (
        <div className="w-5/6 mx-auto flex">
          <CustomChartComponent data={customOrders} />
        </div>
      ) : (
        ""
      )}

      <div className="">
        <a
          className={`${
            chart === 1 ? "bg-green-500 text-white" : ""
          } text-green-500 border-[1px] border-green-500 text-sm px-2 py-1 rounded-lg m-1 cursor-pointer hover:bg-green-500 hover:text-white`}
          onClick={() => setChart(1)}
        >
          Overall Chart
        </a>

        <a
          className={`${
            chart === 2 ? "bg-green-500 text-white" : ""
          } text-green-500 border-[1px] border-green-500 text-sm px-2 py-1 rounded-lg m-1 cursor-pointer hover:bg-green-500 hover:text-white`}
          onClick={() => setChart(2)}
        >
          Product Chart
        </a>
        <a
          className={`${
            chart === 3 ? "bg-green-500 text-white" : ""
          } text-green-500 border-[1px] border-green-500 text-sm px-2 py-1 rounded-lg m-1 cursor-pointer hover:bg-green-500 hover:text-white`}
          onClick={() => setChart(3)}
        >
          Custom Chart
        </a>
      </div>
    </div>
  );
}
