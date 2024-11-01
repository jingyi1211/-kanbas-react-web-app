import { useState, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignment = useSelector((state: any) =>
        state.assignmentsReducer.assignments.find((a: any) => a._id === aid)
    );

    const [formState, setFormState] = useState({
        title: "New Assignment",
        description: "New Assignment Description",
        points: 0,
        dueDate: "",
        availableFrom: "",
        until: "",
    });

    useEffect(() => {
        if (assignment && aid !== "new") {
            setFormState({
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                dueDate: assignment.dueDate,
                availableFrom: assignment.availableFrom,
                until: assignment.until,
            });
        }
    }, [assignment, aid]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        if (aid === "new") {
            dispatch(addAssignment({ ...formState, course: cid }));
        } else {
            dispatch(updateAssignment({ ...formState, _id: aid, course: cid }));
        }
        navigate(`/Kanbas/Courses/${cid}/assignments`);
    };

    return (
        <div className="container mt-4">
            <div className="row mb-3">
                <div className="col-12">
                    <h4>Assignment Name</h4>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={formState.title}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="mb-3">
                <h4>Description</h4>
                <textarea
                    className="form-control"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                />
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Points</h4>
                </div>
                <div className="col-8">
                    <input
                        type="number"
                        className="form-control"
                        name="points"
                        value={formState.points}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Due Date</h4>
                </div>
                <div className="col-8">
                    <input
                        type="datetime-local"
                        className="form-control"
                        name="dueDate"
                        value={formState.dueDate}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Available From</h4>
                </div>
                <div className="col-8">
                    <input
                        type="datetime-local"
                        className="form-control"
                        name="availableFrom"
                        value={formState.availableFrom}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Available Until</h4>
                </div>
                <div className="col-8">
                    <input
                        type="datetime-local"
                        className="form-control"
                        name="until"
                        value={formState.until}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <hr />
            <div className="row">
                <div className="col-12 text-center">
                    <button onClick={handleSave} className="btn btn-danger float-end">Save</button>
                    <button
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/assignments`)}
                        className="btn btn-secondary float-end me-1"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}




