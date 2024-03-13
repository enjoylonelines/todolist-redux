import { useDispatch } from "react-redux";
import { todoListActions } from "../redux/todoList"
import TodoList from "./todoList/TodoList"
import UserInput from "./userInput/UserInput"
import SaveButton from "./header/SaveButton";
import ResetButton from "./header/ResetButton";

const MainContainer = () => {
  const todosAction = todoListActions;
  const dispatch = useDispatch();
  
  function handleSave() {
    dispatch(todosAction.saveTodo());
  }
  function handleReset() {
    dispatch(todosAction.resetTodo());
  }

  return (
    <div className='m-0 flex-col place-items-center px-20 py-10 bg-blue-950 rounded-xl relative'>
      <div>
        <h1 className="text-4xl mb-8">My Todo App</h1>
        <SaveButton handleSave={handleSave} />
        <ResetButton handleReset={handleReset} />
      </div>
      <UserInput />
      <TodoList />
    </div>
  )
}

export default MainContainer
