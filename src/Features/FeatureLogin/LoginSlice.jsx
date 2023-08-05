import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (state) => {
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: state.email,
        password: state.password,
      });
      localStorage.setItem("token", `Bearer ${response.data?.accessToken}`);
      localStorage.setItem("id", response.data.user?.id);
      localStorage.setItem("email", response.data.user?.email);
      state.success();
      return;
    } catch (error) {
      state.fail(error.response.data);
      return error;
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    handleChange: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },

});

export const { handleChange } = loginSlice.actions;
export default loginSlice.reducer;
