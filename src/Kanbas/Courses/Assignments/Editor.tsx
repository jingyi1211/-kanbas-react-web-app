import { FaRegCalendarAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";
export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments;
    return (
        <div className="container mt-4">
            <div className="row mb-3">
                {assignments
                    .filter((assignment: any) => assignment._id === aid)
                    .map((assignment: any) => (
                        <div className="col-12">
                            <h4>Assignment Name</h4>
                            <input type="text" className="form-control" placeholder="Enter assignment name" value={assignment.title} />
                        </div>
                    ))
                }
            </div>

            <div className="mb-3">
                {assignments
                    .filter((assignment: any) => assignment._id === aid)
                    .map((assignment: any) => (
                        <div className="form-control" id="assignmentDescription">
                            {assignment.description}
                        </div>
                    ))
                }
            </div>


            <div className="row mb-3">

                <div className="col-4 text-sm-end">
                    <h4>Points</h4>
                </div>
                {assignments
                    .filter((assignment: any) => assignment._id === aid)
                    .map((assignment: any) => (
                        <div className="col-8">
                            <input type="text" className="form-control" value={assignment.points} />
                        </div>
                    ))
                }
            </div>


            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Assignment Group</h4>
                </div>
                <div className="col-8">
                    <select className="form-control form-select">
                        <option selected>ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Display Grade as</h4>
                </div>
                <div className="col-8">
                    <select className="form-control form-select">
                        <option selected>Percentage</option>
                        <option value="DECIMAL">Decimal</option>
                        <option value="LETTER">Letter</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Submission Type</h4>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-body">
                            <select className="form-control form-select">
                                <option selected>Online</option>
                                <option value="on_paper">On Paper</option>
                                <option value="external_tool">External Tool</option>
                                <option value="no_submission">No Submission</option>
                            </select>

                            <label className="form-label mt-3"><strong>Online Entry Options</strong></label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                                <label className="form-check-label mb-2" >
                                    Text Entry
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-website-url" />
                                <label className="form-check-label mb-2">
                                    Website URL
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                                <label className="form-check-label mb-2" >
                                    Media Recordings
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                                <label className="form-check-label mb-2">
                                    Student Annotation
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                                <label className="form-check-label" >
                                    File Uploads
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Assign</h4>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card-body">
                            <label className="form-label mb-0"><strong>Assign to</strong></label>
                            <input type="text" className="form-control" value="Everyone" />
                            <label className="form-label mb-0 mt-3"><strong>Due</strong></label>
                            {assignments
                                .filter((assignment: any) => assignment._id === aid)
                                .map((assignment: any) => (
                                    <div className="input-group mb-3">
                                        <input type="datetime-local" className="form-control" value={assignment.dueDate} />
                                        <span className="input-group-text" id="basic-addon2"><FaRegCalendarAlt /></span>
                                    </div>
                                ))
                            }
                            <div className="row">
                                <div className="col">
                                    <label className="form-label mb-0 mt-3"><strong>Available from</strong></label>
                                    {assignments
                                        .filter((assignment: any) => assignment._id === aid)
                                        .map((assignment: any) => (
                                            <div className="input-group mb-3">
                                                <input type="datetime-local" className="form-control" value={assignment.availableFrom} />
                                                <span className="input-group-text" id="basic-addon2"><FaRegCalendarAlt /></span>
                                            </div>
                                        ))
                                    }

                                </div>
                                <div className="col">
                                    <label className="form-label mb-0 mt-3"><strong>Until</strong></label>
                                    {assignments
                                        .filter((assignment: any) => assignment._id === aid)
                                        .map((assignment: any) => (
                                            <div className="input-group mb-3">
                                                <input type="datetime-local" className="form-control" value={assignment.until} />
                                                <span className="input-group-text" id="basic-addon2"><FaRegCalendarAlt /></span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 text-center">
                    <Link to={`/Kanbas/Courses/${cid}/assignments`} className="btn btn-danger float-end">Save</Link>
                    <Link to={`/Kanbas/Courses/${cid}/assignments`} className="btn btn-secondary float-end me-1">Cancel</Link>
                </div>
            </div>
        </div>


    );
}
