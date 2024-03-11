const Input = ({ inputValue, setInputValue }) => {
  return (
    <input
      className="text-2xl mr-2 p-2 w-80 rounded-l-xl"
      placeholder="Please enter your todo list."
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}

export default Input;
