import Todo from './Todo';

export default function TodoList({
    todos, createTodo, completeTodo, deleteTodo, setNewTodo, newTodo, handleChange
}) {
    return (
        <>
            <h1> Create Todo</h1>
            <input
                value={newTodo.title}
                onChange={handleChange}
                onKeyDown={(e) => {
                   if (e.key === "Enter") {
                        createTodo()
                }}} name="title"
            />
        {todos.length
        ? (
          <>
            <h1>Todo Items</h1>
            <ul className='todolist'>
              {todos.filter((i) => !i.completed).map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    setNewTodo={setNewTodo}
                    newTodo={newTodo}
                    handleChange={handleChange}
                  />
                )
              })}
            </ul>
            <h1>Completed Items</h1>
            <ul className='todolist'>
              {todos.filter((i) => i.completed).map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    setNewTodo={setNewTodo}
                    newTodo={newTodo}
                    handleChange={handleChange}
                  />
                )
              })}
            </ul>
          </>
          )
        : (
          <h1>No Todos Added Here</h1>
          )}
    </>
  )
}
