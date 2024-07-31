import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useGetAllOrders } from "../../../api/orders";

function CustomChartComponent({ data: customOrders }) {
  function getFormattedDate(date) {
    return `${date.getUTCDate()}-${date.getUTCMonth() + 1}`; // Formats the date as 'DD-MM'
  }

  const groupedOrders = customOrders.reduce((acc, item) => {
    const date = new Date(item.created_at);
    const formattedDate = getFormattedDate(date);

    const totalPrice = item.quantity * item.price_final;

    if (!acc[formattedDate]) {
      acc[formattedDate] = { total: 0, quantity: 0 };
    }

    acc[formattedDate].total += totalPrice;
    acc[formattedDate].quantity += item.quantity;

    return acc;
  }, {});

  const sortedDates = Object.keys(groupedOrders).sort((a, b) => {
    const [dayA, monthA] = a.split("-").map(Number);
    const [dayB, monthB] = b.split("-").map(Number);
    return new Date(2023, monthA - 1, dayA) - new Date(2023, monthB - 1, dayB);
  });

  const result = {
    time: sortedDates,
    quantity: sortedDates.map((date) => groupedOrders[date].quantity),
    total: sortedDates.map((date) => groupedOrders[date].total),
  };

  console.log("groupedProductByDay", result, customOrders);
  const data = {
    labels: result ? result.time : [],
    datasets: [
      {
        label: "Custom Chart",
        data: result ? result.total : [],
        fill: true,
        backgroundColor: "rgba(255, 150, 170, 0.4)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
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
            const total = result.total[index];
            return `Quantity: ${quantity}, Total: ${total.toLocaleString()}đ`; // Format the tooltip as needed
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default CustomChartComponent;
