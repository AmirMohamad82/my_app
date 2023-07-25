import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async (state) => {
    const response = await axios.post("http://localhost:4000/login", {
      email: state.email,
      password: state.password,
    });
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
    success: false,
  },

  reducers: {
    handleChange: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.accessToken);
        localStorage.setItem("id", action.payload.user.id);
        localStorage.setItem("email", action.payload.user.email);
        state.success = true
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        alert(action);
      });
  },
});

export const { handleChange } = loginSlice.actions;
export default loginSlice.reducer;
