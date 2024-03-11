import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector(state => state.todoList);

  return (
    <ul className="flex-col">
      {todoList.length > 0 && todoList.map((todoItem) => <TodoItem key={todoItem.id} todoItem={todoItem} />)}
    </ul>
  )
}

export default TodoList
