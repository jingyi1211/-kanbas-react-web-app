import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import AssignmentEditor from "./Editor";
export default function AssignmentsControls({ assignmentName, setAssignmentName, addAssignment }:
    { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }) {
    const { cid } = useParams();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div id="wd-assignments-controls" className="text-nowrap d-flex">

            <div className="input-group input-group-lg float-start">
                <span className="input-group-text"><HiMagnifyingGlass className="position-relative" style={{ bottom: "1px" }} /></span>
                <input id="wd-text-fields-search" className="me-1" placeholder="Search..." type="text" />
            </div>
            {currentUser.role === "FACULTY" && (
                <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
                    }}>
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment</button>
            )}
            {currentUser.role === "FACULTY" && (
                <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group</button>
            )}
        </div>
    );
}
