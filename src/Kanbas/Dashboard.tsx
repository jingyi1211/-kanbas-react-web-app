import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { useSelector } from "react-redux";
export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrollments, setEnrollments] = useState(db.enrollments);
    const [showAllCourses, setShowAllCourses] = useState(false);

    useEffect(() => {
        // This effect is used to sync local state with the db mock, if external changes occur.
        setEnrollments(db.enrollments);
    }, [db.enrollments]);
    const toggleEnrollmentsView = () => {
        setShowAllCourses(!showAllCourses);
    };

    const isEnrolled = (courseId: any) => {
        return enrollments.some(enrollment => enrollment.user === currentUser._id && enrollment.course === courseId);
    };
    const handleEnroll = (event: any, courseId: any) => {
        event.preventDefault();
        event.stopPropagation();
        if (!isEnrolled(courseId)) {
            const newEnrollment = {
                _id: new Date().getTime().toString(), // Unique ID based on the current timestamp
                user: currentUser._id,
                course: courseId
            };
            db.enrollments.push(newEnrollment);
            setEnrollments([...db.enrollments]);
        }
    };

    const handleUnenroll = (event: any, courseId: any) => {
        event.preventDefault();
        event.stopPropagation();
        const index = db.enrollments.findIndex(enrollment => enrollment.user === currentUser._id && enrollment.course === courseId);
        if (index > -1) {
            db.enrollments.splice(index, 1);
            setEnrollments([...db.enrollments]);
        }
    };


    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {currentUser.role === "STUDENT" && (
                <button className="btn btn-primary float-end" onClick={toggleEnrollmentsView}>
                    {showAllCourses ? "Show Enrolled Only" : "Show All Courses"}
                </button>
            )}
            {currentUser.role === "FACULTY" && (
                <h5>New Course
                    <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse} > Add </button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>
            )}
            <br />
            {currentUser.role === "FACULTY" && (
                <input value={course.name} className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            )}
            {currentUser.role === "FACULTY" && (
                <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            )}
            <hr />

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.filter(course => showAllCourses || isEnrolled(course._id
                    ))
                        .map((course) => (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <img src={course.path} width="100%" height={160} />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name} </h5>
                                            <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                                {course.description} </p>
                                            {currentUser.role === "STUDENT" && (isEnrolled(course._id) ? (
                                                <button className="btn btn-danger m-2" onClick={(e) => handleUnenroll(e, course._id)}>Unenroll</button>
                                            ) : (
                                                <button className="btn btn-success m-2" onClick={(e) => handleEnroll(e, course._id)}>Enroll</button>
                                            ))}
                                            <button className="btn btn-primary"> Go </button>

                                            {currentUser.role === "FACULTY" && (
                                                <>
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                        Delete
                                                    </button>
                                                    <button id="wd-edit-course-click"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setCourse(course);
                                                        }}
                                                        className="btn btn-warning me-2 float-end" >
                                                        Edit
                                                    </button>
                                                </>
                                            )}
                                        </div>

                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}















