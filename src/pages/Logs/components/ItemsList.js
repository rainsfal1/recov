import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ItemCard } from "../../../components/ItemCard";
import { PackageIcon } from "../../../../public/itemIcons/itemIcons";
import { GemIcon, FileTextIcon, LaptopIcon, PencilIcon, ShoppingBagIcon, UserIcon, } from "../../../../public/categoryIcons/categoryIcons";
export function ItemsList({ items, sortOption }) {
    const [sortedItems, setSortedItems] = useState([...items]);
    const getIconComponent = (category) => {
        switch (category) {
            case "Electronics":
                return LaptopIcon;
            case "Personal Items":
                return UserIcon;
            case "Clothing":
                return ShoppingBagIcon;
            case "Jewelry":
                return GemIcon;
            case "Documents":
                return FileTextIcon;
            case "Stationery":
                return PencilIcon;
            default:
                return PackageIcon;
        }
    };
    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + "...";
    }
    useEffect(() => {
        let newSortedItems;
        switch (sortOption) {
            case "itemName":
                newSortedItems = [...items].sort((a, b) => a.itemName.localeCompare(b.itemName));
                break;
            case "dateReported":
                newSortedItems = [...items].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                break;
            case "status":
                newSortedItems = [...items].sort((a, b) => a.itemType.localeCompare(b.itemType));
                break;
            default:
                newSortedItems = items;
        }
        setSortedItems(newSortedItems);
    }, [sortOption, items]);
    return (_jsx(_Fragment, { children: sortedItems.map((item) => (_jsx(ItemCard, { _id: item._id, IconComponent: getIconComponent(item.category), itemName: item.itemName, description: item.description, shortDescription: truncateString(item.description, 25), date: item.date, category: item.category, user: item.user, itemType: item.itemType, image: item.image, location: item.location, email: item.email }, item._id))) }));
}
