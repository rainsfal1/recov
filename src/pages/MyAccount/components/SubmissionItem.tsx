import { PackageIcon } from "../../../../public/itemIcons/itemIcons.tsx";

import { StatusBadge } from "../../../components/StatusBadge.tsx";

interface SubmissionItemProps {
    title: string;
    date: string;
    status: "Lost" | "Found";
}

export const SubmissionItem: React.FC<SubmissionItemProps> = ({
                                                                  title,
                                                                  date,
                                                                  status,
                                                              }) => (
    <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 px-4 py-3">
        <div className="flex h-20 w-20 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
            <PackageIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="grid gap-1">
            <div className="font-medium text-xl">{title}</div>
            <div className="text-md text-gray-500 dark:text-gray-400">
                Reported on {date}
            </div>
        </div>
        <div className="flex items-center gap-2">
            <StatusBadge status={status} />
        </div>
    </div>
);