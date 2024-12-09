import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function QuizEditor() {
    return (
        <div className="container mt-4">
            <div className="row mb-3">
                <div className="col-12">
                    <input type="text" className="form-control" placeholder="Enter assignment name" value="Unnamed Quiz" />
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
                    <h4>Quiz Type</h4>
                </div>
                <div className="col-5">
                    <select className="form-control form-select">
                        <option selected> Graded Quiz</option>
                        <option value="Practice Quiz"> Practice Quiz</option>
                        <option value="Graded Survey"> Graded Survey</option>
                        <option value="Ungraded Survey"> Ungraded Survey</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Points</h4>
                </div>
                <div className="col-5">
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-4 text-sm-end">
                    <h4>Assignment Group</h4>
                </div>
                <div className="col-5">
                    <select className="form-control form-select">
                        <option selected>QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="QUIZZES">ASSIGNMENTS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3 ">
                <div className="col-4 text-sm-end">
                    <h4></h4>
                </div>
                <div className="col-8 align-items-start flex-column">
                    <label className="form-label mt-3"><strong>Options</strong></label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-text-entry" defaultChecked />
                        <label className="form-check-label mb-2" >
                            Shuffle Answers
                        </label>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="form-check col-4">
                            <input className="form-check-input" type="checkbox" id="wd-website-url" />
                            <label className="form-check-label mb-2">
                                Time Limit
                            </label>
                        </div>
                        <div className="form-check col-3 me-1">
                            <input type="text" className="form-control" defaultValue={20} />
                        </div>
                        <div className="col-3">
                            <span>Minutes</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="form-check col-7">
                            <input className="form-check-input" type="checkbox" id="wd-website-url" />
                            <label className="form-check-label mb-2">
                                Allow Multiple Attempts
                            </label>
                        </div>
                        <div className="form-check col-3 me-1">
                            <input type="text" className="form-control" defaultValue={1} />
                        </div>
                        <div className="col-3">
                            <span>Times</span>
                        </div>
                    </div>
                    {/* <div className="card">
                        <div className="card-body">
                            <input className="form-check-input" type="checkbox" id="wd-student-annotation" />
                            <label className="form-check-label mb-2">
                                Allow Multiple Attempts
                            </label>
                        </div>
                    </div> */}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-text-entry" defaultChecked />
                        <label className="form-check-label mb-2" >
                            Show Correct Answers
                        </label>
                        <select className="form-control form-select">
                            <option selected>Immediately</option>
                            <option value="EXAMS">After 1 hour</option>
                            <option value="QUIZZES">After 1 day</option>
                            <option value="PROJECT">After 2 days</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <span>Access Code</span>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-text-entry" defaultChecked />
                        <label className="form-check-label mb-2" >
                            One Question at a Time
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                        <label className="form-check-label mb-2" >
                            Webcam Required
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                        <label className="form-check-label mb-2" >
                            Lock Questions After Answering
                        </label>
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
                    <Link to={`/Kanbas/Courses/1234/QuizDetails`} className="btn btn-danger float-end">Save</Link>
                    <button className="btn btn-secondary float-end me-1">Cancel</button>
                </div>
            </div>
        </div>
    );
}