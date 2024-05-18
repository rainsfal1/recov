import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IonIcon } from '@ionic/react';
const TextInput = ({ label, placeholder, icon, type, value, onChange, }) => {
    const handleInputChange = (event) => {
        onChange(event.target.value);
    };
    return (_jsxs("div", { className: "input bg-stone-50 shadow-lg p-4 flex flex-col gap-2 rounded-xl text-gray-500", children: [_jsx("label", { htmlFor: label, className: "text-2xl", children: label }), _jsxs("div", { className: "sec-2 flex items-center gap align-baseline", children: [_jsx(IonIcon, { className: "mr-2 size-10", icon: icon }), _jsx("input", { className: "bg-stone-50 outline-none border-none w-full", type: type, name: label, placeholder: placeholder, style: { fontSize: '18px' }, value: value, onChange: handleInputChange })] })] }));
};
export default TextInput;
