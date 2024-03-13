import { useSelector } from "react-redux"
import TodoItem from "./todoItem/TodoItem";

const TodoList = () => {
  const todoList = useSelector(state => state?.todoList);
  const doneList = todoList?.filter(todo => todo.isDone === true);
  const notDoneList = todoList?.filter(todo => todo.isDone === false);
  
  return (
    <section>
      <div>
        <h2 className="text-2xl text-start ">📌To do</h2>
        <ul className="flex-col">
          {notDoneList.length > 0 && notDoneList.map(todo => <TodoItem key={todo.id} todoItem={todo} />)}
        </ul>
      </div>
      <hr className="my-2"/>
      <div>
        <h2 className="text-2xl text-start ">🔥Done</h2>
        <ul className="flex-col">
        {doneList.length > 0 && doneList.map(todo => <TodoItem key={todo.id} todoItem={todo} />)}
        </ul>
      </div>
    </section>
  )
}

export default TodoList
