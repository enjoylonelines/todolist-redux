import { createSlice } from "@reduxjs/toolkit";


const initialState = localStorage.getItem('todoList') ?
  JSON.parse(localStorage.getItem('todoList')) : [];

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload); //내부 Immer가 불변성 관리
    },
    delTodo(state, action) {
      const id = action.payload;
      return state.filter(todo => todo.id !== id) //새로운 상태를 반환할때는 return? 
    },
    setEdit(state, action) {
      const id = action.payload;
      return state.map(todo => {
        if (todo.id === id) return { ...todo, isEdit: true };
        else return todo; // else면 원래 요소를 반환해야함..
      })
    },
    updateTodo(state, action) {
      const [id, editTodo] = action.payload;
      const idx = state.findIndex(todo => todo.id === id);
      const todo = state.find(todo => todo.id === id);
      return state.with(idx, { ...todo, todo: editTodo, isEdit: false });
    },
    checkIsDone(state, action) {
      const id = action.payload;
      return state.map(todo => {
        if (todo.id === id) return { ...todo, isDone: !todo.isDone };
        else return todo;
      })
    },
    saveTodo(state) {
      localStorage.setItem('todoList', JSON.stringify(state));
    },
    resetTodo(state) {
      localStorage.clear();
      state = [];
      return state;
    },
  }
});

export const todoListReducer = todoListSlice.reducer;
export const { 
  addTodo,
  delTodo,
  setEdit,
  updateTodo,
  checkIsDone,
  saveTodo,
  resetTodo } = todoListSlice.actions;
