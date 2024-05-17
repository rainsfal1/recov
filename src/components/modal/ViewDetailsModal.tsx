import React, { useState } from "react";
import { Button } from "../../../@/components/ui/button";
import { CardContent, Card } from "../../../@/components/ui/card";
import { ClaimModal } from "./ClaimModal";

interface ItemProps {
    _id: string;
    user: string;
    itemName: string;
    description: string;
    date: Date;
    category: string;
    itemType: string;
    image: string;
    location: string;
    email: string;
}

interface ViewDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: ItemProps;
}

export const ViewDetailsModal: React.FC<ViewDetailsModalProps> = ({
                                                                      isOpen,
                                                                      onClose,
                                                                      item,
                                                                  }) => {
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
        return (
            <ClaimModal
                itemId={item._id}
                isOpen={isClaimModalOpen}
                onClose={() => setIsClaimModalOpen(false)}
            />
        );
    }
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ease-in ${modalClass}`}
            onClick={onClose}
        >
            <div className="absolute  inset-0 bg-black opacity-50"></div>
            <main
                key="1"
                className="w-11/12 sm:w-full max-w-screen-sm mx-auto p-4 md:p-4 md:py-6 lg:py-3 rounded-lg z-10 max-h-[90vh] overflow-auto"
                onClick={stopPropagation}
            >
                <Card className="p-2 rounded-3xl">
                    <CardContent>
                        <h1 className="text-3xl pl-2 py-4 font-bold tracking-tighter sm:text-4xl md:text-4xl">
                            {item.itemType === "Lost" ? "Lost Item" : "Item Found"}
                        </h1>
                        <p className="text-gray-500 pl-2 text-xl mb-3 dark:text-gray-400 max-w-[650px]">
                            {item.itemType === "Lost"
                                ? "Details of the item that was reported as lost."
                                : "Details of the item that was reported as found."}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <img
                                    src={item.image || defaultImage}
                                    alt={item.itemName}
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                            </div>
                            <div className="pl-5">
                                <p className="text-3xl mb-1">{item.itemName}</p>
                                <p className="text-2xl pl-1 text-gray-500 mb-8">
                                    {" "}
                                    {item.description}
                                </p>
                                <p className="text-xl text-gray-500 pl-1  mb-2">
                                    Reported Date: {new Date(item.date).toLocaleDateString()}
                                </p>
                                <p className="text-xl text-gray-500 pl-1 mb-2">
                                    Reported By: {item.user}
                                </p>
                                <p className="text-xl text-gray-500 pl-1 mb-2">
                                    Category: {item.category}
                                </p>
                                <p className="text-xl text-gray-500 pl-1 mb-2">
                                    Location: {item.location}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <Button className="text-2xl pt-8" onClick={onClose}>
                                Close
                            </Button>
                            <Button
                                className="h-16 text-xl cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
                                onClick={handleClaimClick}
                            >
                                Claim
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};