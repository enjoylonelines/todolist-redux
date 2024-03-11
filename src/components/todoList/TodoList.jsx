import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector(state => state.todoList);

  return (
    <ul className="flex-col">
      {todoList.length > 0 && todoList.map((todo, idx) => <TodoItem key={idx} todo={todo.todo} />)}
    </ul>
  )
}

export default TodoList
