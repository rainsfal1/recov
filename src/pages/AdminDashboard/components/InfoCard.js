import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// InfoCard.js
import { CardTitle, CardHeader, CardContent, Card } from "../../../../@/components/ui/card";
export function InfoCard({ title, icon, children }) {
    return (_jsxs(Card, { children: [_jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [_jsx(CardTitle, { className: "text-2xl font-medium", children: title }), icon] }), _jsx(CardContent, { children: children })] }));
}
