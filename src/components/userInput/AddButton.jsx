import { useDispatch } from "react-redux";
import { todoListActions } from "../../store/todoList";

const AddButton = ({ inputValue, setInputValue }) => {
  const dispatch = useDispatch();
  const todosActions = todoListActions;
  
  function addTodoHandler() {
    dispatch(todosActions.addTodo(inputValue));
    setInputValue('');
  }

  return (
    <button
      className="text-xl bg-green-800 px-4 py-2 rounded-r-xl hover:bg-green-600 hover:text-slate-800"
      onClick={addTodoHandler}
    >
      Add
    </button>
  )
}

export default AddButton
