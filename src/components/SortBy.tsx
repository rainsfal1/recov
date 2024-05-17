import { ArrowUpDownIcon
} from "../../public/itemIcons/itemIcons.tsx";

export  function SortBy({ selectedOption, setSelectedOption, options }) {
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex items-center gap-2 text-lg bg-gray-800 text-white py-4 px-4 rounded hover:bg-gray-700">
            <ArrowUpDownIcon className="h-6 w-6" />
            <select className="bg-transparent text-white" onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}