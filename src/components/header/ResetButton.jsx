import React from 'react'

const ResetButton = ({ handleReset }) => {
  return (
    <button
    className="bg-red-800 rounded-md px-3 py-1 absolute right-[2rem] top-[2rem] hover:bg-red-600"
    onClick={handleReset}
  >
    reset
  </button>
  )
}

export default ResetButton
