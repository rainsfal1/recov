import { LocateIcon, MailIcon, CalendarIcon } from "../../../../public/itemIcons/itemIcons";

export function ItemLocation({ location, email, dateReported }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-4 gap-4">
      <div className="flex items-center gap-2">
        <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <p className="text-gray-500 text-base dark:text-gray-400">{location}</p>
      </div>
      <div className="flex items-center gap-2">
        <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <p className="text-gray-500 text-base  dark:text-gray-400">{email}</p>
      </div>
      <div className="flex items-center gap-2">
        <CalendarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <p className="text-gray-500 text-base dark:text-gray-400">{dateReported}</p>
      </div>
    </div>
  );
}