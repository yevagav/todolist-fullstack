import { useState, useEffect } from 'react';
import TodoList from "../../components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [foundTodo, setFoundTodo] = useState(null)
  const [newTodo, setNewTodo] = useState({
    title: ' ',
    completed: false
  })

  const createTodo = async () => {
    try{
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'appplication/json'
        },
        body: JSON.stringify({...newTodo })
      })
      const data = await response.json()
      setFoundTodo(data)
      setNewTodo({
        title: '',
        completed: false
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <main className='App'>
     <h1>To do list</h1>
    </main>
  )

}

export default App;