// SignIn.tsx
import { useState, FormEvent, useEffect } from "react";
import Logo from "./components/Logo";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import LoginButton from "./components/LoginButton";
import Footer from "./components/Footer";
import { useUserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

// either returns the user type and token or false
const validateUser = async (
    user
): Promise<
    | { success: true; userType: string; token: string }
    | { success: false; message: string }
> => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user.email, password: user.password }),
    });
    const data = await response.json();
    if (data.status === "success") {
      return { success: true, userType: data.userType, token: data.token };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error(error);
  }
};

const SignIn: React.FC = () => {
  const { setLoggedIn, setUserType, setToken } = useUserContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Both fields are required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    if (password.length < 5) {
      setErrorMessage("Password should be at least 5 characters long");
      return;
    }

    setIsLoading(true);
    const user = {
      email,
      password,
    };

    const result = await validateUser(user);
    setIsLoading(false);
    if ('message' in result) {
      setErrorMessage(result.message);
    } else {
      setLoggedIn(true);
      setUserType(result.userType);
      setToken(result.token);
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
        <LoginButton isLoading={isLoading} />
        <Footer />
      </form>
  );
};

export default SignIn;