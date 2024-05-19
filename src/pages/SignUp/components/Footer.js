import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (_jsx("div", { className: "footer flex justify-center text-sm text-gray-600 pb-40", children: _jsxs("p", { className: "text-4xl", children: ["Already a member?", " ", _jsx(NavLink, { to: "/signin", className: "signup-link cursor-pointer ml-2", style: { fontWeight: 700 }, children: "Sign in" })] }) }));
};
export default Footer;