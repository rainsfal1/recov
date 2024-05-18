import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Label } from "../../../@/components/ui/label";
import { Textarea } from "../../../@/components/ui/textarea";
import { Input } from "../../../@/components/ui/input";
import { Button } from "../../../@/components/ui/button";
import { CardContent, Card } from "../../../@/components/ui/card";
import { UploadIcon } from "../../../public/itemIcons/itemIcons";
import { useUserContext } from "../../context/userContext";
import { FormLoader } from "../../../public/Loader/FormLoader";
import { useNavigate } from "react-router-dom";
export const ClaimModal = ({ isOpen, onClose, itemId, }) => {
    console.log("ClaimModal", itemId);
    const modalClass = isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none";
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return (_jsxs("div", { className: `fixed inset-0 flex  items-center justify-center z-50 transition-opacity duration-200 ease-in ${modalClass}`, onClick: onClose, children: [_jsx("div", { className: "absolute inset-0  bg-black opacity-50" }), _jsx("main", { className: "w-11/12 sm:w-full mb-40 sm:mb-0 max-w-screen-sm mx-auto p-6 md:p-4 md:py-6 lg:py-3  rounded-lg z-10  max-h-[90vh] overflow-auto", onClick: stopPropagation, children: _jsxs(Card, { className: "p-3 rounded-3xl", children: [_jsx(HeaderComponent, {}), _jsx(CardContent, { children: _jsx(FormComponent, { onClose: onClose, itemId: itemId }) })] }) }, "1")] }));
};
function HeaderComponent() {
    return (_jsxs("div", { className: "pl-3 pr-3 pt-3", children: [_jsx("h1", { className: "text-3xl pl-3 py-2 font-bold tracking-tighter sm:text-4xl md:text-4xl", children: "Claim Item" }), _jsx("p", { className: "text-gray-500 pl-3 text-2xl dark:text-gray-400 max-w-[650px]", children: "If you've lost an item, you can file a claim here." })] }));
}
function FormComponent({ onClose, itemId }) {
    const [description, setDescription] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [image, setImage] = useState(null);
    const [descriptionError, setDescriptionError] = useState("");
    const [imageError, setImageError] = useState("");
    const [message, setMessage] = useState({ type: "", text: "" });
    const { token } = useUserContext();
    const navigate = useNavigate(); // Add this line
    const [isSubmitting, setIsSubmitting] = useState(false); // Add this line
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!description) {
            setDescriptionError("Description is required");
            return;
        }
        setIsSubmitting(true); // Move this line here
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
                const response = await fetch("http://localhost:3000/api/v1/claim/createClaim", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(claim),
                });
                if (response.ok) {
                    console.log("Hello");
                    setMessage({ type: "success", text: "Claim submitted successfully" });
                    setDescriptionError(""); // clear description error
                    navigate('/'); // Add this line
                }
                else {
                    setMessage({ type: "error", text: "Failed to submit claim" });
                }
            }
            catch (error) {
                console.error("Error submitting claim:", error);
                setMessage({ type: "error", text: "Failed to submit claim" });
            }
            finally {
                setIsSubmitting(false); // Add this line
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
    return (_jsxs("form", { className: "grid gap-4", onSubmit: handleSubmit, children: [message.text && (_jsx("div", { className: `text-${message.type === "error" ? "red" : "green"}-500`, children: message.text })), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "item-description", className: "text-2xl", children: "Description of the Item" }), _jsx(Textarea, { className: "min-h-[40px] p-2 text-lg", id: "item-description", placeholder: "Provide details about the item you lost", value: description, onChange: (e) => setDescription(e.target.value) }), descriptionError && (_jsx("div", { className: "text-red-500", children: descriptionError }))] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "proof-of-ownership", className: "text-2xl", children: "Attach Image (Optional)" }), _jsxs("label", { className: "flex flex-col items-center justify-center w-full h-48 border-2  border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600", htmlFor: "proof-of-ownership-image", children: [_jsxs("div", { className: "flex flex-col items-center justify-center pt-5 pb-6", children: [_jsx(UploadIcon, { className: "w-10 h-10 text-gray-400" }), _jsxs("p", { className: "mb-2 text-lg text-gray-500 dark:text-gray-400", children: [_jsx("span", { className: "font-semibold text-lg", children: "Click to upload" }), "or drag and drop"] }), _jsx("p", { className: "text-base text-gray-500 dark:text-gray-400", children: "SVG, PNG, JPG or GIF (MAX. 1MB)" })] }), _jsx(Input, { className: "hidden", id: "proof-of-ownership-image", type: "file", onChange: handleImageChange })] }), imageError && _jsx("div", { className: "text-red-500", children: imageError })] }), _jsxs("div", { className: "grid gap-2", children: [_jsx(Label, { htmlFor: "additional-info", className: "text-2xl", children: "Additional Information" }), _jsx(Textarea, { className: "min-h-[40px] p-3 text-lg", id: "additional-info", placeholder: "Provide any additional information that might help", value: additionalInfo, onChange: (e) => setAdditionalInfo(e.target.value) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("button", { className: "text-2xl", type: "button", onClick: onClose, children: "Back" }), _jsx(Button, { className: "h-16 text-xl cursor-pointer overflow-visible rounded border-none bg-[#262626]  text-center text-[#e5e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]", type: "submit", disabled: isSubmitting, children: isSubmitting ? _jsx(FormLoader, {}) : 'Submit Claim' })] })] }));
}
