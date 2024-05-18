import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// PasswordInput.tsx
import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { lockClosedOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';
const PasswordInput = ({ password, onSetPassword, }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleInputChange = (event) => {
        onSetPassword(event.target.value);
    };
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (_jsxs("div", { className: "password bg-stone-50 shadow-lg p-4 flex flex-col gap-2 rounded-xl text-gray-500", children: [_jsx("label", { htmlFor: "password", className: "text-2xl", children: "Password" }), _jsxs("div", { className: "sec-2 flex items-center gap align-baseline", children: [_jsx(IonIcon, { className: "mr-2 size-10", icon: lockClosedOutline }), _jsx("input", { onChange: handleInputChange, className: "pas bg-stone-50 outline-none border-none w-full", type: showPassword ? 'text' : 'password', name: "password", placeholder: "* * * * * * * *", style: { fontSize: '18px' }, value: password }), _jsx(IonIcon, { onClick: toggleShowPassword, className: "show-hide size-10 mr-4 mb-1", icon: showPassword ? eyeOffOutline : eyeOutline })] })] }));
};
export default PasswordInput;
