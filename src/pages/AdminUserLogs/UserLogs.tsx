// AdminClaimLogs.tsx
import { LogsHeader } from "../../components/LogsHeader.tsx";
import { Table } from "./components/Table.tsx";
import { Pagination } from "../../components/Pagination.tsx";
import { useState, useEffect } from "react"; // Added useEffect

// Removed unused import
// import { Trophy } from "lucide-react";

export default function AdminReportLogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [claimData, setClaimData] = useState([]);
  const [error, setError] = useState(null); // Added for error handling
  const [totalPages, setTotalPages] = useState(1); // Added for pagination
  const getClaimData = async () => {
    try {
      console.log("Fetching data ");
      const response = await fetch(
        `http://localhost:3000/api/v1/claim/getClaim?page=${currentPage}`
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
    getClaimData();
  }, [currentPage]);

  const handleDelete = async (itemToDelete) => {
    // Implement delete functionality here
  };

  // Added error message display
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4  md:px-6 md:py-12">
      <LogsHeader
        title="User Logs"
        placeholder="          User Claim logs..."
        baseRoute="/home/user-logs"
      />
      <Table data={claimData} onDelete={handleDelete} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages} // This should be calculated based on total number of records
        baseRoute="/home/claim-logs"
      />
    </div>
  );
}
