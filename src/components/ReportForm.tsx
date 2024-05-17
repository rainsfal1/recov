import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "../../@/components/ui/card.tsx";
import { Label } from "../../@/components/ui/label.tsx";
import { Input } from "../../@/components/ui/input.tsx";
import { Button } from "../../@/components/ui/button.tsx";
import {FormLoader} from "../../public/Loader/FormLoader.tsx";
import { Textarea } from "../../@/components/ui/textarea.tsx";
import { UploadIcon, CalendarIcon } from "../../public/itemIcons/itemIcons.tsx";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "react-calendar/dist/Calendar.css";
import { useUserContext } from "../context/userContext.tsx";
interface ReportFormProps {
  title: string;
  formType: 'Found' | 'Lost';
}

export const ReportForm: React.FC<ReportFormProps> = ({ title , formType}) => {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<string>("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);

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
    } else {
      setItemNameError("");
    }

    if (!category) {
      setCategoryError("Category is required");
      hasError = true;
    } else {
      setCategoryError("");
    }

    if (!location) {
      setLocationError("Location is required");
      hasError = true;
    } else {
      setLocationError("");
    }

    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/; // DD/MM/YYYY format
    if (!date || !dateRegex.test(date)) {
      setDateError(
        "Invalid date or date format. Please use DD/MM/YYYY format."
      );
      hasError = true;
    } else {
      setDateError("");
    }

    if (!description) {
      setDescriptionError("Description is required");
      hasError = true;
    } else {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
    } else {
      setNameError("");
    }

    if (!email ) {
      setEmailError("Email is required");
      hasError = true;
    } else {
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
    let url;
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
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/detdmzwck/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        const imageData = await response.json();
        console.log(imageData);

        const url = imageData.url;
        report.image = url;
        console.log(report);

        const reportResponse = await fetch(
          "http://localhost:3000/api/v1/items",
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...report, token }),
          }
        );
        console.log(await reportResponse.json());

        // Redirect to the home page after successful submission
        navigate('/home');

        setIsSubmitting(false); // Set isSubmitting back to false after the form is submitted

        return true;
      } catch (err) {
        console.log(err);
        setIsSubmitting(false);
        return false;
      }
    };
    submitReport(data);
  };

  return (
    <Card className="bg-white shadow-xl rounded-xl overflow-hidden animate-fade-in-up">
      <CardHeader className="bg-gray-950 p-5 text-white ">
        <CardTitle className=" text-5xl pt-5">Report a {title} item</CardTitle>
        <CardDescription className=" text-2xl pt-3">
          Fill out the form below and let us know.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form className="grid gap-6" onSubmit={handleSubmit}>
          {!isNextClicked ? (
            <>
              <ItemDetails
                itemName={itemName}
                setItemName={setItemName}
                category={category}
                setCategory={setCategory}
                itemNameError={itemNameError}
                categoryError={categoryError}
              />
              <FoundDetails
                  location={location}
                  setLocation={setLocation}
                  date={date}
                  setDate={setDate}
                  locationError={locationError}
                  dateError={dateError}
                  formType={formType}
              />
              <Description
                description={description}
                setDescription={setDescription}
                descriptionError={descriptionError}
              />
              <Button
                className="w-full h-16 text-xl bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 rounded-xl py-4 animate-fade-in-up"
                onClick={handleNextClick}
              >
                Next
              </Button>
            </>
          ) : (
            <>
              <ContactDetails
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                nameError={nameError}
                emailError={emailError}
              />
              <UploadImage image={image} setImage={setImage} />
              <Button
                className="w-full h-16 bg-gray-900 text-white text-xl hover:bg-gray-800 focus:ring-gray-500 rounded-xl py-4 animate-fade-in-up"
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting} // Disable the button when the form is being submitted
              >
                {isSubmitting ? <FormLoader /> : 'Submit'} {/* Render the loader when the form is being submitted */}
              </Button>
            </>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

interface FoundDetailsProps {
  location: string;
  setLocation: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  locationError: string;
  dateError: string;
  formType: 'Found' | 'Lost';
}

export const FoundDetails: React.FC<FoundDetailsProps> = ({
                                                            location,
                                                            setLocation,
                                                            setDate,
                                                            locationError,
                                                            dateError,
                                                            formType, // Destructure formType from the props
                                                          }) => {
  const [dateInput, setDateInput] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    // Check if the input is a number, a slash, or a backspace
    const lastChar = input.charAt(input.length - 1);
    if (
      !lastChar.match(/[0-9/]/) &&
      e.nativeEvent.inputType !== "deleteContentBackward"
    ) {
      input = input.substring(0, input.length - 1);
    }

    // Check if the input length exceeds 10
    if (input.length > 10) {
      input = input.substring(0, 10);
    }

    // Add slashes after the 2nd and 5th characters
    if (
      (input.length === 2 || input.length === 5) &&
      e.nativeEvent.inputType !== "deleteContentBackward"
    ) {
      input += "/";
    } else if (
      (input.length === 3 || input.length === 6) &&
      e.nativeEvent.inputType === "deleteContentBackward"
    ) {
      input = input.slice(0, -1);
    }

    setDateInput(input);
    setDate(input);
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="space-y-1">
        <Label htmlFor="location" className="text-3xl">
          {formType === 'Found' ? 'Location Found' : 'Last Seen At'}
        </Label>
        <Input
          className="text-xl  p-8"
          id="location"
          placeholder="e.g. Main Street, Park"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {locationError && <p className="text-red-500">{locationError}</p>}
      </div>

      <div className="space-y-2 ">
        <Label htmlFor="date" className="text-3xl ">
          {formType === 'Found' ? 'Date found' : 'Lost Date'}
        </Label>
        <div>
          <div className="relative">
            <Input
              className="p-6  mt-2 text-xl"
              id="date"
              placeholder="Select a date"
              type="text"
              value={dateInput}
              onChange={handleDateChange}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <CalendarIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          {dateError && <p className="text-red-500">{dateError}</p>}
        </div>
      </div>
    </div>
  );
};

// ItemDetails.tsx
interface ItemDetailsProps {
  itemName: string;
  setItemName: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  itemNameError: string;
  categoryError: string;
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({
  itemName,
  setItemName,
  category,
  setCategory,
  itemNameError,
  categoryError,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="space-y-3">
        <Label htmlFor="item-name" className="text-3xl">
          Item Name
        </Label>
        <Input
          id="item-name"
          className="text-xl  p-8"
          placeholder="e.g. Wallet, Keys, Phone"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        {itemNameError && <p className="text-red-500">{itemNameError}</p>}
      </div>
      <div className="space-y-3">
        <label
          htmlFor="category-name"
          className="text-3xl font-medium text-gray-900 "
        >
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-[1px]  block w-full pl-3 pr-10 py-3 text-xl border-gray-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl rounded-md"
        >
          <option value="">Select a category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Documents">Documents</option>
          <option value="Stationary">Stationary</option>
          <option value="Bags and Wallets">Sports Equipment</option>
          <option value="Personal Items">Personal Items</option>
          <option value="Others">Others</option>
        </select>
        {categoryError && <p className="text-red-500">{categoryError}</p>}
      </div>
    </div>
  );
};

// Description.tsx

interface DescriptionProps {
  description: string;
  setDescription: (value: string) => void;
  descriptionError: string;
}

export const Description: React.FC<DescriptionProps> = ({
  description,
  setDescription,
  descriptionError,
}) => {
  return (
    <div className="space-y-3">
      <Label htmlFor="description" className="text-3xl">
        Description
      </Label>
      <Textarea
        className="text-xl p-8"
        id="description"
        placeholder="Provide details about the item"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {descriptionError && <p className="text-red-500">{descriptionError}</p>}
    </div>
  );
};

// ContactDetails.tsx

interface ContactDetailsProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  nameError: string;
  emailError: string;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({
  name,
  setName,
  email,
  setEmail,
  nameError,
  emailError,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="space-y-3">
        <Label htmlFor="name" className="text-3xl">
          Your Name
        </Label>
        <Input
          className="text-xl  p-8"
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="text-red-500">{nameError}</p>}
      </div>
      <div className="space-y-3">
        <Label htmlFor="email" className="text-3xl">
          Your Email
        </Label>
        <Input
          className="text-xl  p-8"
          id="email"
          placeholder="Your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}{" "}
      </div>
    </div>
  );
};

// UploadImage.tsx

interface UploadImageProps {
  image: File | null;
  setImage: (value: File | null) => void;
}

export const UploadImage: React.FC<UploadImageProps> = ({ setImage }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.size > 1024 * 1024) {
      // file size > 5MB
      alert("File size exceeds the limit of 1MB");
    } else {
      setImage(file);
      setFileName(file ? file.name : null);
    }
  };

  return (
    <div className="space-y-3 flex items-center">
      <Label className=" text-3xl" htmlFor="image">
        Upload Image
      </Label>
      <div className="flex items-center justify-center w-full">
        <label
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100"
          htmlFor="dropzone-file"
        >
          <div className="flex flex-col items-center justify-center pt-3 pb-3">
            <UploadIcon className="w-8 h-8 text-gray-400" />
            {fileName ? (
              <p className="mb-1 text-3xl text-gray-500">{fileName}</p>
            ) : (
              <p className="mb-1 text-3xl text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
            )}
            <p className="text-xl text-gray-500">Maximum file size: 1MB</p>
          </div>
          <input
            className="hidden"
            id="dropzone-file"
            type="file"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};
