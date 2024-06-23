import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useGetAllOrders } from "../../../api/orders";

function SellingChartComponent() {
  const { data: orders } = useGetAllOrders();
  const newOrders = orders?.flatMap((data) => {
    return data.order_details.map((detail) => ({
      ...detail,
      created_at: data.created_at,
    }));
  });

  function getFormattedDate(date) {
    return `${date.getUTCDate()}-${date.getUTCMonth() + 1}`; // Formats the date as 'DD-MM'
  }

  const result = newOrders?.reduce(
    (acc, item) => {
      const date = new Date(item.created_at);
      const formattedDate = getFormattedDate(date);

      const totalPrice = item.quantity * item.price_final;
      const dateIndex = acc.time.indexOf(formattedDate);
      if (dateIndex === -1) {
        acc.time.push(formattedDate);
        acc.quantity.push(totalPrice);
      } else {
        acc.quantity[dateIndex] += totalPrice;
      }

      return acc;
    },
    { quantity: [], time: [] }
  );

  console.log("groupedProductByDay", result, newOrders);
  const data = {
    labels: result ? result.time : [],
    datasets: [
      {
        label: "Selling Chart",
        data: result ? result.quantity : [],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        spanGaps: 3,
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
    },
  };

  return <Line data={data} options={options} />;
}

export default SellingChartComponent;
