import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ItemImage({ src }) {
    const defaultSrc = 'public/placeholderImg.svg';
    const imageSrc = src || defaultSrc;
    return (_jsxs("div", { className: "mt-6", children: [_jsx("h2", { className: "text-2xl font-bold", children: "Item Image" }), _jsx("div", { className: "mt-4 rounded-lg overflow-hidden", children: _jsx("img", { alt: "Item Image", className: "w-full h-auto", height: 400, src: imageSrc, style: {
                        aspectRatio: "800/400",
                        objectFit: "cover",
                    }, width: 800 }) })] }));
}
