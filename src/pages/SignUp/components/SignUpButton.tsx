// SignUpButton.tsx
import { FormLoader } from "../../../../public/Loader/FormLoader";
import React from "react";
import { useNavigate } from 'react-router-dom';

interface SignUpButtonProps {
    isSubmitting: boolean;
    handleSubmit: () => Promise<boolean>; // Modify this to return a promise that resolves to a boolean
}

const SignUpButton: React.FC<SignUpButtonProps> = ({ isSubmitting, handleSubmit }) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const signUpSuccess = await handleSubmit(); // Wait for the promise to resolve
            if (signUpSuccess) {
                navigate('/signin'); // If the promise resolves and sign-up is successful, navigate to the sign-in page
            }
        } catch (error) {
            // Handle the error accordingly
            console.error(error);
        }
    }

    return (
        <div className="flex justify-center items-center">
            <button
                className="relative inline-block h-20 w-2/4 text-3xl cursor-pointer overflow-visible rounded border-none bg-[#262626]  text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]"
                onClick={handleClick}
                disabled={isSubmitting}
            >
                {isSubmitting ? <FormLoader /> : 'Sign up'}
            </button>
        </div>
    );
};

export default SignUpButton;