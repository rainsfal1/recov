import { Link } from 'react-router-dom';
import { HomeIcon, PackageIcon, FileTextIcon } from "../../../../public/itemIcons/itemIcons.tsx";

export function Sidebar() {
  return (
      <div className="hidden border-r bg-gray-100/40 p-8 dark:bg-gray-800/40 md:block h-screen">
        <nav className="grid gap-4">
          <Link
              className="flex items-center gap-4 rounded-md px-5 py-4 text-lg font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              to="/home"
          >
            <HomeIcon className="h-8 w-8" />
            Dashboard
          </Link>
          <Link
              className="flex items-center gap-4 rounded-md px-5 py-4 text-lg font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              to="/home/report-logs/"
          >
            <PackageIcon className="h-8 w-8" />
            Report Logs
          </Link>
          <Link
              className="flex items-center gap-4 rounded-md px-5 py-4 text-lg font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              to="/home/user-logs/"
          >
            <PackageIcon className="h-8 w-8" />
            User Logs
          </Link>
          <Link
              className="flex items-center gap-4 rounded-md px-5 py-4 text-lg font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              to="/home/claim-logs/"
          >
            <FileTextIcon className="h-8 w-8" />
            Claim Logs
          </Link>
        </nav>
      </div>
  );
}