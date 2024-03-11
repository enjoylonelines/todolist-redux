
const AddButton = () => {
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
