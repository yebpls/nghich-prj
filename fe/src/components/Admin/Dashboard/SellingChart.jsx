import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useGetAllOrders } from "../../../api/orders";

function ProfitChartComponent({ data: combinedOrders }) {
  // if (!Array.isArray(orders)) {
  //   console.error("Orders data is not an array or is undefined");
  //   return null; // or handle the error as needed
  // }

  // const productOrders = orders.flatMap((data) => {
  //   console.log(data, "detail");

  //   return data?.order_detail?.order_details?.map((detail) => ({
  //     ...detail,
  //     created_at: data?.order_detail?.created_at,
  //   }));
  // });

  // const customOrders = orders.flatMap((data) => {
  //   return data?.order_detail?.custom_detail
  //     ? data.order_detail.custom_detail.map((detail) => ({
  //         _id: data?.order_detail?._id,
  //         ...detail,
  //         created_at: data?.order_detail?.created_at,
  //       }))
  //     : [];
  // });

  console.log("combinedOrders", combinedOrders);
  function getFormattedDate(date) {
    return `${date.getUTCDate()}-${date.getUTCMonth() + 1}`; // Formats the date as 'DD-MM'
  }

  const result = combinedOrders?.reduce(
    (acc, item) => {
      const date = new Date(item?.created_at);
      const formattedDate = getFormattedDate(date);

      const totalPrice = item.quantity * item.price_final;
      const halfPrice = totalPrice / 2; // Calculate half of totalPrice
      const dateIndex = acc.time.indexOf(formattedDate);
      if (dateIndex === -1) {
        acc.time.push(formattedDate);
        acc.quantity.push(item.quantity);
        acc.costPrice.push(halfPrice); // Add halfPrice to costPrice
        acc.totalPrice.push(totalPrice);
      } else {
        acc.quantity[dateIndex] += item.quantity;
        acc.totalPrice[dateIndex] += totalPrice; // Update the respective element in costPrice
        acc.costPrice[dateIndex] += halfPrice; // Update the respective element in costPrice
      }

      return acc;
    },
    { costPrice: [], quantity: [], time: [], totalPrice: [] } // Initialize the accumulator
  );

  console.log("groupedProductByDay", result, combinedOrders);

  const data = {
    labels: result ? result.time : [],
    datasets: [
      {
        label: "Overall Chart", // Change this label to whatever suits the new data
        data: result ? result.totalPrice : [], // Assuming `totalPrice` is your new dataset
        fill: true, // Change this as needed
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)", // Choose a different color for distinction
        tension: 0.4, // Adjust the line tension as needed
        spanGaps: true,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
        },
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          color: "rgba(75, 192, 192, 1)",
          font: {
            size: 39, // Example of setting font size
            weight: "bold",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const quantity = result.quantity[index];
            const totalPrice = result.totalPrice[index];
            return `Quantity: ${quantity}, Total: ${totalPrice.toLocaleString()}đ`; // Format the tooltip as needed
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default ProfitChartComponent;
