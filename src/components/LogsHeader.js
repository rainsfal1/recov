import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { PageIcon } from "../../public/pageIcon/pageIcon";
import { ArrowUpDownIcon, SearchIcon } from "../../public/itemIcons/itemIcons";
import { Input } from "../../@/components/ui/input";
import { useNavigate } from 'react-router-dom';
export function LogsHeader({ title, placeholder, baseRoute, selectedOption, setSelectedOption, options }) {
    const navigate = useNavigate();
    const handleSearch = (event) => {
        const searchQuery = event.target.value;
        navigate(`${baseRoute}/1?search=${searchQuery}`);
    };
    return (_jsxs("div", { className: "flex flex-col items-start justify-between mb-6 gap-4 sm:flex-row sm:items-center", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Link, { className: "flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300", to: "/home", children: _jsx(PageIcon, { className: "w-36 h-36" }) }), _jsx("h1", { className: "text-5xl mt-3 font-bold", children: title })] }), _jsxs("div", { className: "flex items-center gap-4 w-full sm:w-auto", children: [_jsxs("div", { className: "relative flex-1 sm:flex-initial", children: [_jsx(SearchIcon, { className: "absolute left-3  pr-6 top-1/2 -translate-y-1/2 w-14 h-14 text-gray-500" }), _jsx(Input, { className: "w-full pr-32 py-8 pl-12 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white sm:w-auto", placeholder: placeholder, type: "text", onChange: handleSearch })] }), _jsx(SortBy, { selectedOption: selectedOption, setSelectedOption: setSelectedOption, options: options })] })] }));
}
export function SortBy({ selectedOption, setSelectedOption, options }) {
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (_jsxs("div", { className: "flex items-center gap-2 text-lg bg-gray-800 text-white py-4 px-4 rounded hover:bg-gray-700", children: [_jsx(ArrowUpDownIcon, { className: "h-6 w-6" }), _jsx("select", { className: "bg-transparent text-white", onChange: handleChange, value: selectedOption, children: options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] }));
}
