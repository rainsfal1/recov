import { createRoot } from "react-dom/client";import App from "./App";
import "./index.css";
import { UserContextProvider } from "./context/userContext";

createRoot(document.getElementById("root")!).render(
    <UserContextProvider>
        <App />
    </UserContextProvider>
);