import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = { id: crypto.randomUUID(), todo: action.payload, isEdit: false };
      state.push(newTodo); //내부 Immer가 불변성 관리
    },
    delTodo(state, action) {
      const id = action.payload;
      return state.filter(todo => todo.id !== id) //새로운 상태를 반환할때는 return? 
    },
    setEdit(state, action) {
      const id = action.payload;
      return state.map(item => {
        if (item.id === id) return { id: item.id, todo: item.todo, isEdit: true };
      })
    },
    updateTodo(state, action) {
      const [id, editTodo] = action.payload;
      console.log(id)
      const idx = state.findIndex(todo => todo.id === id);
      return state.with(idx, { id: id, todo: editTodo, isEdit: false });
    },
  }
});

export const todoListReducer = todoListSlice.reducer;
export const todoListActions = todoListSlice.actions;
