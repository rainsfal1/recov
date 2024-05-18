import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// TableRow.tsx
import { Button } from "../../../../@/components/ui/button";
import { Trash2Icon, } from "../../../../public/itemIcons/itemIcons";
export function TableRow({ data, onDelete = () => console.log("Delete clicked"), }) {
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
    return (_jsxs("tr", { className: "border-b-2 p4 p-0", children: [_jsx("td", { children: _jsx("div", { className: "px-4 pb-6 flex flex-col items-start sm:flex-row sm:items-center sm:px-6", children: _jsxs("div", { className: "px-4 sm:px-6", children: [_jsx("h1", { className: "text-xl mt-0", children: data.user.fullName }), _jsx("h1", { className: "text-gray-500 text-lg", children: data.user.email })] }) }) }), _jsx("td", { className: "px-4  sm:px-6", children: _jsxs("div", { children: [_jsx("p", { className: "text-xl", children: data.item.itemName }), _jsx("p", { className: "text-gray-500 text-lg", children: data.item.description })] }) }), _jsx("td", { className: "px-4 sm:px-6", children: _jsx("span", { className: `inline-flex items-center px-10 text-xl py-2 rounded-full  font-medium ${statusColor}`, children: data.status }) }), _jsx("td", { children: _jsxs("div", { className: "px-1 py-9 flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5 sm:px-6", children: [_jsx("h1", { className: "text-xl mt-0 pr-36", children: new Date(data.createdAt).toLocaleDateString() }), _jsx(Button, { onClick: () => onDelete(), className: "px-4 py-6 text-red-500 hover:bg-red-100 focus:ring-red-500", size: "sm", variant: "outline", children: _jsx(Trash2Icon, { className: "w-6 h-6" }) })] }) })] }));
}
