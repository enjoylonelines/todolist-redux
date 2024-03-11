import { useDispatch } from "react-redux"
import { todoListActions } from "../../redux/todoList";

const DeleteButton = ({id}) => {
  const dispatch = useDispatch();
  const todosActions = todoListActions;
  
  function delTodoHandler() {
    dispatch(todosActions.delTodo(id));
  }

  return (
    <button
      className="bg-red-700 rounded-r-xl hover:bg-red-500 hover:text-slate-700 w-10 p-1"
      onClick={delTodoHandler}
    >
      Del
    </button>
  )
}

export default DeleteButton
