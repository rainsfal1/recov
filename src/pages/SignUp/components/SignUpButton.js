import { jsx as _jsx } from "react/jsx-runtime";
// SignUpButton.tsx
import { FormLoader } from "../../../../public/Loader/FormLoader";
import { useNavigate } from 'react-router-dom';
const SignUpButton = ({ isSubmitting, handleSubmit }) => {
    const navigate = useNavigate();
    const handleClick = async () => {
        try {
            const signUpSuccess = await handleSubmit(); // Wait for the promise to resolve
            if (signUpSuccess) {
                navigate('/signin'); // If the promise resolves and sign-up is successful, navigate to the sign-in page
            }
        }
        catch (error) {
            // Handle the error accordingly
            console.error(error);
        }
    };
    return (_jsx("div", { className: "flex justify-center items-center", children: _jsx("button", { className: "relative inline-block h-20 w-2/4 text-3xl cursor-pointer overflow-visible rounded border-none bg-[#262626]  text-center text-[#e5e5e5] shadow-md transition-colors duration-150 ease-out hover:bg-[#333333] active:bg-[#444444] active:text-[#ffffff]", onClick: handleClick, disabled: isSubmitting, children: isSubmitting ? _jsx(FormLoader, {}) : 'Sign up' }) }));
};
export default SignUpButton;
