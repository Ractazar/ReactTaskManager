import {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!title || !description) return;
        addTodo(title,description);
        setTitle("");
        setDescription("");
    }

  return <div className='todo-form'>
    <h2>Criar Tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite o título' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder='Digite a descrição' value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button type='submit'>Criar Tarefa</button>
    </form>
  </div>;
}

export default TodoForm
