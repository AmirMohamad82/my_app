import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk(
  "task/fetchTasks",
  async ({ error }) => {
    try {
      const response = await axios.get("http://localhost:4000/todos", {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (e) {
      error(e.response.data);
    }
  }
);

export const AddTask = createAsyncThunk("task/addTask", async (task) => {
  const userId = Number(window.localStorage.getItem("id"));
  const owner = userId;
  const newTask = { userId, owner, ...task };
  await axios.post(
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
        Authorization: window.localStorage.getItem("token"),
      },
    }
  );
});

export const DeleteTask = createAsyncThunk("task/deleteTask", async (id) => {
  const response = await axios.delete(
    `http://localhost:4000/todos/${id}`,
    {
      headers: {
        Authorization: window.localStorage.getItem("token"),
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
        Authorization: window.localStorage.getItem("token"),
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
    filter: 0,
  },

  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },

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
        state.loading = false;
      })
      .addCase(AddTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddTask.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(DeleteTask.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteTask.fulfilled, (state, action) => {
        state.loading = false;
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
      });
  },
});

export const OpenTasks = (state) =>
  state.task.tasks?.filter((task) => !task.done);

export const ClosedTasks = (state) =>
  state.task.tasks?.filter((task) => task.done);

export const selectOpenTasks = (state) =>
  state.task.tasks?.filter((task) => !task.done)?.length;

export const selectClosedTasks = (state) =>
  state.task.tasks?.filter((task) => task.done)?.length;

export const selectTotalTasks = (state) => state.task.tasks?.length;

export const { filter } = TaskSlice.actions;
export default TaskSlice.reducer;
