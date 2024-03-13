import { useState } from "react";
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
import TodoText from "./TodoText"
import CheckButton from "./CheckButton";

const TodoItem = ({ todoItem }) => {
  const { id, todo, isEdit, isDone } = todoItem;
  const [editValue, setEditValue] = useState('');

  return (
    <li className="flex py-4 justify-center ">
      <CheckButton id={id} isDone={isDone} />
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
