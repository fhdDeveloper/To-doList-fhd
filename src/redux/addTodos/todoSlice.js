import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      state.todos = action.payload;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    completeTodoAction: (state, action) => {
      state.todos = action.payload;
    },
    
    updateTodoAction: (state, action) => {
      state.todos = action.payload;
    }
  },
});

export const {
  addTodo,
  deleteTodo,
  completeTodoAction,
  updateTodoAction
} = todoSlice.actions;

export default todoSlice.reducer;
