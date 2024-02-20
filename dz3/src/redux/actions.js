import { types } from "./types"

function getUser(users) {
    return {
        type: types.USER,
        payload: users
    }
}

export function fetchUserAction() {
    return async function (dispatch) {
        const response = await fetch('https://reqres.in/api/users')
        const {data} = await response.json()
        dispatch(getUser(data))
    }
}