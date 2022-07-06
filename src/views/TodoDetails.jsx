import React, {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getTodoById} from '../store/actions/todoActions'

export const TodoDetails = () => {
  const [todo, setTodo] = useState(null)
  const dispatch = useDispatch()
  let navigate = useNavigate()
  let params = useParams()

  useEffect(() => {
    loadTodo()
    // eslint-disable-next-line
  }, [])

  const loadTodo = async () => {
    const todo = await dispatch(getTodoById(params.id)) // await todoService.getTodoById(params.id)
    console.log('todo', todo)
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
