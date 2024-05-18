import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// StatisticCard.tsx
import { CardHeader, CardContent, Card, } from "../../../../@/components/ui/card";
// import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";
// import { ReportTable } from "./ReportTable.tsx";
import { useState } from "react";
export function StatisticCard({ stats }) {
    const [selectedOption, setSelectedOption] = useState("Lost Items Category");
    const handleClick = (option) => {
        setSelectedOption(option);
    };
    return (_jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-center pb-2", children: [_jsx("button", { onClick: () => handleClick("Lost Items Category"), className: "text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out", children: "Lost Items Category" }), _jsx("button", { onClick: () => handleClick("Recent Reports"), className: "text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out ml-4", children: "Reports Table" }), _jsx("button", { onClick: () => handleClick("Lost Items Over Time"), className: "text-xl font-medium rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ease-in-out ml-4", children: "Lost Items Over Time" })] }), _jsx(CardContent, { children: selectedOption === "Lost Items Category" && (_jsx(BarChart, { data: stats.barChartData })) })] }));
}
