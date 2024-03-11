import TodoList from "../components/todoList/TodoList"
import UserInput from "../components/userInput/UserInput"

const MainPage = () => {
  return (
    <div className='m-0 flex-col place-items-center px-20 py-10 bg-blue-950 rounded-xl'>
      <h1 className="text-4xl mb-8">My Todo List App</h1>
      <UserInput />
      <TodoList />
    </div>
  )
}

export default MainPage
