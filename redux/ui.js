const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

const initialState = {
    dialogs: {}
}

export function toggleDialog(id) {
    return {
        type: TOGGLE_DIALOG,
        id
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DIALOG:
            return {
                ...state,
                dialogs: {
                    ...state.dialogs,
                    [action.id]: !state.dialogs[action.id]
                }
            }
        default:
            return state
    }
}
