import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from '../../@/components/ui/card';
export const Tips = ({ tips }) => {
    return (_jsxs("div", { className: "mt-10 animate-fade-in-up-delay-4", children: [_jsx("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 mb-6", children: "Tips" }), _jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: tips.map((tip, index) => (_jsx(Card, { className: "bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in-up-delay-5", children: _jsx(CardContent, { className: "p-10 flex items-center justify-between", children: _jsxs("div", { children: [_jsx("h3", { className: "text-2xl pb-2 font-medium text-gray-900", children: tip.title }), _jsx("p", { className: "text-xl text-gray-600", children: tip.description })] }) }) }, index))) })] }));
};
