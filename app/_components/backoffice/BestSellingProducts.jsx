"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BestSellingProducts = () => {
    const data = {
      labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
      datasets: [
        {
          label: "# of Votes",
          data: [50, 10, 20, 20],
          backgroundColor: [
            "rgba(0, 0, 255, 0.7)",
            "rgba(255, 0, 211, 0.7)",
            "rgba(2, 139, 71, 0.7)",
            "rgba(0, 0, 0, 0.7)",
          ],
          borderColor: [
            "rgba(0, 0, 255, 0.7)",
            "rgba(255, 0, 211, 0.7)",
            "rgba(2, 139, 71, 0.7)",
            "rgba(0, 0, 0, 0.7)",
          ],
          borderWidth: 1,
        },
      ],
    };
  return (
    <div className="shadow-md bg-slate-100  dark:bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        Best Selling Chart
      </h2>
      <div className="p-8">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default BestSellingProducts