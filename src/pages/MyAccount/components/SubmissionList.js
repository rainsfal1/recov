import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import "./SubmissionItem";
import { SubmissionItem } from "./SubmissionItem";
export const SubmissionsList = ({ submissions, }) => (_jsx("div", { className: "divide-y rounded-lg border", children: submissions.map((submission) => {
        return _createElement(SubmissionItem, { ...submission, key: submission.id, status: submission.status === "false" ? "Found" : "Lost" });
    }) }));
