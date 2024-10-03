import { FaRegCalendarAlt } from "react-icons/fa";
export default function AssignmentEditor() {
    return (
        <div className="container mt-4">

            <div className="row mb-3">
                <div className="col-12">
                    <h4>Assignment Name</h4>
                    <input type="text" className="form-control" placeholder="Enter assignment name" value="A1" />
                </div>
            </div>

            <div className="mb-3">
                <textarea className="form-control" id="assignmentDescription" rows={4} >
                    The assignment is available online

                    Submit a link to the landing page of your Web application running on Netlify.

                    The landing page should include the following:
                    - Your full name and section
                    - Links to each of the lab assignments
                    - Link to the Kanbas application
                    - Links to all relevant source code repositories

                    The Kanbas application should include a link to navigate back to the landing page.</textarea>
            </div>


            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Points</h4>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control" value="100" />
                </div>
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
                            <div className="input-group mb-3">
                                <input type="datetime-local" className="form-control" />
                                <span className="input-group-text" id="basic-addon2"><FaRegCalendarAlt /></span>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label mb-0 mt-3"><strong>Available from</strong></label>
                                    <div className="input-group mb-3">
                                        <input type="datetime-local" className="form-control" />
                                        <span className="input-group-text" id="basic-addon2"><FaRegCalendarAlt /></span>
                                    </div>

                                </div>
                                <div className="col">
                                    <label className="form-label mb-0 mt-3"><strong>Until</strong></label>
                                    <div className="input-group mb-3">
                                        <input type="datetime-local" className="form-control" />
                                        <span className="input-group-text" id="basic-addon2"><FaRegCalendarAlt /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-danger float-end">Save</button>
                    <button className="btn btn-secondary float-end me-1">Cancel</button>
                </div>
            </div>
        </div>


    );
}
