import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "Gym Workout", completed: false },
    { id: 2, title: "Shopping", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      if (state.length < 8) {
        state.push(newTodo);
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    handleToggle: (state, action) => {
      const chekedIndex = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state[chekedIndex].completed = !action.payload.completed;
    },
  },
});

export const { addTodo, removeTodo, handleToggle } = todoSlice.actions;
export default todoSlice.reducer;
