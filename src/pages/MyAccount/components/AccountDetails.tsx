import React, { useEffect, useState } from "react";
import {
  CardFooter,
  CardContent,
  Card,
} from "../../../../@/components/ui/card";
import { Label } from "../../../../@/components/ui/label";
import { Input } from "../../../../@//components/ui/input";
import { Button } from "../../../../@/components/ui/button";
import { useUserContext } from "../../../context/userContext";

export const AccountDetails = () => {
  const { token } = useUserContext();
  const [username, setUsername] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const getInfo = async () => {
    try {
      const response = await fetch(
          "/api/v1/getUserDetails",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
      );
      const data = await response.json();
      console.log("Data being printed", data);
      setUsername(data.email); // Update the username state here
    } catch (error) {
      console.error("Failed to fetch user info", error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      name: username,
      email: username,
    }));
  }, [username]);

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let errors = {
      name: "",
      password: "",
      confirmPassword: "",
    };

    if (!form.name || /[^a-zA-Z0-9 ]/g.test(form.name)) {
      isValid = false;
      errors.name =
          "Name must not be empty and contain only alphanumeric characters and spaces";
    }

    if (form.password.length < 8) {
      isValid = false;
      errors.password = "Password must be at least 8 characters long";
    }

    if (form.password !== form.confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    if (isValid) {
      const updatePassword = async () => {
        try {
          // Send patch request to update password
          const response = await fetch(
              "/api/v1/updatePassword",
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ password: form.password, token }),
              }
          );
          if (response.ok) {
            // Password updated successfully
            console.log("Password updated");
          } else {
            // Handle error response
            console.error("Failed to update password");
          }
        } catch (error) {
          // Handle network error
          console.error("Network error", error);
        }
      };

      updatePassword();
    }
    // Submit form
  };

  return (
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent className="grid py-12 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-xl">
                Email
              </Label>
              <Input
                  value={form.name}
                  onChange={handleInputChange}
                  id="name"
                  className="text-xl py-6 pl-2"
                  readOnly
              />
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-xl">
                Password
              </Label>
              <Input
                  value={form.password}
                  onChange={handleInputChange}
                  id="password"
                  type="password"
                  className="text-xl py-6 pl-2"
              />
              {errors.password && (
                  <div className="text-red-500">{errors.password}</div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword" className="text-xl">
                Confirm Password
              </Label>
              <Input
                  value={form.confirmPassword}
                  onChange={handleInputChange}
                  id="confirmPassword"
                  type="password"
                  className="text-xl py-6 pl-2"
              />
              {errors.confirmPassword && (
                  <div className="text-red-500">{errors.confirmPassword}</div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
                type="submit"
                className="ml-auto w-64 h-20 bg-gray-950 text-stone-50 text-2xl transition-colors duration-500 ease-in-out transform hover:bg-gray-800"
            >
              Save Changes
            </Button>
          </CardFooter>
        </Card>
      </form>
  );
};