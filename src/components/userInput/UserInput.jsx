import { useState } from "react";
import AddButton from "./AddButton"
import Input from "./Input"

const UserInput = () => {
  const [inputValue, setInputValue] = useState(null);

  return (
    <div className="flex">
      <Input setInputValue={setInputValue} />
      <AddButton inputValue={inputValue} />
    </div>
  )
}

export default UserInput
