import { useDispatch } from "react-redux"
import { checkIsDone } from "../../../redux/todoList";

const CheckButton = ({ id, isDone }) => {
  const dispatch = useDispatch();

  function handleChecked(id) {
    dispatch(checkIsDone(id));
  }
  return (
    <div className="flex align mr-2 justify-center ">
      <input
        type="checkbox"
        checked={isDone}
        className="w-5 h-5 justify-center mt-[0.6rem] "
        onChange={() => handleChecked(id)}
      />
    </div>
  )
}

export default CheckButton
