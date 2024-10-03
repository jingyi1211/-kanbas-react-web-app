import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControl";
import { MdAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";

export default function Assignments() {
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
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdAssignment className="me-3 fs-3 text-success" />
                            <div className="me-4 flex-grow-1">
                                <a className="wd-assignment-link text-dark text-decoration-none"
                                    href="#/Kanbas/Courses/1234/Assignments/123">
                                    <strong>A1</strong>
                                </a>
                                <div>
                                    <span className="text-danger">Multiple Modules</span> | <span className="text-bold"><strong>Not available until</strong> May 6 at 12:00am |</span>
                                </div>
                                <div>
                                    <span className="text-bold"><strong>Due</strong> May 13 at 11:59pm</span> | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdAssignment className="me-3 fs-3 text-success" />
                            <div className="me-4 flex-grow-1">
                                <a className="wd-assignment-link text-dark text-decoration-none"
                                    href="#/Kanbas/Courses/1234/Assignments/456">
                                    <strong>A2</strong>
                                </a>
                                <div>
                                    <span className="text-danger">Multiple Modules</span> | <span className="text-bold"><strong>Not available until</strong> May 13 at 12:00am | </span>
                                </div>
                                <div>
                                    <span className="text-bold"><strong>Due</strong> May 20 at 11:59pm</span> | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdAssignment className="me-3 fs-3 text-success" />
                            <div className="me-4 flex-grow-1">
                                <a className="wd-assignment-link text-dark text-decoration-none"
                                    href="#/Kanbas/Courses/1234/Assignments/789">
                                    <strong>A3</strong>
                                </a>
                                <div>
                                    <span className="text-danger">Multiple Modules</span> | <span className="text-bold"><strong>Not available until</strong> May 20 at 12:00am | </span>
                                </div>
                                <div>
                                    <span className="text-bold"><strong>Due</strong> May 27 at 11:59pm</span> | 100 pts
                                </div>
                            </div>
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    );
}
