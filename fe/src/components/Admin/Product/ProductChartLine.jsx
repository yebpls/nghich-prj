import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChartComponent({ labels, quantity, labelChart }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: labelChart,
        data: quantity,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.1,
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
      },
    },
  };

  return (
    <Line
      data={data}
      options={{
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
          },
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 0, // remove the color band
            },
          },
        },
      }}
    />
  );
}

export default LineChartComponent;
