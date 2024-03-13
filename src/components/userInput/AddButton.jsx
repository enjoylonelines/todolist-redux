import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoList";

const AddButton = ({ inputValue, setInputValue }) => {
  const dispatch = useDispatch();
  
  function addTodoHandler() {
    if(inputValue) {
      const newTodo = {
        id: crypto.randomUUID(),
        todo: inputValue,
        isEdit: false,
        isDone: false,
      };
      dispatch(addTodo(newTodo));
    } 
    setInputValue('');
  }

  return (
    <button
      className="p-2 text-xl bg-green-800 rounded-r-xl hover:bg-green-600 hover:text-slate-800"
      onClick={addTodoHandler}
    >
      Add
    </button>
  )
}

export default AddButton
