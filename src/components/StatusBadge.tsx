import React from "react";

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const statusClasses = () => {
    if (status === "Lost") {
      return "bg-red-100 text-lg text-red-600 dark:bg-red-900/20 dark:text-red-400";
    } else {
      return "bg-green-100 text-lg text-green-600 dark:bg-green-900/20 dark:text-green-400";
    }
  };

  return (
      <div className={`px-6 py-1 rounded-full ${statusClasses()}`}>{status}</div>
  );
};