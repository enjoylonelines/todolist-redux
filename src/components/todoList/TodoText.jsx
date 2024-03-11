const TodoText = ({ todo, isEdit, editValue, setEditValue }) => {
  const commonStyle = "text-2xl w-80 bg-stone-400 rounded-l-xl p-1";
  
  return (
    <>
      {!isEdit &&
        <p className={commonStyle}>
          {todo}
        </p>
      }
      {isEdit &&
        <input 
          className={commonStyle}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)} 
          placeholder={todo}
        />    
      }
    </>
  )
}

export default TodoText
