// src/app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import enrollmentReducer from "./Courses/Enrollments/reducer";

const rootReducer = combineReducers({
    enrollments: enrollmentReducer,
});

export default rootReducer;
