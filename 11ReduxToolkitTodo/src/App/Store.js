import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer // Assuming 'todo' is the name of your slice
  }
});
