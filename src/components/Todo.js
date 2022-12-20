import { useState } from 'react'

export default function Todo({ todo, completeTodo, deleteTodo, setNewTodo, newTodo, handleChange }) {
    const [showDelete, setShowDelete] = useState(false)
    return (
        <>
            <li>
                <p>{todo.title}</p>
                <label className='"middle'>
                    Complete
                    <input
                        type='checkbox'
                        checked={todo.completed}
                        onChange={(e) => {
                            completeTodo(todo.id, e)
                            setShowDelete(true)
                        }}
                    />
                </label>
                <br /><button 
                style={{ display: showDelete ? "block" : "none" }}
                onClick={() => deleteTodo(todo._id)}>Delete Todo</button>
            </li>
        </>
    )
}