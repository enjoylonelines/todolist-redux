const TodoText = ({ todo, isEdit, editValue, setEditValue }) => {
  const commonStyle = "text-2xl bg-stone-400 rounded-l-xl p-1 w-[27rem]";
  
  return (
    <>
      {!isEdit &&
        <p className={commonStyle}>
          {todo}
        </p>
      }
      {isEdit &&
        <input 
          className={commonStyle + ` bg-stone-600 text-center`}
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
