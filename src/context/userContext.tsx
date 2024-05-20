import React, { createContext, useEffect, useState } from "react";

type UserContextType = {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userType: string; // or "user" | "admin"
  setUserType: React.Dispatch<React.SetStateAction<string>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<UserContextType>({} as UserContextType);
const getInitialStateValueFromCookie = () => {
  const cookies = Object.fromEntries(
    document.cookie.split(";").map((cookie) => cookie.trim().split("="))
  );

  const isLoggedInCookie = cookies.loggedIn;
  const userTypeCookie = cookies.userType;
  const tokenCookie = cookies.token;

  console.log(
    "checking the cookies initial values",
    JSON.stringify({
      isLoggedInCookie,
      userTypeCookie,
      tokenCookie,
    })
  );
  return {
    loggedIn: isLoggedInCookie,
    userType: userTypeCookie,
    token: tokenCookie,
  };
};

function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(
    getInitialStateValueFromCookie().loggedIn
  );
  const [userType, setUserType] = useState(
    getInitialStateValueFromCookie().userType
  );
  const [token, setToken] = useState(getInitialStateValueFromCookie().token);

  useEffect(() => {
    // Update browser cookies when logged-in state or user type changes
    document.cookie = `loggedIn=${loggedIn};`;
    document.cookie = `userType=${userType};`;
    document.cookie = `token=${token};`;
  }, [loggedIn, userType, token]);

  return (
    <UserContext.Provider
      value={{ loggedIn, userType, setLoggedIn, setUserType, token, setToken }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  return React.useContext(UserContext);
}

export { UserContext, UserContextProvider, useUserContext };
