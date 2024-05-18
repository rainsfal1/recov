import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const EmailInput = ({ email, onSetEmail }) => {
    const handleInputChange = (event) => {
        onSetEmail(event.target.value);
    };
    return (_jsxs("div", { className: "email bg-stone-50 shadow-lg p-4 flex flex-col gap-2 rounded-xl text-gray-500", children: [_jsx("label", { htmlFor: "email", className: "text-2xl", children: "Email" }), _jsx("input", { onChange: handleInputChange, className: "bg-stone-50 outline-none border-none w-full", type: "text" // Change this line
                , name: "email", placeholder: "example@example.com", style: { fontSize: '18px' }, value: email })] }));
};
export default EmailInput;
