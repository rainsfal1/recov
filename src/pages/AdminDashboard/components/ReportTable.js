import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// ReportTable.tsx
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../../../@/components/ui/table";
export function ReportTable({ data }) {
    return (_jsxs(Table, { className: "text-xl", children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Report ID" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Reported By" }), _jsx(TableHead, { children: "Date" })] }) }), _jsx(TableBody, { children: data.map((row, index) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: row.reportId }), _jsx(TableCell, { children: row.status }), _jsx(TableCell, { children: row.reportedBy }), _jsx(TableCell, { children: row.date })] }, index))) })] }));
}
