import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";

export default function CourseAccessRoute({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courseId } = useParams(); // Extract courseId from the route parameters

    const isEnrolled = courseId && currentUser.enrollments && currentUser.enrollments.some((enrollment: any) => enrollment.course === courseId);

    if (currentUser && isEnrolled) {
        return children;
    } else {
        return <Navigate to="/Kanbas/Dashboard" />;
    }
}
