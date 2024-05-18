import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { PageIcon } from '../../public/pageIcon/pageIcon';
export const Header = ({ title, paragraph, iconSize, }) => {
    return (_jsx("div", { className: "max-w-6xl w-full", children: _jsx("div", { className: "text-left mb-8", children: _jsx(Link, { to: "/home", children: _jsxs("div", { className: "flex items-center sm:text-left", children: [_jsx(PageIcon, { className: `${iconSize} mr-4` }), _jsxs("h1", { className: "text-6xl text-left font-bold text-gray-900 dark:text-gray-100", children: [title, _jsx("p", { className: "text-2xl mt-2 mb-5 text-gray-600 dark:text-gray-400", children: paragraph })] })] }) }) }) }));
};
