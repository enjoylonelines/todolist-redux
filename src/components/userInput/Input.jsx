const Input = ({ setInputValue }) => {
  return (
    <input
      className="text-2xl mr-2 p-2 w-80 rounded-l-xl"
      placeholder="Please enter your todo list."
      type="text"
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}

export default Input;
