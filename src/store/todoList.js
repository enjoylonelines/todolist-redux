import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {id: crypto.randomUUID(), todo: action.payload }; 
      state.push(newTodo);
    },
    delTodo(state, action) {
      const id = action.payload;
      state.map(todo => todo.id !== id)
    },
    aditTodo(state, action) {
      const {id, aditTodo} = action.payload;
      state.with(id, {id: id, todo: aditTodo});
    },
  }
});

export const todoListReducer = todoListSlice.reducer;
export const todoListActions = todoListSlice.actions;
