import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeLayout from "./pages/WelcomeLayout/WelcomeLayout";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import FoundReport from "./pages/FoundReport/FoundReport";
import LostReport from "./pages/LostReport/LostReport";
import Logs from "./pages/Logs/Logs";
import MyAccount from "./pages/MyAccount/MyAccount";
import Protect from "./Protect";
import HomePage from "./HomePage";
import ClaimLogs from "./pages/AdminClaimLogs/ClaimLogs";
import AdminReportLogs from "./pages/AdminReportLogs/AdminReportLogs";
import UserLogs from "./pages/AdminUserLogs/UserLogs";
import { UserContextProvider } from "./context/userContext";

function AnimatedRoutes() {
    const location = useLocation();
    return (_jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, transition: { duration: 0.5 }, children: _jsxs(Routes, { location: location, children: [_jsx(Route, { index: true, path: "/", element: _jsx(WelcomeLayout, {}) }), _jsx(Route, { path: "/signin", element: _jsx(SignIn, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUp, {}) }), _jsxs(Route, { path: "/home", element: _jsx(Protect, { children: _jsx(HomePage, {}) }), children: [_jsx(Route, { path: "logs", element: _jsx(Navigate, { to: "logs?page=1", replace: true }) }), _jsx(Route, { path: "logs/*", element: _jsx(Logs, {}) }), _jsx(Route, { path: "foundreport", element: _jsx(FoundReport, {}) }), _jsx(Route, { path: "lostreport", element: _jsx(LostReport, {}) }), _jsx(Route, { path: "account", element: _jsx(MyAccount, {}) })] }), _jsx(Route, { path: "/home/claim-logs/*", element: _jsx(ClaimLogs, {}) }), _jsx(Route, { path: "/home/report-logs/*", element: _jsx(AdminReportLogs, {}) }), _jsx(Route, { path: "/home/user-logs/*", element: _jsx(UserLogs, {}) })] }) }, location.key) }));
}

function App() {
    return (_jsx(BrowserRouter, { children: _jsx(UserContextProvider, { children: _jsx(AnimatedRoutes, {}) }) }));
}

export default App;