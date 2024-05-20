import {PackageIcon, Trash2Icon} from "../../../../../../Recov/recov/public/itemIcons/itemIcons";
import { StatusBadge } from "../../../components/StatusBadge";
import {Button} from "../../../../../../Recov/recov/@/components/ui/button";

interface SubmissionItemProps {
    title: string;
    date: string;
    id: string;
    status: "Lost" | "Found";
}

const deleteSubmissionAndLog = async (submissionId) => {
    try {
        // Delete the submission
        const response = await fetch(`http://localhost:3000/api/v1/submissions/${submissionId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // assuming you have a token for authentication
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Delete the log
        const logResponse = await fetch(`http://localhost:3000/api/v1/logs/${submissionId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // assuming you have a token for authentication
            },
        });

        if (!logResponse.ok) {
            throw new Error('Network response was not ok');
        }

        // Refresh the submission list and logs here
    } catch (error) {
        console.error('Error:', error);
    }
};

export const SubmissionItem: React.FC<SubmissionItemProps> = ({
                                                                  title,
                                                                  date,
                                                                  status,
                                                                  id
                                                              }) => (
    <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 px-4 py-3">
        <div className="flex h-20 w-20 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
            <PackageIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="grid gap-1">
            <div className="font-medium text-xl">{title}</div>
            <div className="text-md text-gray-500 dark:text-gray-400">
                Reported on {new Date(date).toLocaleDateString()}
            </div>
        </div>
        <div className="flex items-center gap-5">
            <StatusBadge status={status} />
            <Button
                onClick={() => deleteSubmissionAndLog(id)}
                className="px-4 py-6 text-red-500 hover:bg-red-100 focus:ring-red-500"
                size="sm"
                variant="outline"
            >
                <Trash2Icon className="w-6 h-6"/>
            </Button>
        </div>
    </div>
);