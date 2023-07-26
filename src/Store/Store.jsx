import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Features/FeatureLogin/LoginSlice";
import taskReducer from "../Features/FeatureTask/TaskSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    task: taskReducer,
  },
});
