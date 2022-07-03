import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TodoPreview } from './TodoPreview'

export const TodoList = ({ todos, onDelete }) => {
  let navigate = useNavigate()

  return (
    <section className="todo-list flex flex-col items-start gap-1">
      <button onClick={() => navigate('/edit')} className="btn btn-secondary">
        add new todo
      </button>
      <main className="flex items-start gap-2">
        {todos.map((todo) => (
          <TodoPreview key={todo._id} todo={todo} onDelete={onDelete} />
        ))}
      </main>
    </section>
  )
}
