import { noteService } from "../../services/note.service"

export function loadNotes() {
    return async (dispatch, getState) => {
        try {
            const { filterBy } = getState().noteModule
            const notes = await noteService.query(filterBy)
            dispatch({ type: 'SET_NOTES', notes })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeNote(noteId) {
    return async (dispatch) => {
        try {
            await noteService.remove(noteId)
            dispatch({ type: 'REMOVE_NOTE', noteId })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function saveNote(note) {
    return async (dispatch) => {
        try {
            await noteService.save(note)
            if (note._id) {
                dispatch({ type: 'UPDATE_NOTE', note })
            } else {
                dispatch({ type: 'ADD_NOTE', note })
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

export function getNoteById(noteId) {
    return async () => {
        return await noteService.getById(noteId)
    }
}