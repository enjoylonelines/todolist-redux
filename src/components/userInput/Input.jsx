import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      className="text-2xl mr-2 p-2 w-80 rounded-l-xl"
      placeholder="Please enter your todo list."
      ref={ref}
      type="text"
    />
  )
})

export default Input;
