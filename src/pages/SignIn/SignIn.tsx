// SignIn.tsx
import React, { useState, FormEvent, useEffect } from "react";
import Logo from "./components/Logo";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import LoginButton from "./components/LoginButton";
import Footer from "./components/Footer";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";



const validateUser = async (
    user
): Promise<
    | { success: true; userType: string; token: string }
    | { success: false; message: string }
> => {
  try {
    const response = await fetch("/api/v1/signin", {
      mode: 'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data && data.status === "success") {
      console.log("User logged in successfully");
      return { success: true, userType: data.userType, token: data.token };
    } else if (data) {
      console.error("Error logging in user");
      return { success: false, message: data.message };
    } else {
      throw new Error('No data received from server');
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};

const SignIn: React.FC = () => {
  const { setLoggedIn, setUserType, setToken } = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleSubmit = async (event: FormEvent) => {
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
    console.log(result.success);
    if (!result.success) {
      // logic for displaying the error messagem i would recommend displaying a toast notificaiton using "react-hot-toast"
    } else {
      // set the user type and logged in state
      setLoggedIn(true);
      console.log(typeof setLoggedIn);
      setUserType(result.userType);
      setToken(result.token);
      // move to the home page
      navigate("/home");
    }
  };

  return (
      <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 bg-white p-8 l  w-full sm:w-64 md:w-2/6 lg:w-128 mx-auto my-auto min-h-screen"
      >
        <Logo />
        <EmailInput email={email} onSetEmail={setEmail} />
        <PasswordInput password={password} onSetPassword={setPassword} />
        {errorMessage && (
            <div style={{ color: "red", fontSize: 16 }}>{errorMessage}</div>
        )}
        <LoginButton />
        <Footer />
      </form>
  );
};

export default SignIn;
