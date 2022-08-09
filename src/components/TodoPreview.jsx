import React from 'react'
import {useNavigate} from 'react-router-dom'

export const TodoPreview = ({todo, onDelete}) => {
  let navigate = useNavigate()

  return (
    <article className="todo flex flex-col gap-1 p-3">
      <h3 className="todo__txt clr-teal uppercase">{todo.txt}</h3>
      <p>
        <span className="fw-bold">Created At: </span>
        {/* {todo.createdAt?.toLocaleTimeString()} */}
      </p>
      <div className="btn-group actions">
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/` + todo._id)}
        >
          details
        </button>
        <button
          className="btn btn-info"
          onClick={() => navigate(`/edit/` + todo._id)}
        >
          edit
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(todo._id)}>
          delete
        </button>
      </div>
    </article>
  )
}
