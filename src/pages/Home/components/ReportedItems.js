import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ItemCard = ({ Icon, title, reportDate }) => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center rounded-lg bg-zinc-50 p-4 dark:bg-gray-700", children: [_jsx(Icon, { className: "mb-2 h-10 w-24 text-gray-[25252525] dark:text-gray-400" }), _jsx("h3", { className: "text-base font-medium text-gray-[25252525] dark:text-gray-50 sm:text-lg md:text-xl", children: title }), _jsxs("p", { className: "mt-1 text-3xl text-gray-500 dark:text-gray-400 sm:text-base", children: ["Reported on ", reportDate] })] }));
};
const ReportedItems = ({ title, items }) => {
    return (_jsxs("div", { className: "bg-gray-100 rounded-lg shadow-sm p-8 dark:bg-gray-800", children: [_jsx("h2", { className: "text-2xl text-center font-bold mb-4 dark:text-gray-[25252525] sm:text-2xl md:text-3xl", children: title }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 sm:gap-6 md:gap-8", children: items.map((item, index) => (_jsx(ItemCard, { ...item }, index))) })] }));
};
export { ReportedItems, ItemCard };
