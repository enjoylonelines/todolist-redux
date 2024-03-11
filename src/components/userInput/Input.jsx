const Input = ({ inputValue, setInputValue }) => {
  return (
    <input
      className="text-2xl w-80 rounded-l-xl p-2"
      placeholder="Please enter your todo list."
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}

export default Input;
