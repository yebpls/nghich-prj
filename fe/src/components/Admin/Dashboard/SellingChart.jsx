import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useGetAllOrders } from "../../../api/orders";

function ProfitChartComponent({ data: combinedOrders }) {
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

  // Sort the result by time
  const sortedResult = {
    time: [],
    quantity: [],
    costPrice: [],
    totalPrice: [],
  };

  const sortedIndices = result.time
    .map((date, index) => ({ date, index }))
    .sort(
      (a, b) =>
        new Date(a.date.split("-").reverse().join("-")) -
        new Date(b.date.split("-").reverse().join("-"))
    )
    .map(({ index }) => index);

  sortedIndices.forEach((index) => {
    sortedResult.time.push(result.time[index]);
    sortedResult.quantity.push(result.quantity[index]);
    sortedResult.costPrice.push(result.costPrice[index]);
    sortedResult.totalPrice.push(result.totalPrice[index]);
  });

  console.log("groupedProductByDay", sortedResult, combinedOrders);

  const data = {
    labels: sortedResult ? sortedResult.time : [],
    datasets: [
      {
        label: "Overall Chart", // Change this label to whatever suits the new data
        data: sortedResult ? sortedResult.totalPrice : [], // Assuming `totalPrice` is your new dataset
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
            const quantity = sortedResult.quantity[index];
            const totalPrice = sortedResult.totalPrice[index];
            return `Quantity: ${quantity}, Total: ${totalPrice.toLocaleString()}đ`; // Format the tooltip as needed
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default ProfitChartComponent;
