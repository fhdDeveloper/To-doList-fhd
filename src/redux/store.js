import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './addTodos/todoSlice'

export const store = configureStore({
  reducer: {todoSlice},
})