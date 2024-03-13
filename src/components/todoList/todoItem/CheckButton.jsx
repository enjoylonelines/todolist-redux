import { useDispatch } from "react-redux"
import { todoListActions } from "../../../redux/todoList";

const CheckButton = ({ id }) => {
  const dispatch = useDispatch();
  const todosAction = todoListActions;

  function handleChecked(id) {
    dispatch(todosAction.checkIsDone(id));
  }
  return (
    <div className="flex align mr-2 justify-center ">
      <input
        type="checkbox"
        className="w-5 h-5 justify-center mt-[0.6rem] "
        onChange={() => handleChecked(id)}
      />
    </div>
  )
}

export default CheckButton
