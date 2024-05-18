import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useEffect, useState } from "react";
const UserContext = createContext({});
const getInitialStateValueFromCookie = () => {
    const cookies = Object.fromEntries(document.cookie.split(";").map((cookie) => cookie.trim().split("=")));
    const isLoggedInCookie = cookies.loggedIn;
    const userTypeCookie = cookies.userType;
    const tokenCookie = cookies.token;
    console.log("checking the cookies initial values", JSON.stringify({
        isLoggedInCookie,
        userTypeCookie,
        tokenCookie,
    }));
    return {
        loggedIn: isLoggedInCookie,
        userType: userTypeCookie,
        token: tokenCookie,
    };
};
function UserContextProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(getInitialStateValueFromCookie().loggedIn);
    const [userType, setUserType] = useState(getInitialStateValueFromCookie().userType);
    const [token, setToken] = useState(getInitialStateValueFromCookie().token);
    useEffect(() => {
        // Update browser cookies when logged-in state or user type changes
        document.cookie = `loggedIn=${loggedIn};`;
        document.cookie = `userType=${userType};`;
        document.cookie = `token=${token};`;
    }, [loggedIn, userType, token]);
    return (_jsx(UserContext.Provider, { value: { loggedIn, userType, setLoggedIn, setUserType, token, setToken }, children: children }));
}
function useUserContext() {
    return React.useContext(UserContext);
}
export { UserContext, UserContextProvider, useUserContext };
