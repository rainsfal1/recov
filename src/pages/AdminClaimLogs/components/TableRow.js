import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// TableRow.tsx
import { Button } from "../../../../@/components/ui/button";
import { Trash2Icon, XIcon, CheckIcon, EyeIcon, } from "../../../../public/itemIcons/itemIcons";
import { useState } from "react";
import { LoggedClaimDetails } from "./LoggedClaimDetails/LoggedClaimDetails"; // Import your modal component
export function TableRow({ data, onAccept = (data) => {
    const fetchData = async () => {
        try {
            const claimId = data._id;
            console.log("Claim ID", claimId);
            const response = await fetch(`http://localhost:3000/api/v1/claim/acceptClaim?claimId=${claimId}`, {
                method: "PATCH",
            });
            const responseData = await response.json();
            console.log(responseData);
        }
        catch (error) {
            console.error("Error:", error);
        }
    };
    fetchData();
}, onReject = (data) => {
    const fetchData = async () => {
        try {
            const claimId = data._id;
            console.log("Claim ID", claimId);
            const response = await fetch(`http://localhost:3000/api/v1/claim/rejectClaim?claimId=${claimId}`, {
                method: "PATCH",
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            console.log(responseData);
        }
        catch (error) {
            console.error("Error:", error);
        }
    };
    fetchData();
}, onDelete = (data) => {
    const deleteData = async () => {
        try {
            console.log("On delete Function was called");
            const claimId = data._id;
            console.log("Claim ID", claimId);
            const response = await fetch(`http://localhost:3000/api/v1/claim/deleteClaim?claimId=${claimId}`, {
                method: "DELETE",
            });
            const responseData = await response.json();
            console.log(responseData);
        }
        catch (error) {
            console.error("Error:", error);
        }
    };
    deleteData();
}, }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleViewDetails = (data) => {
        console.log("View Details clicked", data);
        setIsModalOpen(true);
    };
    let statusColor;
    if (data.status === "Pending") {
        statusColor = "bg-yellow-100";
    }
    else if (data.status === "Accepted") {
        statusColor = "bg-green-100";
    }
    else if (data.status === "Rejected") {
        statusColor = "bg-red-100";
    }
    return (_jsxs("tr", { className: "border-b-2 p4 p-0", children: [_jsx("div", { className: "px-10 pb-6 flex flex-col items-start sm:flex-row sm:items-center sm:px-6", children: _jsxs("div", { className: "px-4 sm:px-6", children: [_jsx("h1", { className: "text-xl mt-0", children: data.user.fullName }), _jsx("h1", { className: "text-gray-500 text-lg", children: data.user.email })] }) }), _jsx("td", { className: "px-16  sm:px-6", children: _jsxs("div", { children: [_jsx("p", { className: "text-xl px-16 ", children: data.item.itemName }), _jsx("p", { className: "text-gray-500 px-16 text-lg", children: data.description })] }) }), _jsx("td", { className: "px-4 sm:px-6", children: _jsx("span", { className: `inline-flex px-16 items-center px-10 text-xl py-2 rounded-full  font-medium ${statusColor}`, children: data.status }) }), _jsx("div", { children: _jsx("td", { children: _jsxs("div", { className: "ml-16  py-9 flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5 sm:px-6", children: [_jsxs(Button, { onClick: () => onAccept(data), className: "text-green-500 px-5 py-6 hover:bg-green-100 focus:ring-green-500", size: "sm", variant: "outline", children: [_jsx(CheckIcon, { className: "w-9 h-9" }), _jsx("p", { className: "text-lg", children: "Accept" })] }), _jsxs(Button, { onClick: () => onReject(data), className: "text-red-500 hover:bg-red-100 px-4 py-6 focus:ring-red-500", size: "sm", variant: "outline", children: [_jsx(XIcon, { className: "w-9 h-9" }), _jsx("p", { className: "text-lg", children: "Deny" })] }), _jsxs(Button, { onClick: () => handleViewDetails(data), className: "px-4 py-6", variant: "outline", children: [_jsx(EyeIcon, { className: "w-6 h-6 " }), _jsx("span", { className: "sr-only ", children: "View Details" })] }), _jsx(Button, { onClick: () => onDelete(data), className: "px-4 py-6 text-red-500 hover:bg-red-100 focus:ring-red-500", size: "sm", variant: "outline", children: _jsx(Trash2Icon, { className: "w-6 h-6" }) })] }) }) }), _jsx(LoggedClaimDetails, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), item: data.item, onAccept: onAccept, onReject: onReject })] }));
}
