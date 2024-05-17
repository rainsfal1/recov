import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LogsHeader } from "./components/LogsHeader.tsx";
import { ItemsList } from "./components/ItemsList.tsx";
import { useParams } from "react-router-dom";
import { ListLoader } from "../../../public/Loader/ListLoader.tsx";

const fetchItemsForPage = async (page) => {
  try {
    console.log("Fetching items");
    const response = await fetch(
        `http://localhost:3000/api/v1/items?page=${page}`
    );
    const data = await response.json();
    console.log("Fetched items", data.items);
    return data.items;
  } catch (error) {
    console.log("Error fetching items");
    console.error(error);
    throw error; // Throw the error so it can be caught and handled in the useEffect
  }
};

export default function Logs() {
  const location = useLocation();
  const { page: pageParam } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const initialPage = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [sortOption, setSortOption] = useState("dateReported");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true); // Set loading state to true before fetching items
      setError(null); // Reset error state before fetching items
      try {
        const response = await fetchItemsForPage(currentPage);
        setItems(
            response.map(({ timestamp, adminApproval, status, ...rest }) => rest)
        );
      } catch (error) {
        setError(error); // Set error state if there's an error
      } finally {
        setIsLoading(false); // Set loading state to false after fetching items
      }
    };

    // Fetch items whenever the currentPage changes
    fetchItems();
  }, [currentPage]); // Dependency on currentPage

  // Separate effect to handle page updates from query params or route
  useEffect(() => {
    const newPage = Number(pageParam) || Number(searchParams.get("page")) || 1;
    setCurrentPage(newPage);
  }, [location.search, pageParam]); // Dependencies updated

  return (
      <main className="container mx-auto py-12 px-4 sm:px-6 flex flex-col">
        <>
          <LogsHeader sortOption={sortOption} setSortOption={setSortOption} />
          {isLoading ? (
              <div>
                <ListLoader />
              </div> // Show loading message when isLoading is true
          ) : error ? (
              <div>Error: {error.message}</div> // Show error message when error is not null
          ) : (
              <>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                  <ItemsList items={items} sortOption={sortOption} />
                  <div />
                  <div />
                </div>
                <div className="mt-5 flex justify-center items-center">
                  <button
                      className="h-16 text-lg mx-8 cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                  >
                    Previous Page
                  </button>
                  <button
                      className="h-16 text-lg cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
                      onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next Page
                  </button>
                </div>
              </>
          )}
        </>
      </main>
  );
}