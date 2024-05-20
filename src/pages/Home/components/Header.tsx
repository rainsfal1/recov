import {
  MoonIcon,
  LogOutIcon,
  BellIcon,
} from "../../../../../../Recov/recov/public/optionIcons/optionItems";
import { PageIcon } from "../../../../../../Recov/recov/public/pageIcon/pageIcon";
import { Toggle } from "../../../../../../Recov/recov/@/components/ui/toggle";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../context/userContext";
import { Button } from "../../../../../../Recov/recov/@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "../../../../../../Recov/recov/@/components/ui/popover";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "../../../../../../Recov/recov/@/components/ui/card";
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
          <NotificationsComponent />
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

function NotificationsComponent() {
  const { token } = useUserContext();
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Replace with your actual API call
    console.log("token in notifications", token);
    console.log("Hello");
    fetch("http://localhost:3000/api/v1/notifications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Getting Data", data.notifications);
          setNotifications(data.notifications);
        })
        .catch((error) => console.error(error));
  }, []);

  return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
              className="h-14 w-16"
              size="icon"
              variant="outline"
              onClick={() => setIsOpen(!isOpen)}
          >
            <BellIcon className="w-100% h-100%" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-4 w-[30rem]">
          <Card className="shadow-none border-0">
            <CardHeader className="border-b">
              <CardTitle className="text-2xl">Notifications</CardTitle>
              <CardDescription className="text-lg">
                You have {notifications.length} unread messages.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {notifications.slice(0, 3).map((notification, index) => (
                    <div className="flex items-start gap-4" key={index}>
                      <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-10 dark:bg-gray-800">
                        <BellIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-medium">{notification.text}</p>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                          {new Date(notification.createdAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                ))}
                {notifications.length === 0 && (
                    <div className="text-xl flex items-center justify-center">
                      <p>No notifications, you're clear!</p>
                    </div>
                )}
              </div>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
  );
}