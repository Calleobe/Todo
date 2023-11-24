import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    { id: 1, text: "Watch video on actions & reducers", complete: true },
    { id: 2, text: "Follow redux codealong", complete: true },
    { id: 3, text: "Fork weekly assignment", complete: false },
    { id: 4, text: "Create a todo app", complete: false },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.complete = !task.complete;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
