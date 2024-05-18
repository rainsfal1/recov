import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { ReportForm } from '../../components/ReportForm';
import { RecentItems } from '../../components/RecentItems';
import { Tips } from '../../components/Tips';
export default function FoundReport() {
    const [recentItems, setRecentItems] = useState([]);
    useEffect(() => {
        // Replace with your actual API calls
        fetch('/api/recentItems')
            .then(response => response.json())
            .then(data => setRecentItems(data));
    }, []);
    const tips = [
        {
            title: 'Check for ID',
            description: 'Look for any identification in the item to help locate the owner.',
        },
        {
            title: 'Report to Local Authorities',
            description: 'If the item is valuable or important, report it to the local authorities.',
        },
        {
            title: 'Ask nearby people',
            description: "See if the item belongs to them, if not then don't give it nigga",
        },
        // Add more tips as needed
    ];
    return (_jsx(_Fragment, { children: _jsxs("main", { className: "flex flex-col bg-white  py-12 px-4 sm:px-6 lg:px-8", children: [_jsx(Header, { title: "Found Something?", paragraph: "Submit a report and we'll help you find your item.", iconSize: "h-28 w-28" }), ' ', _jsxs("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2", children: [_jsx(ReportForm, { title: "Found", formType: "Found" }), _jsxs("div", { children: [_jsx(RecentItems, { items: recentItems, title: "Recent Found Items" }), _jsx(Tips, { tips: tips })] })] })] }) }));
}
