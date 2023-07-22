import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },
  reducers:{
    change: (state) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value,
        });
      }
  }
});
