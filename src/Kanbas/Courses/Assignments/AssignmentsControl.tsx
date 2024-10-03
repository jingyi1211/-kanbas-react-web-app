import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function AssignmentsControls() {
    return (
        <div id="wd-assignments-controls" className="text-nowrap d-flex">
            <div className="input-group input-group-lg float-start">
                <span className="input-group-text"><HiMagnifyingGlass className="position-relative" style={{ bottom: "1px" }} /></span>
                <input id="wd-text-fields-search" className="me-1" placeholder="Search..." type="text" />
            </div>
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>
            <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>
        </div>
    );
}
