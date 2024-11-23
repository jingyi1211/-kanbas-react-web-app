import { createSlice } from '@reduxjs/toolkit';

import { enrollments } from "../../Database";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: 'enrollments',
    initialState,
    reducers: {
        enrollCourse: (state, action) => {
            console.log('Enrolling course:', action.payload);
            const { userId, courseId } = action.payload;
            const existingIndex = state.enrollments.findIndex(enrollment =>
                enrollment.user === userId && enrollment.course === courseId);

            if (existingIndex === -1) {
                state.enrollments.push({
                    _id: new Date().getTime().toString(),
                    user: userId,
                    course: courseId
                });
            }
        },
        unenrollCourse: (state, action) => {
            console.log('Unenrolling course:', action.payload);
            const { userId, courseId } = action.payload;
            state.enrollments = state.enrollments.filter(enrollment =>
                !(enrollment.user === userId && enrollment.course === courseId));
        },
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;

