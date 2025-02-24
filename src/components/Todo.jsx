const Todo = ({todo,removeTodo, completeTodo, editTitle, changeTitle, editDescription ,changeDescription}) => {
  return (
    <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <div className='content'>
            <p style={{ fontWeight: 'bold', justifyContent: 'space-between', display:"flex"}}>{todo.isEditingTitle ? <input type="text" placeholder="Insert new title" onChange={(e) => changeTitle(todo.id, e.target.value)}/> : todo.title} ({todo.isCompleted ? "Concluída":"Pendente"}) <button className='modify' onClick={() => editTitle(todo.id)}>Editar</button></p>
            <p className='description' style={{ justifyContent: 'space-between', display:"flex"}}>{todo.isEditingDescription ? <input type="text" placeholder="Insert new description" onChange={(e) => changeDescription(todo.id, e.target.value)}/> : todo.description} <button className='modify' onClick={() => editDescription(todo.id)}>Editar</button></p>
            <div>
              <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
              <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
    </div>
  )
}

export default Todo
