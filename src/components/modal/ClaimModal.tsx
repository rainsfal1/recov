import React, { useState } from "react";
import { Label } from "../../../@/components/ui/label";
import { Textarea } from "../../../@/components/ui/textarea";
import { Input } from "../../../@/components/ui/input";
import { Button } from "../../../@/components/ui/button";
import { CardContent, Card } from "../../../@/components/ui/card";
import { UploadIcon } from "../../../public/itemIcons/itemIcons";
import { useUserContext } from "../../context/userContext.tsx";

interface ClaimModalProps {
    isOpen: boolean;
    onClose: () => void;
    itemId: String;
}

export const ClaimModal: React.FC<ClaimModalProps> = ({
                                                          isOpen,
                                                          onClose,
                                                          itemId,
                                                      }) => {
    console.log("ClaimModal", itemId);
    const modalClass = isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none";

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    return (
        <div
            className={`fixed inset-0 flex  items-center justify-center z-50 transition-opacity duration-200 ease-in ${modalClass}`}
            onClick={onClose}
        >
            <div className="absolute inset-0  bg-black opacity-50"></div>
            <main
                key="1"
                className="w-11/12 sm:w-full mb-40 sm:mb-0 max-w-screen-sm mx-auto p-6 md:p-4 md:py-6 lg:py-3  rounded-lg z-10  max-h-[90vh] overflow-auto"
                onClick={stopPropagation}
            >
                <Card className="p-3 rounded-3xl">
                    <HeaderComponent />
                    <CardContent>
                        <FormComponent onClose={onClose} itemId={itemId} />
                    </CardContent>
                </Card>
            </main>
        </div>
    );
};

function HeaderComponent() {
    return (
        <div className="pl-3 pr-3 pt-3">
            <h1 className="text-3xl pl-3 py-2 font-bold tracking-tighter sm:text-4xl md:text-4xl">
                Claim Item
            </h1>
            <p className="text-gray-500 pl-3 text-2xl dark:text-gray-400 max-w-[650px]">
                If you've lost an item, you can file a claim here.
            </p>
        </div>
    );
}
function FormComponent({ onClose, itemId }) {
    const [description, setDescription] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [image, setImage] = useState(null);
    const [descriptionError, setDescriptionError] = useState("");
    const [imageError, setImageError] = useState("");
    const [message, setMessage] = useState({ type: "", text: "" });
    const { token } = useUserContext();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!description) {
            setDescriptionError("Description is required");
            return;
        }

        const claim = {
            description,
            additionalInfo,
            image,
            itemId,
            token,
        };

        console.log(claim); // Here you can handle the claim object, e.g., send it to a server
        const createNewClaim = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/v1/claim/createClaim",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(claim),
                    }
                );
                if (response.ok) {
                    console.log("Hello");
                    setMessage({ type: "success", text: "Claim submitted successfully" });
                    setDescriptionError(""); // clear description error
                } else {
                    setMessage({ type: "error", text: "Failed to submit claim" });
                }
            } catch (error) {
                console.error("Error submitting claim:", error);
                setMessage({ type: "error", text: "Failed to submit claim" });
            }
        };
        createNewClaim();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file.size > 1024 * 1024) {
            // size > 1MB
            setImageError("Image size should be less than 1MB");
            return;
        }
        setImage(file);
        setDescriptionError(""); // clear previous messages
        setImageError(""); // clear previous messages
    };

    return (
        <form className="grid gap-4" onSubmit={handleSubmit}>
            {message.text && (
                <div
                    className={`text-${message.type === "error" ? "red" : "green"}-500`}
                >
                    {message.text}
                </div>
            )}
            <div className="grid gap-2">
                <Label htmlFor="item-description" className="text-2xl">
                    Description of the Item
                </Label>
                <Textarea
                    className="min-h-[40px] p-2 text-lg"
                    id="item-description"
                    placeholder="Provide details about the item you lost"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {descriptionError && (
                    <div className="text-red-500">{descriptionError}</div>
                )}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="proof-of-ownership" className="text-2xl">
                    Attach Image (Optional)
                </Label>
                <label
                    className="flex flex-col items-center justify-center w-full h-48 border-2  border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    htmlFor="proof-of-ownership-image"
                >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadIcon className="w-10 h-10 text-gray-400" />
                        <p className="mb-2 text-lg text-gray-500 dark:text-gray-400">
                            <span className="font-semibold text-lg">Click to upload</span>
                            or drag and drop
                        </p>
                        <p className="text-base text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 1MB)
                        </p>
                    </div>
                    <Input
                        className="hidden"
                        id="proof-of-ownership-image"
                        type="file"
                        onChange={handleImageChange}
                    />
                </label>
                {imageError && <div className="text-red-500">{imageError}</div>}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="additional-info" className="text-2xl">
                    Additional Information
                </Label>
                <Textarea
                    className="min-h-[40px] p-3 text-lg"
                    id="additional-info"
                    placeholder="Provide any additional information that might help"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                />
            </div>
            <div className="flex justify-between">
                <button className="text-2xl" type="button" onClick={onClose}>
                    Back
                </button>
                <Button
                    className="bg-gray-950 h-14 text-stone-50 text-xl transition-colors duration-500 ease-in-out transform hover:bg-gray-800"
                    type="submit"
                >
                    Submit Claim
                </Button>
            </div>
        </form>
    );
}