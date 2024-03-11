import { useRef } from "react"
import AddButton from "./AddButton"
import Input from "./Input"

const UserInput = () => {
  const inputRef = useRef(null);

  return (
    <div className="flex">
      <Input ref={inputRef} />
      <AddButton />
    </div>
  )
}

export default UserInput
