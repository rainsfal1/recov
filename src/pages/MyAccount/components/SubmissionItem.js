import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PackageIcon } from "../../../../public/itemIcons/itemIcons";
import { StatusBadge } from "../../../components/StatusBadge";
export const SubmissionItem = ({ title, date, status, }) => (_jsxs("div", { className: "grid grid-cols-[auto,1fr,auto] items-center gap-4 px-4 py-3", children: [_jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800", children: _jsx(PackageIcon, { className: "h-6 w-6 text-gray-500 dark:text-gray-400" }) }), _jsxs("div", { className: "grid gap-1", children: [_jsx("div", { className: "font-medium text-xl", children: title }), _jsxs("div", { className: "text-md text-gray-500 dark:text-gray-400", children: ["Reported on ", date] })] }), _jsx("div", { className: "flex items-center gap-2", children: _jsx(StatusBadge, { status: status }) })] }));
