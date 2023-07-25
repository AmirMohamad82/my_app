import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("task/fetchTasks", async () => {
  const response = await axios.get("http://localhost:4000/todos", {
    headers: {
      Authorization: "Bearer " + window.localStorage.getItem("token"),
    },
  });
  return response.data;
});

export const TaskSlice = createSlice({
  name: "task",
  initialState: {
    loading: false,
    tasks: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        alert(action);
      });
  },
});

export default TaskSlice.reducer;
