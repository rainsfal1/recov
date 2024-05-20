import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
  const [form, setForm] = useState({
    name: token.email,
    email: token.email,
    password: "",
    confirmPassword: "",
  });
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
            "http://localhost:3000/api/v1/updatePassword",
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
  return _jsx("form", {
    onSubmit: handleSubmit,
    children: _jsxs(Card, {
      children: [
        _jsxs(CardContent, {
          className: "grid py-12 gap-6",
          children: [
            _jsxs("div", {
              className: "grid gap-2",
              children: [
                _jsx(Label, {
                  htmlFor: "name",
                  className: "text-xl",
                  children: "Full Name",
                }),
                _jsx(Input, {
                  value: form.name,
                  onChange: handleInputChange,
                  id: "name",
                  className: "text-xl py-6 pl-2",
                }),
                errors.name &&
                  _jsx("div", {
                    className: "text-red-500",
                    children: errors.name,
                  }),
              ],
            }),
            _jsxs("div", {
              className: "grid gap-2",
              children: [
                _jsx(Label, {
                  htmlFor: "password",
                  className: "text-xl",
                  children: "Password",
                }),
                _jsx(Input, {
                  value: form.password,
                  onChange: handleInputChange,
                  id: "password",
                  type: "password",
                  className: "text-xl py-6 pl-2",
                }),
                errors.password &&
                  _jsx("div", {
                    className: "text-red-500",
                    children: errors.password,
                  }),
              ],
            }),
            _jsxs("div", {
              className: "grid gap-2",
              children: [
                _jsx(Label, {
                  htmlFor: "confirmPassword",
                  className: "text-xl",
                  children: "Confirm Password",
                }),
                _jsx(Input, {
                  value: form.confirmPassword,
                  onChange: handleInputChange,
                  id: "confirmPassword",
                  type: "password",
                  className: "text-xl py-6 pl-2",
                }),
                errors.confirmPassword &&
                  _jsx("div", {
                    className: "text-red-500",
                    children: errors.confirmPassword,
                  }),
              ],
            }),
          ],
        }),
        _jsx(CardFooter, {
          children: _jsx(Button, {
            type: "submit",
            className:
              "ml-auto w-64 h-20 bg-gray-950 text-stone-50 text-2xl transition-colors duration-500 ease-in-out transform hover:bg-gray-800",
            children: "Save Changes",
          }),
        }),
      ],
    }),
  });
};
