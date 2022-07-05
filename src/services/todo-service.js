import { firebaseService } from './firebase-service.js'

export const todoService = {
  query,
  getById: getTodoById,
  save: saveTodo,
  remove: removeTodo,
  getEmptyTodo,
}

const collection = 'todo'

async function query() {
  return firebaseService.query(collection)
}

async function getTodoById(todoId) {
  return firebaseService.getEntityById(collection, todoId)
}

async function saveTodo(todo) {
  return firebaseService.saveEntity(collection, todo)
}

async function removeTodo(todoId) {
  return firebaseService.removeEntity(collection, todoId)
}

function getEmptyTodo() {
  return {
    txt: '',
    importance: 0,
    isDone: false,
  }
}
