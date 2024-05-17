import { useState, useEffect } from "react";
import { ItemCard } from "../../../components/ItemCard.tsx";
import { PackageIcon } from "../../../../public/itemIcons/itemIcons.tsx";
import {
  GemIcon,
  FileTextIcon,
  LaptopIcon,
  PencilIcon,
  ShoppingBagIcon,
  UserIcon,
} from "../../../../public/categoryIcons/categoryIcons.tsx";

interface Item {
  _id: string;
  user: string;
  itemName: string;
  description: string;
  date: Date;
  category: string;
  itemType: string;
  image: string;
  location: string;
  email: string;
}

interface ItemsListProps {
  items: Item[];
  sortOption: string;
}

export function ItemsList({ items, sortOption }: ItemsListProps) {
  const [sortedItems, setSortedItems] = useState([...items]);

  const getIconComponent = (category: string) => {
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
        newSortedItems = [...items].sort((a, b) =>
          a.itemName.localeCompare(b.itemName)
        );
        break;
      case "dateReported":
        newSortedItems = [...items].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        break;
      case "status":
        newSortedItems = [...items].sort((a, b) =>
          a.itemType.localeCompare(b.itemType)
        );
        break;
      default:
        newSortedItems = items;
    }
    setSortedItems(newSortedItems);
  }, [sortOption, items]);

  return (
    <>
      {sortedItems.map((item) => (
        <ItemCard
          key={item._id}
          _id={item._id}
          IconComponent={getIconComponent(item.category)}
          itemName={item.itemName}
          description={item.description}
          shortDescription={truncateString(item.description, 25)}
          date={item.date}
          category={item.category}
          user={item.user}
          itemType={item.itemType}
          image={item.image}
          location={item.location}
          email={item.email}
        />
      ))}
    </>
  );
}
