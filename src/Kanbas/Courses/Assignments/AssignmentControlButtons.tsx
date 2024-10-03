import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <button className="btn btn-light rounded-pill me-2">40% of Total</button>
            <BsPlusLg />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
