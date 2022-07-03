import React, {useEffect, useState} from 'react'
// import { todoService } from '../services/todo-service'
import {TodoList} from '../components/TodoList'

export const TodoApp = () => {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    // const todos = await todoService.query()
    // setTodos(todos)
  }

  const onDelete = async (todoId) => {
    // await todoService.removeTodo(todoId)
    // loadTodos()
  }

  if (!todos) return <div>Loading...</div>
  return (
    <div className="todo-app">
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  )
}
