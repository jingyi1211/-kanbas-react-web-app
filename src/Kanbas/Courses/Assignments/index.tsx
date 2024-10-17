import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControl";
import { MdAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";
import { useParams } from "react-router";
import * as db from "../../Database";

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div>
            <AssignmentsControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-3" />
                        <GoTriangleDown className="me-1" />
                        <strong>ASSIGNMENTS</strong>
                        <AssignmentControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-3 fs-3 text-success" />
                                    <div className="me-4 flex-grow-1">
                                        <a className="wd-assignment-link text-dark text-decoration-none"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            <strong>{assignment.title}</strong>
                                        </a>
                                        <div>
                                            <span className="text-danger">Multiple Modules</span> | <span className="text-bold"><strong>Not available until </strong>{formatDate(assignment.availableFrom)} |</span>
                                        </div>
                                        <div>
                                            <span className="text-bold"><strong>Due </strong>{formatDate(assignment.dueDate)}</span> | {assignment.points} pts
                                        </div>
                                    </div>
                                    <LessonControlButtons />
                                </li>
                            ))
                        }
                    </ul>
                </li>
            </ul >
        </div >
    );
}
