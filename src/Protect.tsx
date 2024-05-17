import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./context/userContext";

export default function Protect({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  // extract the token from the cookies
  const { token } = useUserContext();
  console.log("verifying  the token", token);
  React.useEffect(() => {
    const verifyToken = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/v1/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          // body: JSON.stringify({ token }),
        });
        const data = await response.json();
        if (data.authenticated) {
          setIsLoggedIn(true); // assuming the userType is returned from the API
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);
  if (loading) {
    return null;
  }
  if (!isLoggedIn) {
    return <Navigate to="/signin" />;
  }
  return children;
}

