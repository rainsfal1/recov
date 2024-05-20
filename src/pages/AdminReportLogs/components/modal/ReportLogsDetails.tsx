import React, { useState } from 'react';
import { CardContent, Card } from "../../../../../../../Recov/recov/@/components/ui/card";
import {ClaimModal} from "../../../../components/modal/ClaimModal";

interface UserProps {
    fullName: string;
}


interface DataProps {
    _id: string;
    image: string;
    itemName: string;
    category: string;
    date: string;
    location: string;
    description: string;
    user: UserProps;
}
interface ViewDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: DataProps;
}


export const ReportLogsDetails: React.FC<ViewDetailsModalProps> = ({ isOpen, onClose, data }) => {

    const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
    const modalClass = isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none';
    const defaultImage = "/public/placeholderImg.svg"; // replace with your default image path

    const stopPropagation = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    if (isClaimModalOpen) {
        return <ClaimModal isOpen={isClaimModalOpen} onClose={() => setIsClaimModalOpen(false)} itemId={data._id} />;
    }

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-200 ease-in ${modalClass}`}
             onClick={onClose}>
            <div className="absolute  inset-0 bg-black opacity-50"></div>
            <main key="1"
                  className="w-11/12 sm:w-full max-w-screen-sm mx-auto p-4 md:p-4 md:py-6 lg:py-3 rounded-lg z-10 max-h-[90vh] overflow-auto"
                  onClick={stopPropagation}>
                <Card className="p-2 rounded-3xl">
                    <CardContent>
                        <h1 className="text-3xl pl-2 py-4 font-bold tracking-tighter sm:text-4xl md:text-4xl">Report Details</h1>
                        <p className="text-gray-500 pl-2 text-2xl mb-3 dark:text-gray-400 max-w-[650px]">Details of Report sent by the user</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <img src={data.image || defaultImage} alt={data.itemName}
                                     className="w-full h-auto object-cover rounded-2xl"/>
                            </div>
                            <div className="pl-5">
                                <p className="text-3xl mb-1">{data.itemName}</p>
                                <p className="text-2xl pl-1 text-gray-500 mb-8"> {data.description}</p>
                                <p className="text-xl text-gray-800 pl-1 mb-2">Category: <span
                                    className="text-gray-500">{data.category}</span></p>
                                <p className="text-xl text-gray-800 pl-1 mb-2">Date: <span
                                    className="text-gray-500">{new Date(data.date).toLocaleDateString()}</span></p>
                                <p className="text-xl text-gray-800 pl-1 mb-2">Reported By: <span
                                    className="text-gray-500">{data.user?.fullName}</span></p>
                                <p className="text-xl text-gray-800 pl-1 mb-2">Location: <span
                                    className="text-gray-500">{data.location}</span></p>
                            </div>
                        </div>

                    </CardContent>
                </Card>
            </main>
        </div>
    );
};