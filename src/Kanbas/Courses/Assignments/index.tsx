import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControl";
import { MdAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GoTriangleDown } from "react-icons/go";
import { useParams } from "react-router";
import * as db from "../../Database";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, deleteAssignment, setAssignments, updateAssignment } from "./reducer";
import { FaTrash } from "react-icons/fa";
import DeleteAssignmentDialog from "./DeleteAssignmentDialog";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

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
    const [assignmentName, setAssignmentName] = useState("");
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
    const [showDialog, setShowDialog] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState(null);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const handleDeleteClick = (assignmentId: any) => {
        setAssignmentToDelete(assignmentId);
        setShowDialog(true);
    };
    const confirmDelete = async () => {
        if (assignmentToDelete) {
            removeAssignment(assignmentToDelete);
            setShowDialog(false);
            setAssignmentToDelete(null);
        }
    };
    const cancelDelete = () => {
        setShowDialog(false);
        setAssignmentToDelete(null);
    };

    const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

    const createAssignmentForCourse = async () => {
        if (!cid) return;
        const newAssignment = { title: assignmentName, course: cid };
        const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
        dispatch(addAssignment(assignment));
    };

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);


    return (
        <div>
            <AssignmentsControls setAssignmentName={setAssignmentName}
                assignmentName={assignmentName}
                addAssignment={createAssignmentForCourse} /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-1 fs-3" />
                        <GoTriangleDown className="me-1" />
                        <strong>ASSIGNMENTS</strong>
                        {currentUser.role === "FACULTY" && (
                            <AssignmentControlButtons />
                        )}
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        {assignments.map((assignment: any) => (
                            <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                <MdAssignment className="me-3 fs-3 text-success" />
                                <div className="me-4 flex-grow-1">
                                    {currentUser.role === "FACULTY" ? (
                                        <a className="wd-assignment-link text-dark text-decoration-none"
                                            href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                            <strong>{assignment.title}</strong>
                                        </a>
                                    ) : (<strong>{assignment.title}</strong>)}
                                    <div>
                                        <span className="text-danger">Multiple Modules</span> | <span className="text-bold"><strong>Not available until </strong>{formatDate(assignment.availableFrom)} |</span>
                                    </div>
                                    <div>
                                        <span className="text-bold"><strong>Due </strong>{formatDate(assignment.dueDate)}</span> | {assignment.points} pts
                                    </div>
                                </div>

                                {currentUser.role === "FACULTY" && (
                                    <button
                                        type="button"
                                        className="btn btn-link text-danger"
                                        onClick={() => handleDeleteClick(assignment._id)}
                                    >
                                        <FaTrash />
                                    </button>)}
                                {currentUser.role === "FACULTY" && (
                                    <LessonControlButtons />
                                )}
                            </li>
                        ))
                        }
                    </ul>
                </li>
            </ul >
            <DeleteAssignmentDialog
                dialogTitle="Delete Assignment"
                confirmDelete={confirmDelete}
                cancelDelete={cancelDelete}
                show={showDialog}
            />
        </div >
    );
}

