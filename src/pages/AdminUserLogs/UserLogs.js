import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
// AdminUserLogs.tsx
import { LogsHeader } from "../../components/LogsHeader";
import { Table } from "./components/Table";
import { Pagination } from "../../components/Pagination";
import { useState, useEffect } from "react";
export default function AdminReportLogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const [claimData, setClaimData] = useState([]);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [selectedOption, setSelectedOption] = useState(''); // Define selectedOption and setSelectedOption
    const options = [
        { value: 'dateReported', label: 'Date Reported' },
        { value: 'status', label: 'Status' },
        { value: 'itemName', label: 'Item Name' },
    ]; // Define options
    const getClaimData = async () => {
        try {
            console.log("Fetching data ");
            const response = await fetch(`http://localhost:3000/api/v1/claim/getClaim?page=${currentPage}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Failed to fetch claims");
            }
            else {
                setClaimData(data.data);
                setTotalPages(data.totalPages);
            }
        }
        catch (err) {
            console.error(err);
            setError(err.message);
        }
    };
    useEffect(() => {
        getClaimData();
    }, [currentPage]);
    const handleDelete = async () => {
        // Implement delete functionality here
    };
    if (error) {
        return _jsxs("div", { children: ["Error: ", error] });
    }
    return (_jsxs("div", { className: "container mx-auto px-4  md:px-6 md:py-12", children: [_jsx(LogsHeader, { title: "User Logs", placeholder: "User Claim logs...", baseRoute: "/home/user-logs", selectedOption: selectedOption, setSelectedOption: setSelectedOption, options: options }), _jsx(Table, { data: claimData, onDelete: handleDelete }), _jsx(Pagination, { currentPage: currentPage, totalPages: totalPages, onPageChange: setCurrentPage })] }));
}
