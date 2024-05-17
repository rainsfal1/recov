import { Link } from 'react-router-dom';
import { Button } from "../../../../@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../../../@/components/ui/dropdown-menu";
import { PageIcon } from "../../../../public/pageIcon/pageIcon.tsx";
import {LogOutIcon} from "../../../../public/optionIcons/optionItems.tsx";

export function Header() {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  return (
    <header className="flex h-20 py-14 items-center justify-between border-b bg-white px-8 dark:border-gray-800 dark:bg-gray-950">
      <Link className="flex items-center gap-3" to="#">
        <PageIcon className="h-16 w-16" />
        <span className="text-3xl font-semibold">Lost & Found</span>
      </Link>
      <nav className="hidden gap-8 text-base font-medium md:flex pr-5 mr-10">
        <Link className="text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="/home">
          Dashboard
        </Link>
        <Link className="text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="/home/report-logs/">
          Report Logs
        </Link>
        <Link className="text-gray-500 text-2xl hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="/home/user-logs/">
          User Logs
        </Link>
        <Link className="text-gray-500 text-2xl  hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" to="/home/claim-logs/">
          Claim Logs
        </Link>
      </nav>
      <div className="flex items-center gap-3">

            <Button
                className={`h-14 bg-gray-800 text-gray-100`}
                variant="outline"
                onClick={handleLogout}
            >
              <LogOutIcon className="inline-block w-8 h-8 mr-2" />
              <span className="text-lg">Logout</span>
            </Button>

      </div>
    </header>
  );
}