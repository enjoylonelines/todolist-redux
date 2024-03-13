import React from 'react'

const SaveButton = ({ handleSave }) => {
  return (
    <button
      className="bg-green-800 rounded-md px-3 py-1 absolute right-[7rem] top-[2rem] w-[4rem] hover:bg-green-600"
      onClick={handleSave}
    >
      save
    </button>
  )
}

export default SaveButton
