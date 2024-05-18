import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// SignIn.tsx
import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import LoginButton from "./components/LoginButton";
import Footer from "./components/Footer";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
// either returns the user type and token or false
const validateUser = async (user) => {
    try {
        const response = await fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email, password: user.password }),
        });
        const data = await response.json();
        // console.log("data from the server", data);
        if (data.status === "success") {
            console.log("User logged in successfully");
            return { success: true, userType: data.userType, token: data.token };
        }
        else {
            // console.log(data.status);
            console.error("Error logging in user");
            return { success: false, message: data.message };
        }
    }
    catch (error) {
        console.error(error);
    }
};
const SignIn = () => {
    const { setLoggedIn, setUserType, setToken } = useUserContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        setErrorMessage("");
    }, [email, password]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setErrorMessage("Both fields are required");
            return;
        }
        // Check if email is valid
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Please enter a valid email");
            return;
        }
        // Check if password is of sufficient length
        if (password.length < 5) {
            setErrorMessage("Password should be at least 5 characters long");
            return;
        }
        const user = {
            email,
            password,
        };
        const result = await validateUser(user);
        if (!result.success) {
            // logic for displaying the error messagem i would recommend displaying a toast notificaiton using "react-hot-toast"
        }
        else {
            // set the user type and logged in state
            setLoggedIn(true);
            setUserType(result.userType);
            setToken(result.token);
            // move to the home page
            navigate("/home");
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-8 bg-white p-8 l  w-full sm:w-64 md:w-2/6 lg:w-128 mx-auto my-auto min-h-screen", children: [_jsx(Logo, {}), _jsx(EmailInput, { email: email, onSetEmail: setEmail }), _jsx(PasswordInput, { password: password, onSetPassword: setPassword }), errorMessage && (_jsx("div", { style: { color: "red", fontSize: 16 }, children: errorMessage })), _jsx(LoginButton, {}), _jsx(Footer, {})] }));
};
export default SignIn;
