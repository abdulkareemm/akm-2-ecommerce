"use client";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeeklySalesChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() =>
              faker.number.int({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() =>
              faker.number.int({ min: -1000, max: 1000 })
            ),
            borderColor: "rgb(0, 137, 132)",
            backgroundColor: "rgba(0, 137, 132, 0.5)",
          },
        ],
      },
    },
  ];
  const [chartToDisplay, setChartToDisplay] = useState("sales");
  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">WeeklySalesChart</h2>
      <div className="p-4">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => (
              <li key={i}>
                <button
                  className={
                    chartToDisplay === tab.type
                      ? "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-orange-600 hover:border-orange-300 dark:hover:text-orange-300 text-blue-300"
                      : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                  onClick={() => setChartToDisplay(tab.type)}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {tabs.map((tab, i) => {
          if (tab.type === chartToDisplay)
           return <Line options={options} data={tab.data} key={i} />;
        })}
      </div>
    </div>
  );
};

export default WeeklySalesChart;
