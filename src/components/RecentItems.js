import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from '../../@/components/ui/card';
import { Button } from '../../@/components/ui/button';
export const RecentItems = ({ items, title }) => {
    return (_jsxs("div", { className: "animate-fade-in-up", children: [_jsx("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 mb-6", children: title }), _jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2", children: items.map((item, index) => (_jsx(Card, { className: "bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up-delay", children: _jsxs(CardContent, { className: "p-10 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-medium text-gray-900", children: item.name }), _jsx("p", { className: "text-xl text-gray-600", children: item.description })] }), _jsx(Button, { variant: "link", children: _jsx("span", { className: "text-xl", children: "View Details" }) })] }) }, index))) })] }));
};
