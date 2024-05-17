// StatisticCard.tsx
import {
  CardHeader,
  CardContent,
  Card,
} from "../../../../@/components/ui/card";
// import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart.tsx";
// import { ReportTable } from "./ReportTable.tsx";
import { useState } from "react";

export function StatisticCard({ stats }) {
  const [selectedOption, setSelectedOption] = useState("Lost Items Category");

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-center pb-2">
          <button
              onClick={() => handleClick("Lost Items Category")}
              className="text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out"
          >
            Lost Items Category
          </button>
          <button
              onClick={() => handleClick("Recent Reports")}
              className="text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out ml-4"
          >
            Reports Table
          </button>
          <button
              onClick={() => handleClick("Lost Items Over Time")}
              className="text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out ml-4"
          >
            Lost Items Over Time
          </button>
        </CardHeader>
        <CardContent>
          {selectedOption === "Lost Items Category" && (
              <BarChart data={stats.barChartData} />
          )}
          {/* {selectedOption === "Recent Reports" && <ReportTable data={stats} />}
        {selectedOption === "Lost Items Over Time" && (
          <PieChart data={stats} />
        )}{" "} */}
        </CardContent>
      </Card>
  );
}