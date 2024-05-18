import React from "react";
import "./SubmissionItem";
import { SubmissionItem } from "./SubmissionItem";
interface SubmissionItemProps {
  title: string;
  date: string;
  status: string;
  id: string;
}

interface SubmissionsListProps {
  submissions: SubmissionItemProps[];
}

export const SubmissionsList: React.FC<SubmissionsListProps> = ({
                                                                  submissions,
                                                                }) => (
    <div className="divide-y rounded-lg border">
        {submissions.map((submission) => {
            return <SubmissionItem {...submission} key={submission.id} status={submission.status === "false" ? "Found" : "Lost"} />;        })}
    </div>
);