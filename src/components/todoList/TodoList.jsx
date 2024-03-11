import { useSelector } from "react-redux"
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector(state => state.todoList);
  console.log(todoList)
  return (
    <ul className="flex-col">
      {todoList && todoList.map(todo => <TodoItem key={todo.id} todo={todo.todo} />)}
    </ul>
  )
}

export default TodoList
