import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = { id: crypto.randomUUID(), todo: action.payload };
      state.push(newTodo); //내부 Immer가 불변성 관리
    },
    delTodo(state, action) {
      const id = action.payload;
      return state.filter(todo => todo.id !== id) //새로운 상태를 반환할때는 return? 
    },
    aditTodo(state, action) {
      const { id, aditTodo } = action.payload;
      return state.with(id, { id: id, todo: aditTodo });
    },
  }
});

export const todoListReducer = todoListSlice.reducer;
export const todoListActions = todoListSlice.actions;
