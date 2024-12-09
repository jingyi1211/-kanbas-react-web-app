import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as db from "./Database";
import { enrollCourse, unenrollCourse } from './Courses/Enrollments/reducer';
import { fetchAllCourses } from "./Courses/client";
import { RootState } from './store';
// import * as enrollmentsClient from "./Courses/Enrollments/client";
export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrolling,
    setEnrolling,
    updateEnrollment
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void
}) {
    const dispatch = useDispatch();
    const [showAllCourses, setShowAllCourses] = useState(false);
    const enrollments = useSelector((state: RootState) => state.enrollmentReducer.enrollments);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const { currentUser } = useSelector((state: RootState) => state.accountReducer);

    const toggleEnrollmentsView = () => {
        setShowAllCourses(!showAllCourses);
    };

    const isEnrolled = (courseId: any) => {
        return enrollments.some(enrollment => enrollment.user === currentUser._id && enrollment.course === courseId);
    };

    const handleEnroll = async (event: any, courseId: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(enrollCourse({ userId: currentUser._id, courseId }));

    };

    const handleUnenroll = async (event: any, courseId: any) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(unenrollCourse({ userId: currentUser._id, courseId }));

    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            </h1> <hr />
            <h5>
                New Course
                <button
                    className="btn btn-primary float-end me-2"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse}
                >
                    Add
                </button>
                <button
                    className="btn btn-warning float-end me-2"
                    onClick={updateCourse}
                    id="wd-update-course-click"
                >
                    Update
                </button>
            </h5>
            <br />
            <input
                value={course.name}
                className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <textarea
                value={course.description}
                className="form-control"
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
            />
            <hr />
            <hr />
            <h2 id="wd-dashboard-published">
                Published Courses ({courses.length})
            </h2>{" "}
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card">
                                <Link
                                    to={`/Kanbas/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <img src="/images/reactjs.jpg" width="100%" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title">
                                            {enrolling && (
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    updateEnrollment(course._id, !course.enrolled);
                                                }}
                                                    className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                                                    {course.enrolled ? "Unenroll" : "Enroll"}
                                                </button>
                                            )}
                                            {course.name}
                                        </h5>
                                        <p
                                            className="card-text overflow-y-hidden"
                                            style={{ maxHeight: 100 }}
                                        >
                                            {course.description}
                                        </p>

                                        <button className="btn btn-primary"> Go </button>
                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                            className="btn btn-danger"
                                            id="wd-delete-course-click"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            id="wd-edit-course-click"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-warning"
                                        >
                                            Edit
                                        </button>
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




