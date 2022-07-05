import React, {useEffect} from 'react'
import {todoService} from '../services/todo-service'
import {useForm} from '../hooks/useForm.js'
import {useNavigate, useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {getTodoById, saveTodo} from '../store/actions/todoActions'

export const TodoEdit = () => {
  const [todo, handleChange, setTodo] = useForm(null)
  const dispatch = useDispatch()

  let navigate = useNavigate()
  let params = useParams()

  useEffect(() => {
    loadTodo()
  }, [])

  const loadTodo = async () => {
    const todo = params.id
      ? await dispatch(getTodoById(params.id))
      : todoService.getEmptyTodo()
    console.log('todo', todo)
    setTodo(todo)
  }

  const onSaveTodo = async (ev) => {
    ev.preventDefault()
    await dispatch(saveTodo(todo))
    navigate('/')
  }

  const goBack = (ev) => {
    ev.preventDefault()
    navigate('/')
  }

  if (!todo) return <div>Loading...</div>

  return (
    <section className="todo-edit">
      <h1>{todo._id ? 'Edit' : 'Add'} Todo</h1>
      <form onSubmit={onSaveTodo} className="form">
        <div className="form-control">
          <label htmlFor="txt" className="form-label">
            TEXT
          </label>
          <input
            onChange={handleChange}
            value={todo.txt}
            className="form-input"
            type="text"
            name="txt"
            id="txt"
          />
        </div>
        <div className="form-control">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            onChange={handleChange}
            value={todo.description}
            className="form-input"
            type="text"
            name="description"
            id="description"
          />
        </div>
        <div className="form-control">
          <label htmlFor="importance" className="form-label">
            IMPORTANCE
          </label>
          <input
            max="5"
            min="0"
            name="importance"
            id="importance"
            onChange={handleChange}
            value={todo.importance}
            className="form-input"
            type="number"
          />
        </div>
        <div className="form-control">
          <label htmlFor="status" className="form-label">
            status
          </label>
          <select
            name="status"
            id="status"
            onChange={handleChange}
            value={todo.status}
            className="form-input"
          >
            <option value="open">open</option>
            <option value="in progress">in progress</option>
            <option value="done">done</option>
          </select>
        </div>
        <div className="form-control flex flex-col items-start">
          <label htmlFor="isDone" className="form-label">
            IS DONE
          </label>
          <input
            name="isDone"
            id="isDone"
            onChange={handleChange}
            checked={todo.isDone}
            className="form-input"
            type="checkbox"
          />
        </div>

        <div className="btn-group">
          <button type="submit" className="btn btn-success">
            save
          </button>
          <button onClick={(ev) => goBack(ev)} className="btn btn-danger-text">
            cancel
          </button>
        </div>
      </form>
    </section>
  )
}
