import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Table.tsx
import { TableRow } from "./TableRow";
export function Table({ data }) {
    return (_jsx("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: _jsxs("table", { className: "w-full table-auto ", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gray-100 text-gray-600 font-medium", children: [_jsx("th", { className: "px-8 py-4 text-3xl text-left", children: "User" }), _jsx("th", { className: "px-16 py-4 text-3xl text-left", children: "Item" }), _jsx("th", { className: "px-16 py-4 text-3xl text-left", children: "Status" }), _jsx("th", { className: "px-20 py-4 text-3xl text-left", children: "Actions" })] }) }), _jsx("tbody", { children: data.map((item, index) => (_jsx(TableRow, { data: item }, index))) })] }) }));
}
