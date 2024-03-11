import DeleteButton from "./DeleteButton"
import TodoText from "./TodoText"

const TodoItem = ({ id, todo }) => {
  return (
    <li id={id} className="flex">
      <TodoText todo={todo} />
      <DeleteButton id={id} />
    </li>
  )
}

export default TodoItem
