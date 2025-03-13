import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './CreateTodo'
import { Todos } from './Todos'

function App() {
  const [count, setCount] = useState(0)

  const[todos, setTodos] = useState([]);


  async function GetTodos(){

    const todos = await fetch("http://localhost:3000/todos");
    const json = await todos.json();
    
    setTodos(json.allTodos);
  }

  useEffect( ()=>{
    GetTodos();
  },[]);
  
  return (
    <div>
      <CreateTodo GetTodos = {GetTodos}></CreateTodo>
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
