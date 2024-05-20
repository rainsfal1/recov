import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from "../../components/Header";
import { AccountDetails } from "./components/AccountDetails";
import { SubmissionsList } from "./components/SubmissionList";
import { ListLoader } from "../../../public/Loader/ListLoader";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext";
export default function MyAccount() {
    const [submissions, setSubmissions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { token } = useUserContext();
    useEffect(() => {
        const fetchSubmissions = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch("/api/v1/items/userItems", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch submissions");
                }
                const data = await response.json();
                const submissionsToPass = data.data.items;
                setSubmissions(submissionsToPass);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchSubmissions();
    }, []);
    return (_jsx("main", { className: "container mx-auto py-12 px-12 md:px-6", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "space-y-4", children: [_jsx(Header, { title: "My Account", paragraph: "", iconSize: "h-28 w-28" }), " ", _jsx(AccountDetails, {})] }), _jsx("div", { className: "space-y-8", children: _jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-4xl my-2 font-semibold", children: "My Submissions" }), error ? (_jsxs("div", { children: ["Error: ", error.message] }) // Display the error message when error is not null
                            ) : isLoading ? (_jsx(ListLoader, {}) // Display the loader when isLoading is true
                            ) : (_jsx(SubmissionsList, { submissions: submissions }))] }) })] }) }));
}
