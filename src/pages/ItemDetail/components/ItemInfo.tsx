import { PhoneIcon } from "../../../../public/itemIcons/itemIcons.tsx";

export function ItemInfo({ title, description, phone }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500 text-lg dark:text-gray-400">{description}</p>
      </div>
      <div className="flex items-center gap-2">
        <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <p className="text-gray-500 text-lg dark:text-gray-400">{phone}</p>
      </div>
    </div>
  );
}