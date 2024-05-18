import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./welcomelayout.css";
import Icon from "./components/Icon";
import LoginMessage from "./components/LoginMessage";
import SignIn from "./components/SignIn";
import SignUpMessage from "./components/SignUpMessage";
import { NavLink } from "react-router-dom";
export default function WelcomeLayout() {
    return (_jsx("div", { className: "screen-content-wrapper", children: _jsxs("div", { className: "content-wrapper-inner", children: [_jsx(Icon, {}), _jsx(LoginMessage, {}), _jsx("br", {}), _jsx(NavLink, { to: "/signin", children: _jsx(SignIn, {}) }), _jsx("br", {}), _jsx(NavLink, { to: "/signup", children: _jsx(SignUpMessage, {}) })] }) }));
}
