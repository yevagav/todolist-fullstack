import { useState, useEffect } from 'react';
import TodoList from "../../components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  const [foundTodo, setFoundTodo] = useState(null)
  const [newTodo, setNewTodo] = useState({
    title: ' ',
    completed: false
  })
  const [completedTodo, setcompletedTodo] = useState([])

  //create 
  const createTodo = async () => {
    try{
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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

  //index
  const getTodos = async () => {
    try{
      const response = await fetch('/api/todos')
      const data = await response.json()
      setTodos(data)
    } catch (error) {
      console.error(error)
    }
  }

  //delete 
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setFoundTodo(data)
    } catch (error) {
      console.error(error)
    }
  }


const completeTodo = (id, e) => {
  const copyTodos = [...todos]
  const indexofTodo = copyTodos.findIndex((i) => i.id ===id)
  copyTodos[indexofTodo].completed = !copyTodos[indexofTodo].completed
  setTodos(copyTodos)
}

  const handleChange = (evt) => {
    setNewTodo({...newTodo, [evt.target.name] : evt.target.value})
  }

  useEffect(() => {
    getTodos()
  }, [foundTodo])

  return (
    <main className='App'>
     <h1>To do list</h1>
     <TodoList 
     todos={todos}
     createTodo={createTodo}
     getTodo={getTodos}
     completeTodo={completeTodo}
     deleteTodo={deleteTodo}
     handleChange={handleChange}
     newTodo={newTodo}
     setNewTodo={setNewTodo}/>
    </main>
  )

}

export default App;