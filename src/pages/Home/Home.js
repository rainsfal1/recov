import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNavigate, useOutlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Option } from './components/Option';
import { Footer } from './components/Footer';
import { SearchIcon, LuggageIcon, LogInIcon, UserIcon } from '../../../public/itemIcons/itemIcons';
export default function Home({ isLoggedIn }) {
    const navigate = useNavigate();
    const outlet = useOutlet();
    const [value, setValue] = useState(0);
    const [max, setMax] = useState(0);
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/signin');
        }
        fetch('https://api.example.com/items') // replace with your API endpoint
            .then(response => response.json())
            .then(data => {
            setValue(data.foundItems);
            setMax(data.totalItems);
        });
    }, [isLoggedIn, navigate]);
    return outlet ? outlet : (_jsx("main", { className: "flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-2xl", children: _jsxs("div", { className: "container px-8 py-16 space-y-12 sm:max-w-7xl sm:px-0", children: [_jsx(Header, {}), _jsxs("div", { className: "grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-2", children: [_jsx(Option, { Icon: SearchIcon, title: "Found something?", description: "Report an item you've found.", to: "foundreport" }), _jsx(Option, { Icon: LuggageIcon, title: "Lost something?", description: "Report an item you've lost.", to: "lostreport" }), _jsx(Option, { Icon: LogInIcon, title: "Logs", description: "View the lost and found logs.", to: "logs" }), _jsx(Option, { Icon: UserIcon, title: "My account", description: "Manage your account settings.", to: "account" })] }), _jsx(Footer, { value: value, max: max })] }) }));
}
