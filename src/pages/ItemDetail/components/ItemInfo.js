import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PhoneIcon } from "../../../../public/itemIcons/itemIcons";
export function ItemInfo({ title, description, phone }) {
    return (_jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold", children: title }), _jsx("p", { className: "text-gray-500 text-lg dark:text-gray-400", children: description })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(PhoneIcon, { className: "h-5 w-5 text-gray-500 dark:text-gray-400" }), _jsx("p", { className: "text-gray-500 text-lg dark:text-gray-400", children: phone })] })] }));
}
