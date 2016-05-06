const SET_PROPERTY = 'SET_PROPERTY'

const initialState = {}

const setProperty = (property, value) => ({
    type: SET_PROPERTY,
    property,
    value
})

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROPERTY:
            return {
                ...state,
                [action.property]: action.value
            }
        default:
            return state
    }
}
