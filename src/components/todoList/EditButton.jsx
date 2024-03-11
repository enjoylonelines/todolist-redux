import { useDispatch } from "react-redux";
import { todoListActions } from "../../redux/todoList"

const EditButton = ({ todo, id, isEdit, editValue }) => {
  const todosActions = todoListActions;
  const dispatch = useDispatch();

  function editSetter(id) {
    dispatch(todosActions.setEdit(id));
  }

  function updateTodo(id, editValue) {
    if(editValue) dispatch(todosActions.updateTodo([id, editValue]));
    else dispatch(todosActions.updateTodo([id, todo]))
  }

  return (
    <button
      className=" bg-blue-700 hover:bg-blue-500 hover:text-slate-700 w-10 p-1"
      onClick={() => {isEdit ? updateTodo(id, editValue) : editSetter(id) }}
    >{isEdit? <p>Save</p> : <p>Edit</p> }</button>
  )
}

export default EditButton
