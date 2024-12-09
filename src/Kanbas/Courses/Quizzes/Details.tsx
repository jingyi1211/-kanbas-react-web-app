import { FaPencil } from "react-icons/fa6";

export default function QuizDetails() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1">
                    Preview</button>
                <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1">
                    <FaPencil />
                    Edit</button>
            </div>
            <hr />

            <div className="container mt-4">
                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Quiz Type</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Points</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Assignment Group</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Shuffle Answers</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Time Limit</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Multiple Attempts</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>View Responses</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Show Correct Answers</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>One Question at a Time</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Require Respondus LockDown Browser</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Required to View Quiz Results</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Webcam Required</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4 text-sm-end">
                        <h4>Lock Questions After Answering</h4>
                    </div>
                    <div className="col-5">

                    </div>
                </div>
                <hr />

                <div id="wd-people-table">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Due</th>
                                <th>For</th>
                                <th>Available from</th>
                                <th>Until</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}