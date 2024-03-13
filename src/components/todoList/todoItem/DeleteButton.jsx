import { useDispatch } from "react-redux"
import { delTodo } from "../../../redux/todoList";

const DeleteButton = ({id}) => {
  const dispatch = useDispatch();
  
  function delTodoHandler() {
    dispatch(delTodo(id));
  }

  return (
    <button
      className="bg-red-700 rounded-r-xl hover:bg-red-500 hover:text-slate-700 p-1 w-[2.5rem]"
      onClick={delTodoHandler}
    >
      Del
    </button>
  )
}

export default DeleteButton
