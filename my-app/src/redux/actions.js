import { types } from "./types"

export function asyncFunctionAction() {
    return function (dispatch) {
        setTimeout(() => {
            alert('Hello!')
        }, 2000)
    }
}

function getUser(users) {
    return {
        type: types.USER,
        payload: users
    }
}

export function fetchUserAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUser(data))
    }
}