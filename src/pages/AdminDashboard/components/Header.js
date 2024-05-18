import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { Button } from "../../../../@/components/ui/button";
import { PageIcon } from "../../../../public/pageIcon/pageIcon";
import { LogOutIcon } from "../../../../public/optionIcons/optionItems";
export function Header() {
    const handleLogout = () => {
        // Implement your logout logic here
        console.log('User logged out');
    };
    return (_jsxs("header", { className: "flex h-20 py-14 items-center justify-between border-b bg-white px-8 dark:border-gray-800 dark:bg-gray-950", children: [_jsxs(Link, { className: "flex items-center gap-3", to: "#", children: [_jsx(PageIcon, { className: "h-16 w-16" }), _jsx("span", { className: "text-3xl font-semibold", children: "Lost & Found" })] }), _jsxs("nav", { className: "hidden gap-8 text-base font-medium md:flex pr-5 mr-10", children: [_jsx(Link, { className: "text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", to: "/home", children: "Dashboard" }), _jsx(Link, { className: "text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", to: "/home/report-logs/", children: "Report Logs" }), _jsx(Link, { className: "text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", to: "/home/user-logs/", children: "User Logs" }), _jsx(Link, { className: "text-gray-500 text-2xl  hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", to: "/home/claim-logs/", children: "Claim Logs" })] }), _jsx("div", { className: "flex items-center gap-3", children: _jsxs(Button, { className: `h-14 bg-gray-800 text-gray-100`, variant: "outline", onClick: handleLogout, children: [_jsx(LogOutIcon, { className: "inline-block w-8 h-8 mr-2" }), _jsx("span", { className: "text-lg", children: "Logout" })] }) })] }));
}
