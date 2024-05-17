import {
  MoonIcon,
  LogOutIcon,
  BellIcon,
} from "../../../../public/optionIcons/optionItems.tsx";
import { PageIcon } from "../../../../public/pageIcon/pageIcon.tsx";
import { Button } from "../../../../@/components/ui/button";
import { Toggle } from "../../../../@/components/ui/toggle";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../context/userContext.tsx";
export const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { setLoggedIn } = useUserContext();
  const { setToken } = useUserContext();
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
    setToken("");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`flex flex-col items-center justify-between sm:flex-row ${
        darkMode ? "dark" : ""
      }`}
    >
      <div>
        <div className="flex items-center sm:text-left">
          <PageIcon className="h-24 w-24 mr-4" />{" "}
          <h1
            className={`text-5xl text-left font-bold ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Welcome to Lost & Found
            <p
              className={`text-2xl mt-2 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              We're here to help you find what you've lost.
            </p>
          </h1>
        </div>
      </div>
      <div className="flex items-center space-x-5 mt-4 sm:mt-0">
        <Toggle
          aria-label="Toggle dark mode"
          className={`w-20 h-14 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
          variant="outline"
          onClick={toggleDarkMode}
        >
          <MoonIcon className="w-full " />
        </Toggle>
        <Button
          className={`h-14 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
          variant="outline"
        >
          <BellIcon className="inline-block w-8 h-8 mr-1" />
        </Button>
        <Button
          className={`h-14 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
          variant="outline"
          onClick={handleLogout}
        >
          <LogOutIcon className="inline-block w-8 h-8 mr-2" />
          <span className="text-lg">Logout</span>
        </Button>
      </div>
    </header>
  );
};
