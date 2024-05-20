import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// AdminClaimLogs.tsx
import { LogsHeader } from "../../components/LogsHeader";
import { Table } from "./components/Table";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination";
import { useLocation } from "react-router-dom"; // Import useLocation
export default function ClaimLogs() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(
    Number(query.get("page")) || 1
  );
  const [claimData, setClaimData] = useState([]);
  const [error, setError] = useState(null); // Added for error handling
  const [totalPages, setTotalPages] = useState(1); // Added for pagination
  const [selectedOption, setSelectedOption] = useState(""); // Define selectedOption and setSelectedOption
  const options = [
    { value: "dateReported", label: "Date Reported" },
    { value: "status", label: "Status" },
    { value: "itemName", label: "Item Name" },
  ]; // Define options
  const getClaimData = async (page, selectedOption) => {
    try {
      console.log("Fetching data ");
      const response = await fetch(
        `/api/v1/claim/getClaim?page=${page}&sort=${selectedOption}` // Use selectedOption in API call
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch claims");
      } else {
        setClaimData(data.data);
        setTotalPages(data.totalPages); // Set total pages
      }
    } catch (err) {
      console.error(err);
      setError(err.message); // Set error state
    }
  };
  useEffect(() => {
    getClaimData(currentPage, selectedOption); // Pass selectedOption to getClaimData
  }, [currentPage, selectedOption]); // Add selectedOption to dependency array
  return _jsxs("div", {
    className: "container mx-auto px-4  md:px-6 md:py-12",
    children: [
      _jsx(LogsHeader, {
        title: "Claim Logs",
        placeholder: "Search Claim logs...",
        baseRoute: "/home/claim-logs",
        selectedOption: selectedOption,
        setSelectedOption: setSelectedOption,
        options: options,
      }),
      _jsx(Table, { data: claimData }),
      error && _jsx("p", { className: "text-red-500", children: error }),
      _jsx(Pagination, {
        currentPage: currentPage,
        totalPages: totalPages,
        onPageChange: (newPage) => {
          setCurrentPage(newPage);
          getClaimData(newPage, selectedOption); // Pass selectedOption to getClaimData
        },
      }),
    ],
  });
}
