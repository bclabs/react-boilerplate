import fetch from 'isomorphic-fetch'
import { apiUrl } from 'config'
import merge from 'deepmerge'

function callApi(endpoint, options) {
    const fullUrl = endpoint.startsWith('http') ? endpoint : apiUrl + endpoint

    return fetch(fullUrl, options)
        .then(response =>
            response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json.error)
            }

            return json
        })
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { endpoint, options = {}, onSuccess, onError } = callAPI
    const authToken = (store.getState().user || {}).authToken
    const { types } = callAPI

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    function actionWith(data) {
        const finalAction = { ...action, ...data }
        delete finalAction[CALL_API]
        return finalAction
    }

    const [ requestType, successType, failureType ] = types
    next(actionWith({ type: requestType }))

    let headers = { 'Content-Type': 'application/json' }

    const defaultOptions = {
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        headers: authToken ? {
            ...headers,
            'Authorization': authToken
        } : headers
    }

    const requestOptions = merge(defaultOptions, options)

    return callApi(endpoint, requestOptions).then(
        response => {
            function callNextAction() {
                next(actionWith({
                    response,
                    type: successType
                }))
            }

            if (onSuccess) {
                onSuccess(callNextAction, store, response)
            }
            else {
                callNextAction()
            }
        },
        error => {
            function callErrorAction() {
                next(actionWith({
                    type: failureType,
                    error
                }))
            }

            if (onError) {
                onError(callErrorAction, store, error)
            }
            else {
                callErrorAction()
            }
        }
    )
}
