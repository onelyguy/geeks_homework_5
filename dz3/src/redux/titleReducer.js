import { types } from "./types"

const initialState = {
    users: []
}

export default function titleReducer(state = initialState, action) {
    if (action.type === types.USER) {
        return { ...state, users: action.payload }
    }

    return state
}