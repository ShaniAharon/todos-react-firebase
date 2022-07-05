import { todoService } from "../../services/todo-service.js"


export function loadTodos() {
    return async (dispatch, getState) => {
        try {
            // const { filterBy } = getState().todoModule
            const todos = await todoService.query()
            dispatch({ type: 'SET_TODOS', todos })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeTodo(todoId) {
    return async (dispatch) => {
        try {
            await todoService.remove(todoId)
            dispatch({ type: 'REMOVE_TODO', todoId })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function saveTodo(todo) {
    return async (dispatch) => {
        try {
            await todoService.save(todo)
            if (todo._id) {
                dispatch({ type: 'UPDATE_TODO', todo })
            } else {
                dispatch({ type: 'ADD_TODO', todo })
            }
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy })
    }
}

export function getTodoById(todoId) {
    return async () => {
        return await todoService.getById(todoId)
    }
}