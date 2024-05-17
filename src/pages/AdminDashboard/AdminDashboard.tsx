import { useState, useEffect } from "react";
import {
  PackageIcon,
  FileTextIcon,
} from "../../../public/itemIcons/itemIcons.tsx";

// Import the components
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { InfoCard } from "./components/InfoCard";
import { StatisticCard } from "./components/StatisticCard.tsx";

export default function AdminDashboard() {
  const [totalLostItems, setTotalLostItems] = useState(0);
  const [totalFoundItems, setTotalFoundItems] = useState(0);
  const [pendingReports, setPendingReports] = useState(0);
  const [resolvedReports, setResolvedReports] = useState(0);

  // const [pieChartData, setPieChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  // const [recentTablesData, setRecentTablesData] = useState([]);
  const getStats = async () => {
    const response = await fetch("http://localhost:3000/api/v1/items/stats");
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

  return (
      <div className="flex h-auto w-full flex-col lg:overflow-hidden overflow-y-auto">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-8">
            <div className="grid gap-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                <InfoCard
                    title="Total Lost Items"
                    icon={
                      <PackageIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    }
                >
                  <div className="text-3xl font-bold pb-3">{totalLostItems}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    +5.2% from last month
                  </p>
                </InfoCard>
                <InfoCard
                    title="Total Found Items"
                    icon={
                      <PackageIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    }
                >
                  <div className="text-3xl font-bold pb-3">{totalFoundItems}</div>
                  <p className="text-sm text-gray-500  dark:text-gray-400">
                    +3.8% from last month
                  </p>
                </InfoCard>
                <InfoCard
                    title="Pending Reports"
                    icon={
                      <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    }
                >
                  <div className="text-3xl font-bold  pb-3">{pendingReports}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    +2 since last week
                  </p>
                </InfoCard>
                <InfoCard
                    title="Resolved Reports"
                    icon={
                      <FileTextIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    }
                >
                  <div className="text-3xl font-bold  pb-3">
                    {resolvedReports}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    +15 since last week
                  </p>
                </InfoCard>
              </div>
              <div className="grid gap-8">
                <StatisticCard stats={{ barChartData }} />
              </div>
            </div>
          </main>
        </div>
      </div>
  );
}