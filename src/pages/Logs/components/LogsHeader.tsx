import { Link } from "react-router-dom";
import { PageIcon } from "../../../../public/pageIcon/pageIcon.tsx";
import { SearchIcon, ArrowUpDownIcon } from "../../../../public/itemIcons/itemIcons.tsx";
import { Input } from "../../../../@/components/ui/input.tsx";
import React from "react";
import {SortBy} from "../../../components/SortBy.tsx";

interface LogsHeaderProps {
    sortOption: string;
    setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

export function LogsHeader({ sortOption, setSortOption }: LogsHeaderProps) {
    const sortOptions = [
        { value: 'dateReported', label: 'Date Reported' },
        { value: 'status', label: 'Status' },
        { value: 'itemName', label: 'Item Name' },
    ];

    return (
        <div className="flex flex-col items-start justify-between mb-6 gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
                <Link
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                    to="/home"
                >
                    <PageIcon className="w-36 h-36" />
                </Link>
                <h1 className="text-5xl mt-3 font-bold">Lost & Found Logs</h1>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                    <SearchIcon className="absolute left-3 pr-6 top-1/2 -translate-y-1/2 w-14 h-14 text-gray-500" />
                    <Input
                        className="w-full pr-32 py-8 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white sm:w-auto"
                        placeholder="           Search logs..."
                        type="text"
                    />
                </div>
                <SortBy selectedOption={sortOption} setSelectedOption={setSortOption} options={sortOptions} />
            </div>
        </div>
    );
}