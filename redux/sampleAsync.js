import { CALL_API } from '../store/api'

const REPOS_REQUEST = 'REPOS_REQUEST'
const REPOS_SUCCESS = 'REPOS_SUCCESS'
const REPOS_FAILURE = 'REPOS_FAILURE'

const initialState = {}

export function fetchRepos(username) {
    return {
        username,
        [CALL_API]: {
            endpoint: `https://api.github.com/users/${username}/repos`,
            types: [REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAILURE]
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REPOS_SUCCESS:
            return {
                ...state,
                [action.username]: action.response
            }
        default:
            return state
    }
}
