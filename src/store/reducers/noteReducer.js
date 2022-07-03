
const INITIAL_STATE = {
    notes: [],
    filterBy: null
}

export function noteReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_NOTES':
            return {
                ...state,
                notes: action.notes
            }

        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.note]
            }

        case 'REMOVE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== action.noteId)
            }

        case 'UPDATE_NOTE':
            return {
                ...state,
                notes: state.notes.map(note => note._id === action.note._id ? action.note : note)
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state;
    }
}