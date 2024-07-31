import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useGetAllOrders } from "../../../api/orders";

function RevenueChartComponent() {
  const { data: orders } = useGetAllOrders();
  const newOrders = orders?.flatMap((data) => {
    return data.order_details.map((detail) => ({
      ...detail,
      created_at: data.created_at,
    }));
  });

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

  const groupedByDay = newOrders?.reduce((acc, item) => {
    const date = new Date(item.created_at);
    const day = date.getUTCDate();
    const monthName = getMonthName(date);
    const dayKey = `${monthName}-${day}`;

    if (!acc[dayKey]) {
      acc[dayKey] = {
        quantity: 0,
        time: dayKey,
      };
    }

    acc[dayKey].quantity += item.quantity;

    return acc;
  }, {});

  const result = groupedByDay
    ? Object?.values(groupedByDay).reduce(
        (acc, item) => {
          acc.time.push(item.time);
          acc.quantity.push(item.quantity);
          return acc;
        },
        { quantity: [], time: [] }
      )
    : { quantity: [], time: [] };

  console.log("groupedProductByDay", result, newOrders);
  const data = {
    labels: result.time,
    datasets: [
      {
        label: "Selling Chart",
        data: result.quantity,
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

export default RevenueChartComponent;
