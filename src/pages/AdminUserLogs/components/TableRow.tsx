// TableRow.tsx
import { Button } from "../../../../@/components/ui/button";
import {
  Trash2Icon,
  XIcon,
  CheckIcon,
  EyeIcon,
} from "../../../../public/itemIcons/itemIcons.tsx";
import { useState } from "react";

export function TableRow({
  data,
  onAccept = () => console.log("Accepted clicked"),
  onReject = () => console.log("Reject clicked"),
  onDelete = () => console.log("Delete clicked"),
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (data) => {
    console.log("View Details clicked", data);
    setIsModalOpen(true);
  };

  let statusColor;
  if (data.status === "Pending") {
    statusColor = "bg-yellow-100";
  } else if (data.status === "Accepted") {
    statusColor = "bg-green-100";
  } else if (data.status === "Rejected") {
    statusColor = "bg-red-100";
  }

  return (
    <tr className="border-b-2 p4 p-0">
      <td>
        <div className="px-4 pb-6 flex flex-col items-start sm:flex-row sm:items-center sm:px-6">
          <div className="px-4 sm:px-6">
            <h1 className="text-xl mt-0">{data.user.fullName}</h1>
            <h1 className="text-gray-500 text-lg">{data.user.email}</h1>
          </div>
        </div>
      </td>
      <td className="px-4  sm:px-6">
        <div>
          <p className="text-xl">{data.item.itemName}</p>
          <p className="text-gray-500 text-lg">{data.item.description}</p>
        </div>
      </td>
      <td className="px-4 sm:px-6">
        <span
          className={`inline-flex items-center px-10 text-xl py-2 rounded-full  font-medium ${statusColor}`}
        >
          {data.status}
        </span>
      </td>
      <td>
        <div className="px-1 py-9 flex flex-col items-start space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5 sm:px-6">
          <h1 className="text-xl mt-0 pr-36">
            {new Date(data.createdAt).toLocaleDateString()}
          </h1>
          <Button
            onClick={() => onDelete()}
            className="px-4 py-6 text-red-500 hover:bg-red-100 focus:ring-red-500"
            size="sm"
            variant="outline"
          >
            <Trash2Icon className="w-6 h-6" />
          </Button>
        </div>
      </td>
    </tr>
  );
}
