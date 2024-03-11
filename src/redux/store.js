import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./todoList";


const store = configureStore({
  reducer: {
    todoList: todoListReducer,
  }
});

export default store;