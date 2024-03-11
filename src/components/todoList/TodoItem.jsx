import DeleteButton from "./DeleteButton"
import TodoText from "./TodoText"

const TodoItem = ({ key, todo }) => {
  return (
    <li key={key} className="flex">
      <TodoText todo={todo} />
      <DeleteButton />
    </li>
  )
}

export default TodoItem
