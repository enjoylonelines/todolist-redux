import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./todoList";


const store = configureStore({
  reducer: todoListReducer,
});

export default store;