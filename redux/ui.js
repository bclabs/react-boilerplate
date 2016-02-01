const DROPDOWN_OPEN = 'DROPDOWN_OPEN'
const DROPDOWN_OPEN_DONE = 'DROPDOWN_OPEN_DONE'
const DROPDOWN_CLOSE = 'DROPDOWN_CLOSE'
const DROPDOWN_CLOSE_DONE = 'DROPDOWN_CLOSE_DONE'

const initialState = {
    dropdowns: {}
}

export function openDropdown(id) {
    return (dispatch, getState) => {
        dispatch({
            type: DROPDOWN_OPEN,
            id
        })
        dispatch({
            type: DROPDOWN_OPEN_DONE,
            id,
            meta: { delay: 10 }
        })
    }
}

export function closeDropdown(id) {
    return (dispatch, getState) => {
        dispatch({
            type: DROPDOWN_CLOSE,
            id
        })
        dispatch({
            type: DROPDOWN_CLOSE_DONE,
            id,
            meta: { delay: 150 }
        })
    }
}

function dropdowns(state, action) {
    switch (action.type) {
        case DROPDOWN_OPEN:
            return {
                ...state,
                [action.id]: 'opening'
            }
        case DROPDOWN_OPEN_DONE:
            return {
                ...state,
                [action.id]: 'open'
            }
        case DROPDOWN_CLOSE:
            return {
                ...state,
                [action.id]: 'closing'
            }
        case DROPDOWN_CLOSE_DONE:
            return {
                ...state,
                [action.id]: 'closed'
            }
        default:
            return state
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case DROPDOWN_OPEN:
        case DROPDOWN_OPEN_DONE:
        case DROPDOWN_CLOSE:
        case DROPDOWN_CLOSE_DONE:
            return {
                ...state,
                dropdowns: dropdowns(state.dropdowns, action)
            }
        default:
            return state
    }
}
