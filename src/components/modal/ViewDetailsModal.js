import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "../../../@/components/ui/button";
import { CardContent, Card } from "../../../@/components/ui/card";
import { ClaimModal } from "./ClaimModal";
export const ViewDetailsModal = ({ isOpen, onClose, item, }) => {
    const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
    const modalClass = isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none";
    const defaultImage = "/public/placeholderImg.svg"; // replace with your default image path
    const handleClaimClick = () => {
        setIsClaimModalOpen(true);
    };
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    if (isClaimModalOpen) {
        return (_jsx(ClaimModal, { itemId: item._id, isOpen: isClaimModalOpen, onClose: () => setIsClaimModalOpen(false) }));
    }
    return (_jsxs("div", { className: `fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ease-in ${modalClass}`, onClick: onClose, children: [_jsx("div", { className: "absolute  inset-0 bg-black opacity-50" }), _jsx("main", { className: "w-11/12 sm:w-full max-w-screen-sm mx-auto p-4 md:p-4 md:py-6 lg:py-3 rounded-lg z-10 max-h-[90vh] overflow-auto", onClick: stopPropagation, children: _jsx(Card, { className: "p-2 rounded-3xl", children: _jsxs(CardContent, { children: [_jsx("h1", { className: "text-3xl pl-2 py-4 font-bold tracking-tighter sm:text-4xl md:text-4xl", children: item.itemType === "Lost" ? "Lost Item" : "Item Found" }), _jsx("p", { className: "text-gray-500 pl-2 text-xl mb-3 dark:text-gray-400 max-w-[650px]", children: item.itemType === "Lost"
                                    ? "Details of the item that was reported as lost."
                                    : "Details of the item that was reported as found." }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx("div", { children: _jsx("img", { src: item.image || defaultImage, alt: item.itemName, className: "w-full h-auto object-cover rounded-2xl" }) }), _jsxs("div", { className: "pl-5", children: [_jsx("p", { className: "text-3xl mb-1", children: item.itemName }), _jsxs("p", { className: "text-2xl pl-1 text-gray-500 mb-8", children: [" ", item.description] }), _jsxs("p", { className: "text-xl text-gray-500 pl-1  mb-2", children: ["Reported Date: ", new Date(item.date).toLocaleDateString()] }), _jsxs("p", { className: "text-xl text-gray-500 pl-1 mb-2", children: ["Reported By: ", item.user] }), _jsxs("p", { className: "text-xl text-gray-500 pl-1 mb-2", children: ["Category: ", item.category] }), _jsxs("p", { className: "text-xl text-gray-500 pl-1 mb-2", children: ["Location: ", item.location] })] })] }), _jsxs("div", { className: "flex justify-between mt-4", children: [_jsx(Button, { className: "text-2xl pt-8", onClick: onClose, children: "Close" }), _jsx(Button, { className: "h-16 text-xl cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]", onClick: handleClaimClick, style: { display: item.itemType === "Found" ? "block" : "none" }, children: "Claim" })] })] }) }) }, "1")] }));
};
