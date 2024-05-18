import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { HomeIcon, PackageIcon, FileTextIcon } from "../../../../public/itemIcons/itemIcons";
export function Sidebar() {
    return (_jsx("div", { className: "hidden border-r bg-gray-100/40 p-8 dark:bg-gray-800/40 md:block h-screen", children: _jsxs("nav", { className: "grid gap-4", children: [_jsxs(Link, { className: "flex items-center gap-4 rounded-md px-5 py-4 text-lg font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50", to: "/home", children: [_jsx(HomeIcon, { className: "h-8 w-8" }), "Dashboard"] }), _jsxs(Link, { className: "flex items-center gap-4 rounded-md px-5 py-4 text-lg font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50", to: "/home/report-logs/", children: [_jsx(PackageIcon, { className: "h-8 w-8" }), "Report Logs"] }), _jsxs(Link, { className: "flex items-center gap-4 rounded-md px-5 py-4 text-lg font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50", to: "/home/user-logs/", children: [_jsx(PackageIcon, { className: "h-8 w-8" }), "User Logs"] }), _jsxs(Link, { className: "flex items-center gap-4 rounded-md px-5 py-4 text-lg font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50", to: "/home/claim-logs/", children: [_jsx(FileTextIcon, { className: "h-8 w-8" }), "Claim Logs"] })] }) }));
}
