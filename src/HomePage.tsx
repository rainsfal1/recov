import { useUserContext } from "./context/userContext";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Home from "./pages/Home/Home";
import React from 'react';

export default function HomePage() {
  const { userType, loggedIn } = useUserContext();

  if (userType === "admin") {
    return <AdminDashboard />;
  } else {
    return <Home isLoggedIn={loggedIn} />;
  }
}
