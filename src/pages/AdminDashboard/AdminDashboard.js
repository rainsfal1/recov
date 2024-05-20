import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { PackageIcon, FileTextIcon } from "../../../public/itemIcons/itemIcons";
// Import the components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { InfoCard } from "./components/InfoCard";
import { StatisticCard } from "./components/StatisticCard";
export default function AdminDashboard() {
  const [totalLostItems, setTotalLostItems] = useState(0);
  const [totalFoundItems, setTotalFoundItems] = useState(0);
  const [pendingReports, setPendingReports] = useState(0);
  const [resolvedReports, setResolvedReports] = useState(0);
  // const [pieChartData, setPieChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  // const [recentTablesData, setRecentTablesData] = useState([]);
  const getStats = async () => {
    const response = await fetch("/api/v1/items/stats");
    const data = await response.json();
    setTotalLostItems(data.data.totalLostItems);
    setTotalFoundItems(data.data.totalFoundItems);
    setPendingReports(data.data.totalItems);
    setResolvedReports(data.data.totalItems);
    console.log(data.data.categoryCounts);
    setBarChartData(data.data.categoryCounts);
  };
  useEffect(() => {
    getStats();
  }, []);
  return _jsxs("div", {
    className: "flex h-auto w-full flex-col lg:overflow-hidden overflow-y-auto",
    children: [
      _jsx(Header, {}),
      _jsxs("div", {
        className: "flex flex-1",
        children: [
          _jsx(Sidebar, {}),
          _jsx("main", {
            className: "flex-1 p-8",
            children: _jsxs("div", {
              className: "grid gap-8",
              children: [
                _jsxs("div", {
                  className:
                    "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2",
                  children: [
                    _jsxs(InfoCard, {
                      title: "Total Lost Items",
                      icon: _jsx(PackageIcon, {
                        className: "h-6 w-6 text-gray-500 dark:text-gray-400",
                      }),
                      children: [
                        _jsx("div", {
                          className: "text-3xl font-bold pb-3",
                          children: totalLostItems,
                        }),
                        _jsx("p", {
                          className: "text-sm text-gray-500 dark:text-gray-400",
                          children: "+5.2% from last month",
                        }),
                      ],
                    }),
                    _jsxs(InfoCard, {
                      title: "Total Found Items",
                      icon: _jsx(PackageIcon, {
                        className: "h-6 w-6 text-gray-500 dark:text-gray-400",
                      }),
                      children: [
                        _jsx("div", {
                          className: "text-3xl font-bold pb-3",
                          children: totalFoundItems,
                        }),
                        _jsx("p", {
                          className:
                            "text-sm text-gray-500  dark:text-gray-400",
                          children: "+3.8% from last month",
                        }),
                      ],
                    }),
                    _jsxs(InfoCard, {
                      title: "Pending Reports",
                      icon: _jsx(FileTextIcon, {
                        className: "h-6 w-6 text-gray-500 dark:text-gray-400",
                      }),
                      children: [
                        _jsx("div", {
                          className: "text-3xl font-bold  pb-3",
                          children: pendingReports,
                        }),
                        _jsx("p", {
                          className: "text-sm text-gray-500 dark:text-gray-400",
                          children: "+2 since last week",
                        }),
                      ],
                    }),
                    _jsxs(InfoCard, {
                      title: "Resolved Reports",
                      icon: _jsx(FileTextIcon, {
                        className: "h-6 w-6 text-gray-500 dark:text-gray-400",
                      }),
                      children: [
                        _jsx("div", {
                          className: "text-3xl font-bold  pb-3",
                          children: resolvedReports,
                        }),
                        _jsx("p", {
                          className: "text-sm text-gray-500 dark:text-gray-400",
                          children: "+15 since last week",
                        }),
                      ],
                    }),
                  ],
                }),
                _jsx("div", {
                  className: "grid gap-8",
                  children: _jsx(StatisticCard, { stats: { barChartData } }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
