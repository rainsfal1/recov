import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardContent, Card, CardFooter } from "../../@/components/ui/card";
import { ViewDetailsModal } from "./modal/ViewDetailsModal";
import { StatusBadge } from "./StatusBadge";
import { CalendarIcon, TagIcon } from "../../public/itemIcons/itemIcons";
import { useState } from "react";
export const ItemCard = ({ IconComponent, _id, user, itemName, description, shortDescription, date, category, itemType, image, location, email, }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const item = {
        _id: _id,
        itemName: itemName,
        description: description,
        image: image,
        date: date,
        category: category,
        user: user,
        location: location,
        itemType: itemType,
        email: email,
    };
    const handleButtonClick = () => {
        setIsModalOpen(true);
    };
    return (_jsxs(Card, { className: "w-full sm:max-w-sm p-4 sm:p-7", children: [_jsxs(CardContent, { className: "grid grid-cols-[auto_2fr] gap-2 sm:gap-4 items-center", children: [_jsx("div", { className: "bg-gray-100 rounded-md p-3 mr-3 dark:bg-gray-800", children: _jsx(IconComponent, { className: "w-12 h-12 sm:w-12 sm:h-12 text-gray-500 dark:text-gray-400" }) }), _jsxs("div", { className: "space-y-1", children: [_jsx("h3", { className: "text-xl sm:text-xl font-medium", children: itemName }), _jsx("p", { className: "text-lg sm:text-lg text-gray-500 dark:text-gray-400 max-w-prose", children: shortDescription }), _jsxs("div", { className: "flex mt-3 items-center gap-2 text-sm sm:text-sm text-gray-500 dark:text-gray-400", children: [_jsx(CalendarIcon, { className: "w-10 h-10 sm:w-6 sm:h-6" }), _jsxs("span", { children: ["Date Reported: ", date.toString()] })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm sm:text-sm text-gray-500 dark:text-gray-400", children: [_jsx(TagIcon, { className: "w-6 h-6 sm:w-6 sm:h-6" }), _jsxs("span", { children: ["Category: ", category] })] }), _jsx("div", { className: "flex items-center gap-2 text-lg sm:text-lg font-medium", children: _jsx(StatusBadge, { status: itemType }) })] })] }), _jsxs(CardFooter, { className: "flex justify-center ", children: [_jsx("button", { className: "text-black text-xl", onClick: handleButtonClick, children: "View Details" }), _jsx(ViewDetailsModal, { isOpen: isModalOpen, onClose: () => setIsModalOpen(false), item: item })] })] }));
};
