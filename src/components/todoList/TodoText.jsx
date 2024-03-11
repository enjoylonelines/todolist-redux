const TodoText = ({ id, todo }) => {
  return (
    <p className="p-1 text-2xl mx-2 my-4 w-80 bg-stone-400 rounded-l-xl">
      {todo}
    </p>
  )
}

export default TodoText
