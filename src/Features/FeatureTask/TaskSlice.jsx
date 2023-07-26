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

export const AddTask = createAsyncThunk("task/addTask", async (task) => {
  const userId = Number(window.localStorage.getItem("id"));
  const owner = userId;
  const newTask = { userId, owner, ...task };
  const response = await axios.post(
    "http://localhost:4000/todos",
    {
      userId: newTask.userId,
      owner: newTask.owner,
      title: newTask.title,
      description: newTask.description,
      date: newTask.unixTime,
      done: newTask.done,
    },
    {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    }
  );
  return response.data;
});

export const DeleteTask = createAsyncThunk("task/deleteTask", async (task) => {
  const response = await axios.delete(
    `http://localhost:4000/todos/${task.id}`,
    {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    }
  );
  return response.data;
});

export const updateTask = createAsyncThunk("task/updateTask", async (task) => {
  const response = await axios.patch(
    `http://localhost:4000/todos/${task.id}`,
    {
      done: task.done,
    },
    {
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    }
  );
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
      })
      .addCase(AddTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddTask.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(AddTask.rejected, (state, action) => {
        alert(action);
      })
      .addCase(DeleteTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteTask.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(DeleteTask.rejected, (state, action) => {
        alert(action);
      })
      .addCase(updateTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateTask.rejected, (state, action) => {
        alert(action);
      });
  },
});

export default TaskSlice.reducer;
