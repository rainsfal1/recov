import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './FormLoader.css'; // Import the CSS file
export const FormLoader = ({ top = '1.7rem' }) => {
    return (_jsxs("div", { className: "lds-ellipsis", style: { top }, children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {})] }));
};
