import { useState } from "react";
import AddButton from "./AddButton"
import Input from "./Input"

const UserInput = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex">
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <AddButton inputValue={inputValue} setInputValue={setInputValue}/>
    </div>
  )
}

export default UserInput
