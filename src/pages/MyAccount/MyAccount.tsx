import { Header } from "../../components/Header.tsx";
import { AccountDetails } from "./components/AccountDetails.tsx";
import { SubmissionsList } from "./components/SubmissionList.tsx";
import { Loader } from "../../../public/Loader/Loader.tsx";
import { useState, useEffect } from "react";
import { useUserContext } from "../../context/userContext.tsx";

export default function MyAccount() {
  const [submissions, setSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useUserContext();

  useEffect(() => {
    const fetchSubmissions = async () => {
      setIsLoading(true); // Set loading state to true before fetching items
      setError(null); // Reset error state before fetching items
      try {
        console.log("Hello Samama");
        console.log("Here Goes The Token", token);
        console.log(JSON.stringify({ token }));
        const response = await fetch(
          "http://localhost:3000/api/v1/items/userItems",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("I am after the api call");
        if (!response.ok) {
          throw new Error("Failed to fetch submissions");
        }
        const data = await response.json();
        const submissionsToPass = data.data.items;
        console.log("I am before settingSubmusssions", submissionsToPass);
        setSubmissions(submissionsToPass);
        console.log(submissions);
      } catch (error) {
        setError(error); // Set error state if there's an error
      } finally {
        setIsLoading(false); // Set loading state to false after fetching items
      }
    };
    console.log("I am in Use Effect 2");
    // Fetch items whenever the currentPage changes
    fetchSubmissions();
  }, []); // Dependency on currentPage

  return (
    <main className="container mx-auto py-12 px-12 md:px-6">
      <div className="space-y-8">
        <div className="space-y-4">
          <Header title="My Account" paragraph="" iconSize="h-28 w-28" />{" "}
          <AccountDetails />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl my-2 font-semibold">My Submissions</h2>
            <SubmissionsList submissions={submissions} />
          </div>
        </div>
      </div>
    </main>
  );
}
