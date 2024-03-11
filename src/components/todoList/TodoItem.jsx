import { useState } from "react";
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
import TodoText from "./TodoText"

const TodoItem = ({ todoItem }) => {
  const { id, todo, isEdit } = todoItem;
  console.log(id)
  const [editValue, setEditValue] = useState('');

  return (
    <li className="flex py-4">
      <TodoText
        todo={todo}
        isEdit={isEdit}
        editValue={editValue}
        setEditValue={setEditValue}
      />
      <EditButton
        todo={todo}
        id={id}
        isEdit={isEdit}
        editValue={editValue}
        setEditValue={setEditValue}
      />
      <DeleteButton id={id} />
    </li>
  )
}

export default TodoItem
