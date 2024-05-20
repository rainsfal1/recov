"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionsList = void 0;
var react_1 = require("react");
require("./SubmissionItem");
var SubmissionItem_1 = require("./SubmissionItem");
var SubmissionsList = function (_a) {
    var submissions = _a.submissions;
    return (<div className="divide-y rounded-lg border">
        {submissions.map(function (submission) { return (<SubmissionItem_1.SubmissionItem {...submission} key={submission.id}/>); })}
    </div>);
};
exports.SubmissionsList = SubmissionsList;
