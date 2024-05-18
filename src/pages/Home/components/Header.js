import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MoonIcon, LogOutIcon, BellIcon, } from "../../../../public/optionIcons/optionItems";
import { PageIcon } from "../../../../public/pageIcon/pageIcon";
import { Button } from "../../../../@/components/ui/button";
import { Toggle } from "../../../../@/components/ui/toggle";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../context/userContext";
export const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const { setLoggedIn } = useUserContext();
    const { setToken } = useUserContext();
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        }
        else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);
    const handleLogout = () => {
        // Implement your logout logic here
        setLoggedIn(false);
        setToken("");
    };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (_jsxs("header", { className: `flex flex-col items-center justify-between sm:flex-row ${darkMode ? "dark" : ""}`, children: [_jsx("div", { children: _jsxs("div", { className: "flex items-center sm:text-left", children: [_jsx(PageIcon, { className: "h-24 w-24 mr-4" }), " ", _jsxs("h1", { className: `text-5xl text-left font-bold ${darkMode ? "text-gray-100" : "text-gray-900"}`, children: ["Welcome to Lost & Found", _jsx("p", { className: `text-2xl mt-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`, children: "We're here to help you find what you've lost." })] })] }) }), _jsxs("div", { className: "flex items-center space-x-5 mt-4 sm:mt-0", children: [_jsx(Toggle, { "aria-label": "Toggle dark mode", className: `w-20 h-14 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`, variant: "outline", onClick: toggleDarkMode, children: _jsx(MoonIcon, { className: "w-full " }) }), _jsx(Button, { className: `h-14 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`, variant: "outline", children: _jsx(BellIcon, { className: "inline-block w-8 h-8 mr-1" }) }), _jsxs(Button, { className: `h-14 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`, variant: "outline", onClick: handleLogout, children: [_jsx(LogOutIcon, { className: "inline-block w-8 h-8 mr-2" }), _jsx("span", { className: "text-lg", children: "Logout" })] })] })] }));
};
