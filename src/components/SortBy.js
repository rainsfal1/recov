import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpDownIcon } from "../../public/itemIcons/itemIcons";
export function SortBy({ selectedOption, setSelectedOption, options }) {
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (_jsxs("div", { className: "flex items-center gap-2 text-lg bg-gray-800 text-white py-4 px-4 rounded hover:bg-gray-700", children: [_jsx(ArrowUpDownIcon, { className: "h-6 w-6" }), _jsx("select", { className: "bg-transparent text-white", value: selectedOption, onChange: handleChange, children: options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) })] }));
}
