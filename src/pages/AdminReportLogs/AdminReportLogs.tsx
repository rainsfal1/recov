// AdminClaimLogs.tsx
import { Table } from "./components/Table.tsx";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination.tsx";
import { LogsHeader } from "../../components/LogsHeader.tsx";
// import { deleteRecord } from './api'; // Import your API function

// // Sample data for the table
// const claimData = [
//     {
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Accepted',
//         dateReported: '2023-05-14'
//     },
//     {
//         user: {
//             name: 'Jane Doe',
//             email: 'janedoe@example.com',
//             location: '456 Elm St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Keys',
//             description: 'Set of house and car keys on a keychain'
//         },
//         status: 'Accepted',
//         dateReported: '2023-05-15'
//     },
//     {
//         user: {
//             name: 'Bob Smith',
//             email: 'bobsmith@example.com',
//             location: '789 Pine St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Phone',
//             description: 'Black iPhone 12'
//         },
//         status: 'Rejected',
//         dateReported: '2023-05-16'
//     },
//     {
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Accepted',
//         dateReported: '2023-05-14'
//     },
//     {
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Accepted',
//         dateReported: '2023-05-14'
//     },
//     {
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Pending',
//         dateReported: '2023-05-14'
//     },{
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Pending',
//         dateReported: '2023-05-14'
//     },
//     {
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Accepted',
//         dateReported: '2023-05-14'
//     },
//     {
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Pending',
//         dateReported: '2023-05-14'
//     },{
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Rejected',
//         dateReported: '2023-05-14'
//     },
//     {
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Rejected',
//         dateReported: '2023-05-14'
//     },{
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Pending',
//         dateReported: '2023-05-14'
//     },
//     {
//         user: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             location: '123 Main St, Anytown USA'
//         },
//         item: {
//             title: 'Lost Wallet',
//             description: 'Leather wallet with ID and credit cards'
//         },
//         status: 'Rejected',
//         dateReported: '2023-05-14'
//     },

//     // Add more data objects as needed...
// ];

export default function AdminReportLogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [claimData, setClaimData] = useState([]);
  const totalPages = Math.ceil(claimData.length / itemsPerPage);

  const fetchClaimData = async () => {
    console.log("Fetching data...");
    const apiResponse = await fetch(
      `http://localhost:3000/api/v1/items/getItemsForAdmin/?page=${currentPage}`
    );
    const response = await apiResponse.json();
    if (response.ok) {
      setClaimData(response.data.items);
    } else {
      console.log("Error fetching data");
    }
  };
  useEffect(() => {
    fetchClaimData();
  }, [currentPage]);

  return (
    <div className="container mx-auto px-4  md:px-6 md:py-12">
      <LogsHeader
        title="Report Logs"
        placeholder="          Search Report logs..."
        baseRoute="/home/report-logs"
      />
      <Table data={claimData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        baseRoute="/home/claim-logs"
        onPageChange={() => setCurrentPage}
      />
    </div>
  );
}
