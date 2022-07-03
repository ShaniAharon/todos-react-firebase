import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { todoService } from '../services/todo-service'

export const TodoDetails = () => {
  const [todo, setTodo] = useState(null)
  let navigate = useNavigate()
  let params = useParams()

  useEffect(() => {
    loadTodo()
  }, [])

  const loadTodo = async () => {
    const todo = await todoService.getTodoById(params.id)
    setTodo(todo)
  }

  if (!todo) return <div>Loading...</div>

  return (
    <section className="flex flex-col gap-2">
      <h1>Todo Details</h1>
      <p>
        <span className="fw-bold clr-teal uppercase">id: </span>
        {todo._id}
      </p>
      <p>
        <span className="fw-bold clr-teal uppercase">txt: </span>
        {todo.txt}
      </p>
      <p>
        <span className="fw-bold clr-teal uppercase">Description: </span>
        {todo.description}
      </p>
      <p>
        <span className="fw-bold clr-teal uppercase">importance: </span>
        {todo.importance}
      </p>
      <p>
        <span className="fw-bold clr-teal uppercase">Status: </span>
        {todo.status}
      </p>
      <p>
        <span className="fw-bold clr-teal uppercase">is done: </span>
        {todo.isDone ? 'true' : 'false'}
      </p>
      <button onClick={() => navigate('/')} className="btn btn-warning">
        go back
      </button>
    </section>
  )
}
