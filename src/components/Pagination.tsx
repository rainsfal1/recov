// Pagination.js
import { useNavigate, useLocation } from "react-router-dom";

export function Pagination({
                               currentPage,
                               totalPages,
                               baseRoute,
                               onPageChange,
                           }) {
    const navigate = useNavigate();
    const location = useLocation();

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            const url = new URL(location.pathname, window.location.origin);
            url.searchParams.set("page", page);
            navigate(url.pathname + url.search, { replace: true });
            onPageChange(page); // Update currentPage in parent component
        }
        console.log(currentPage);
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                className="h-16 text-lg mx-8 cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
                onClick={() => changePage(currentPage - 1)} // Go to previous page
                disabled={currentPage === 1} // Disable if on first page
            >
                Previous Page
            </button>

            <button
                className="h-16 text-lg mx-8 cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
                onClick={() => changePage(currentPage + 1)} // Go to next page
                disabled={currentPage === totalPages} // Disable if on last page
            >
                Next Page
            </button>
        </div>
    );
};