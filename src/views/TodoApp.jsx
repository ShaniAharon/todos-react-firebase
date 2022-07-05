import React, {useEffect} from 'react'
import {TodoList} from '../components/TodoList'
import {useDispatch, useSelector} from 'react-redux'
import {loadTodos, removeTodo} from '../store/actions/todoActions'

export const TodoApp = () => {
  // const [todos, setTodos] = useState(null)
  const {todos} = useSelector((state) => state.todoModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
    // eslint-disable-next-line
  }, [])

  // const loadTodos = async () => {
  //   const todos = await todoService.query()
  //   setTodos(todos)
  // }

  const onDelete = async (todoId) => {
    dispatch(removeTodo(todoId))
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
