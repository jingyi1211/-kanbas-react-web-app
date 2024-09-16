export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of your Web application
                running on Netlify. The landing page should include the following: Your full name and section
                Link to the Kanbas application Links to all relevant source code repositories The Kanbas
                application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="PROJECT">PROJECT</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="DECIMAL">Decimal</option>
                            <option value="LETTER">Letter</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">Online</option>
                            <option value="INPERSON">In Person</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label></label>
                    </td>
                    <td>
                        <label>Online Entry Options:</label><br />

                        <input type="checkbox" name="radio-entry" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />

                        <input type="checkbox" name="radio-entry" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />

                        <input type="checkbox" name="radio-entry" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                        <input type="checkbox" name="radio-entry" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="radio-entry" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign to</label><br />
                        <input id="wd-assign-to" value={"Everyone"} />
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <label htmlFor="wd-due-date"> Due </label><br />
                        <input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br />
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <label htmlFor="wd-available-from"> Available from </label><br />
                        <input type="date"
                            id="wd-available-from"
                            value="2024-05-16" /><br />
                    </td>
                    <td>
                        <label htmlFor="wd-available-until"> Until </label><br />
                        <input type="date"
                            id="wd-available-until"
                            value="2024-05-20" /><br />
                    </td>
                </tr>
                <tr>
                    <td><hr /></td>
                    <td><hr /></td>
                    <td><hr /></td>

                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                        <button>Cancel</button>
                        <button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}
