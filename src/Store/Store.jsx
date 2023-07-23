import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Features/FeatureLogin/LoginSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
