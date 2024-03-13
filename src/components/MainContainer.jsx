import { useDispatch } from "react-redux";
import { todoListActions } from "../redux/todoList"
import TodoList from "./todoList/TodoList"
import UserInput from "./userInput/UserInput"

const MainContainer = () => {
  const todosAction = todoListActions;
  const dispatch = useDispatch();
  function handleSave() {
    dispatch(todosAction.saveTodo());
  }
  
  return (
    <div className='m-0 flex-col place-items-center px-20 py-10 bg-blue-950 rounded-xl'>
      <div className=" ">
        <h1 className="text-4xl mb-8">My Todo App</h1>
        <button
          className="bg-green-800 rounded-md px-3 py-1 absolute right-[10rem] top-[8rem] "
          onClick={handleSave}
        >
          save
        </button>
      </div>
      <UserInput />
      <TodoList />
    </div>
  )
}

export default MainContainer
