import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, CardContent, CardTitle, CardDescription, CardHeader, } from "../../@/components/ui/card";
import { Label } from "../../@/components/ui/label";
import { Input } from "../../@/components/ui/input";
import { Button } from "../../@/components/ui/button";
import { FormLoader } from "../../public/Loader/FormLoader";
import { Textarea } from "../../@/components/ui/textarea";
import { UploadIcon, CalendarIcon } from "../../public/itemIcons/itemIcons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "react-calendar/dist/Calendar.css";
import { useUserContext } from "../context/userContext";
export const ReportForm = ({ title, formType }) => {
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);
    const [itemNameError, setItemNameError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [dateError, setDateError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const { token } = useUserContext();
    const [isNextClicked, setIsNextClicked] = useState(false);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false); // Add this line
    const handleNextClick = () => {
        let hasError = false;
        if (!itemName) {
            setItemNameError("Item name is required");
            hasError = true;
        }
        else {
            setItemNameError("");
        }
        if (!category) {
            setCategoryError("Category is required");
            hasError = true;
        }
        else {
            setCategoryError("");
        }
        if (!location) {
            setLocationError("Location is required");
            hasError = true;
        }
        else {
            setLocationError("");
        }
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // DD/MM/YYYY format
        if (!date || !dateRegex.test(date)) {
            setDateError("Invalid date or date format. Please use DD/MM/YYYY format.");
            hasError = true;
        }
        else {
            setDateError("");
        }
        if (!description) {
            setDescriptionError("Description is required");
            hasError = true;
        }
        else {
            setDescriptionError("");
        }
        if (!hasError) {
            setIsSubmitting(false); // Reset isSubmitting state here
            setIsNextClicked(true);
        }
        // Only open the loader if all fields are filled
        if (name && email) {
            setIsSubmitting(true);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true); // Set isSubmitting to true when the form is submitted
        let hasError = false;
        if (hasError) {
            setIsSubmitting(false);
            return;
        }
        if (!name) {
            setNameError("Name is required");
            hasError = true;
        }
        else {
            setNameError("");
        }
        if (!email) {
            setEmailError("Email is required");
            hasError = true;
        }
        else {
            setEmailError("");
        }
        if (hasError) {
            return;
        }
        const report = {
            itemName,
            category,
            location,
            date,
            description,
            name,
            email,
            image,
            formType,
        };
        report["userName"] = report["name"];
        delete report["name"];
        console.log(report);
        // Here you can handle the report object, for example send it to an API
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "ml_default");
        data.append("cloud_name", "detdmzwck");
        console.log("hello");
        const submitReport = async (data) => {
            try {
                console.log("I am inside submitting report");
                const response = await fetch("https://api.cloudinary.com/v1_1/detdmzwck/image/upload", {
                    method: "POST",
                    body: data,
                });
                const imageData = await response.json();
                console.log(imageData);
                const url = imageData.url;
                report.image = url;
                console.log(report);
                const reportResponse = await fetch("http://localhost:3000/api/v1/items", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...report, token }),
                });
                console.log(await reportResponse.json());
                // Redirect to the home page after successful submission
                navigate('/home');
                setIsSubmitting(false); // Set isSubmitting back to false after the form is submitted
                return true;
            }
            catch (err) {
                console.log(err);
                setIsSubmitting(false);
                return false;
            }
        };
        submitReport(data);
    };
    return (_jsxs(Card, { className: "bg-white shadow-xl rounded-xl overflow-hidden animate-fade-in-up", children: [_jsxs(CardHeader, { className: "bg-gray-950 p-5 text-white ", children: [_jsxs(CardTitle, { className: " text-5xl pt-5", children: ["Report a ", title, " item"] }), _jsx(CardDescription, { className: " text-2xl pt-3", children: "Fill out the form below and let us know." })] }), _jsx(CardContent, { className: "p-8", children: _jsx("form", { className: "grid gap-6", onSubmit: handleSubmit, children: !isNextClicked ? (_jsxs(_Fragment, { children: [_jsx(ItemDetails, { itemName: itemName, setItemName: setItemName, category: category, setCategory: setCategory, itemNameError: itemNameError, categoryError: categoryError }), _jsx(FoundDetails, { location: location, setLocation: setLocation, date: date, setDate: setDate, locationError: locationError, dateError: dateError, formType: formType }), _jsx(Description, { description: description, setDescription: setDescription, descriptionError: descriptionError }), _jsx(Button, { className: "w-full h-16 text-xl bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 rounded-xl py-4 animate-fade-in-up", onClick: handleNextClick, children: "Next" })] })) : (_jsxs(_Fragment, { children: [_jsx(ContactDetails, { name: name, setName: setName, email: email, setEmail: setEmail, nameError: nameError, emailError: emailError }), _jsx(UploadImage, { image: image, setImage: setImage }), _jsx(Button, { className: "h-16 text-xl cursor-pointer overflow-visible rounded border-none bg-[#262626] px-7 text-center text-[#e5e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]", type: "submit", disabled: isSubmitting, children: isSubmitting ? _jsx(FormLoader, { top: "1.7rem" }) : 'Submit Claim' })] })) }) })] }));
};
export const FoundDetails = ({ location, setLocation, setDate, locationError, dateError, formType, // Destructure formType from the props
 }) => {
    const [dateInput, setDateInput] = useState("");
    const handleDateChange = (e) => {
        let input = e.target.value;
        // Check if the input is a number, a slash, or a backspace
        const lastChar = input.charAt(input.length - 1);
        if (!lastChar.match(/[0-9/]/) &&
            e.nativeEvent.inputType !== "deleteContentBackward") {
            input = input.substring(0, input.length - 1);
        }
        // Check if the input length exceeds 10
        if (input.length > 10) {
            input = input.substring(0, 10);
        }
        // Add slashes after the 2nd and 5th characters
        if ((input.length === 2 || input.length === 5) &&
            e.nativeEvent.inputType !== "deleteContentBackward") {
            input += "/";
        }
        else if ((input.length === 3 || input.length === 6) &&
            e.nativeEvent.inputType === "deleteContentBackward") {
            input = input.slice(0, -1);
        }
        setDateInput(input);
        setDate(input);
    };
    return (_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsxs("div", { className: "space-y-1", children: [_jsx(Label, { htmlFor: "location", className: "text-3xl", children: formType === 'Found' ? 'Location Found' : 'Last Seen At' }), _jsx(Input, { className: "text-xl  p-8", id: "location", placeholder: "e.g. Main Street, Park", value: location, onChange: (e) => setLocation(e.target.value) }), locationError && _jsx("p", { className: "text-red-500", children: locationError })] }), _jsxs("div", { className: "space-y-2 ", children: [_jsx(Label, { htmlFor: "date", className: "text-3xl ", children: formType === 'Found' ? 'Date found' : 'Lost Date' }), _jsxs("div", { children: [_jsxs("div", { className: "relative", children: [_jsx(Input, { className: "p-6  mt-2 text-xl", id: "date", placeholder: "Select a date", type: "text", value: dateInput, onChange: handleDateChange }), _jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none", children: _jsx(CalendarIcon, { className: "w-5 h-5 text-gray-400" }) })] }), dateError && _jsx("p", { className: "text-red-500", children: dateError })] })] })] }));
};
export const ItemDetails = ({ itemName, setItemName, category, setCategory, itemNameError, categoryError, }) => {
    return (_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsxs("div", { className: "space-y-3", children: [_jsx(Label, { htmlFor: "item-name", className: "text-3xl", children: "Item Name" }), _jsx(Input, { id: "item-name", className: "text-xl  p-8", placeholder: "e.g. Wallet, Keys, Phone", value: itemName, onChange: (e) => setItemName(e.target.value) }), itemNameError && _jsx("p", { className: "text-red-500", children: itemNameError })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("label", { htmlFor: "category-name", className: "text-3xl font-medium text-gray-900 ", children: "Category" }), _jsxs("select", { value: category, onChange: (e) => setCategory(e.target.value), className: "border-[1px]  block w-full pl-3 pr-10 py-3 text-xl border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md", children: [_jsx("option", { value: "", children: "Select a category" }), _jsx("option", { value: "Electronics", children: "Electronics" }), _jsx("option", { value: "Clothing", children: "Clothing" }), _jsx("option", { value: "Jewelry", children: "Jewelry" }), _jsx("option", { value: "Documents", children: "Documents" }), _jsx("option", { value: "Stationary", children: "Stationary" }), _jsx("option", { value: "Bags and Wallets", children: "Sports Equipment" }), _jsx("option", { value: "Personal Items", children: "Personal Items" }), _jsx("option", { value: "Others", children: "Others" })] }), categoryError && _jsx("p", { className: "text-red-500", children: categoryError })] })] }));
};
export const Description = ({ description, setDescription, descriptionError, }) => {
    return (_jsxs("div", { className: "space-y-3", children: [_jsx(Label, { htmlFor: "description", className: "text-3xl", children: "Description" }), _jsx(Textarea, { className: "text-xl p-8", id: "description", placeholder: "Provide details about the item", value: description, onChange: (e) => setDescription(e.target.value) }), descriptionError && _jsx("p", { className: "text-red-500", children: descriptionError })] }));
};
export const ContactDetails = ({ name, setName, email, setEmail, nameError, emailError, }) => {
    return (_jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2", children: [_jsxs("div", { className: "space-y-3", children: [_jsx(Label, { htmlFor: "name", className: "text-3xl", children: "Your Name" }), _jsx(Input, { className: "text-xl  p-8", id: "name", placeholder: "Your name", value: name, onChange: (e) => setName(e.target.value) }), nameError && _jsx("p", { className: "text-red-500", children: nameError })] }), _jsxs("div", { className: "space-y-3", children: [_jsx(Label, { htmlFor: "email", className: "text-3xl", children: "Your Email" }), _jsx(Input, { className: "text-xl  p-8", id: "email", placeholder: "Your email", type: "email", value: email, onChange: (e) => setEmail(e.target.value) }), emailError && _jsx("p", { className: "text-red-500", children: emailError }), " "] })] }));
};
export const UploadImage = ({ setImage }) => {
    const [fileName, setFileName] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file && file.size > 1024 * 1024) {
            // file size > 5MB
            alert("File size exceeds the limit of 1MB");
        }
        else {
            setImage(file);
            setFileName(file ? file.name : null);
        }
    };
    return (_jsxs("div", { className: "space-y-3 flex items-center", children: [_jsx(Label, { className: " text-3xl", htmlFor: "image", children: "Upload Image" }), _jsx("div", { className: "flex items-center justify-center w-full", children: _jsxs("label", { className: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100", htmlFor: "dropzone-file", children: [_jsxs("div", { className: "flex flex-col items-center justify-center pt-3 pb-3", children: [_jsx(UploadIcon, { className: "w-8 h-8 text-gray-400" }), fileName ? (_jsx("p", { className: "mb-1 text-3xl text-gray-500", children: fileName })) : (_jsxs("p", { className: "mb-1 text-3xl text-gray-500", children: [_jsx("span", { className: "font-semibold", children: "Click to upload" }), " or drag and drop"] })), _jsx("p", { className: "text-xl text-gray-500", children: "Maximum file size: 1MB" })] }), _jsx("input", { className: "hidden", id: "dropzone-file", type: "file", onChange: handleFileChange })] }) })] }));
};
