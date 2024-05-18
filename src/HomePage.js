import { jsx as _jsx } from "react/jsx-runtime";
import { useUserContext } from "./context/userContext";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Home from "./pages/Home/Home";
export default function HomePage() {
    const { userType, loggedIn } = useUserContext();
    if (userType === "admin") {
        return _jsx(AdminDashboard, {});
    }
    else {
        return _jsx(Home, { isLoggedIn: loggedIn });
    }
}
