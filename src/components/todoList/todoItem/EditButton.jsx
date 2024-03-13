import { useDispatch } from "react-redux";
import { setEdit, updateTodo } from "../../../redux/todoList"

const EditButton = ({ todo, id, isEdit, editValue }) => {
  const dispatch = useDispatch();

  function editSetter(id) {
    dispatch(setEdit(id));
  }

  function updateEditTodo(id, editValue) {
    if(editValue) dispatch(updateTodo([id, editValue]));
    else dispatch(updateTodo([id, todo]))
  }

  return (
    <button
      className=" bg-blue-700 hover:bg-blue-500 hover:text-slate-700 p-1 w-[2.5rem]"
      onClick={() => {isEdit ? updateEditTodo(id, editValue) : editSetter(id) }}
    >{isEdit? <p>Save</p> : <p>Edit</p> }</button>
  )
}

export default EditButton
