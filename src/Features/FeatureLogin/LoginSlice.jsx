import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginSlice = createSlice({
  name: "login",
  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    post: (state) => {
      axios
        .post("http://localhost:4000/login", {
          email: state.email,
          password: state.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("id", res.data.user.id);
          localStorage.setItem("email", res.data.user.email);
        })
        .catch((error) => {
          alert(error.response.data);
        });
    },
    handleChange: (state, action) => {
      state[action.payload.name] = action.payload.value;
      console.log(state);
    },
  },
});

export const { post, handleChange } = LoginSlice.actions;
export default LoginSlice.reducer;
