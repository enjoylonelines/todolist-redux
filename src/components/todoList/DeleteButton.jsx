import { useDispatch, useSelector } from "react-redux"
import { todoListActions } from "../../store/todoList";

const DeleteButton = ({id}) => {
  const dispatch = useDispatch();
  const todosActions = todoListActions;
  const todos = useSelector(state => state.todoList);

  
  function delTodoHandler() {
    dispatch(todosActions.delTodo(id));
  }
  
  return (
    <button
      className="bg-red-700 my-4 px-4 rounded-r-xl hover:bg-red-500 hover:text-slate-700"
      onClick={delTodoHandler}
    >
      Del
    </button>
  )
}

export default DeleteButton
