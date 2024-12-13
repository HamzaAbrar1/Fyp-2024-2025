import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
  Title,
  Tooltip
);

function Bar1() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Show the legend
        position: "top",
      },
      title: {
        display: false,
        text: "Monthly Expenses", // Title for the chart
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: "Category", // X-axis label
        },
        grid: {
          display: false,
        },
        barPercentage: 1, // Ensures bars take up the full available width
        categoryPercentage: 0.5, // Ensures bars are tightly packed without excessive space
      },
      y: {
        title: {
          display: false,
          text: "Amount ($)", // Y-axis label
        },
        grid: {
          display: false,
        },
        beginAtZero: true, // Start Y-axis from zero
        ticks: {
          callback: function(value) {
            return "$" + value; // Add $ sign before the value
          },
        },
      
      },
    },
    elements: {
      bar: {
        borderWidth: (context) => {
          // Function to dynamically adjust border width based on the index (position of the bar)
          return context.index % 2 === 0 ? 3 : 1; // Example: 3px at the top, 1px at the bottom (you can adjust based on logic)
        },
        borderRadius: (context) => {
          // Creating a tapering effect by using different border radii for each bar
          return context.raw > 1000 ? 3 : 0; // Adjust according to your data (e.g., higher bars could have more radius)
        },
      },
    },
  };

  const data = {
    labels: [20, 22, 24, 26, 28,30,"02","04","06","08",10,12,14,16],
    datasets: [
      {
        label: "Expenses",
        data: [1200, 300, 150, 180, 100,300,400,200,50,1000,500,700,250,750],
        backgroundColor: ["#F19E38", "#F19E38", "#F19E38", "#F19E38", "#FF8C33"], // Different colors for each bar
        borderColor: ["#C70039", "#FF5733", "#33FF57", "#FFC300", "#FF33A8"], // Border color for each bar
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default Bar1;
