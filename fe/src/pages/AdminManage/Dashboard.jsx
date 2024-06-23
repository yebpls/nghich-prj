import React, { useState } from "react";
import RevenueChartComponent from "../../components/Admin/Dashboard/RevenueChart";
import SellingChartComponent from "../../components/Admin/Dashboard/SellingChart";

export default function Dashboard() {
  const [chart, setChart] = useState(1);
  return (
    <div className="w-11/12 mx-auto">
      <div className="m-10 text-black font-semibold">
        <h1 className="text-4xl my-2">Start Investigate</h1>
        <p className="text-xl mx-2 font-medium">You have Recieved(All Time)</p>
      </div>
      {chart === 1 ? <RevenueChartComponent /> : <SellingChartComponent />}

      <div className="">
        <a
          className={`${
            chart === 1 ? "bg-green-500 text-white" : ""
          } text-green-500 border-[1px] border-green-500 text-sm px-2 py-1 rounded-lg m-1 cursor-pointer hover:bg-green-500 hover:text-white`}
          onClick={() => setChart(1)}
        >
          Revenue Chart
        </a>
        <a
          className={`${
            chart === 2 ? "bg-green-500 text-white" : ""
          } text-green-500 border-[1px] border-green-500 text-sm px-2 py-1 rounded-lg m-1 cursor-pointer hover:bg-green-500 hover:text-white`}
          onClick={() => setChart(2)}
        >
          Selling Chart
        </a>
      </div>
    </div>
  );
}
