import { useState } from 'react'
import './App.css'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([])

  const [search, setSearch] = useState("");

  const[filter, setFilter] = useState("All");
  const[sort, setSort] = useState("Asc");

  const addTodo = (title, description) => {
    const newTodos = [...todos,{
      id: Math.floor(Math.random()*1000),
      title,
      description,
      isCompleted:false,
      isEditingTitle: false,
      isEditingDescription: false,
    },
  ];
  setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo:null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id ===id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }
    
  const editTitle = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id ===id ? todo.isEditingTitle = !todo.isEditingTitle : todo);
    setTodos(newTodos);
  }

  const changeTitle = (id,title) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id ===id ? todo.title = title : todo);
    setTodos(newTodos);
  }

  const editDescription = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id ===id ? todo.isEditingDescription = !todo.isEditingDescription : todo);
    setTodos(newTodos);
  }

  const changeDescription = (id,description) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id ===id ? todo.description = description : todo);
    setTodos(newTodos);
  }

  return <div className='app'>
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className='todo-list'>
      {todos.filter((todo) => filter ==="All" ? true : filter === "Complete" ? todo.isCompleted : !todo.isCompleted).filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase())).sort((a,b) => sort === "Asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)).map((todo) => (
        <Todo todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo} editTitle={editTitle} changeTitle={changeTitle} editDescription={editDescription} changeDescription={changeDescription}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>;
}

export default App
