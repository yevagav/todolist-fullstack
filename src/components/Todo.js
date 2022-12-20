import { useState } from 'react'

export default function Todo({ todo, completeTodo, deleteTodo, setNewTodo, newTodo, handleChange }) {
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
                        }}
                    />
                </label>
                <br /><button onClick={() => deleteTodo(todo._id)}>Delete Todo</button>
            </li>
        </>
    )
}