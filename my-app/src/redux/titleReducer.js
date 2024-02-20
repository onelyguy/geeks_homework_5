import { types } from "./types"

const initialState = {
    users: []
}

export default function titleReducer(state = initialState, action) {
    switch (action.type) {
        case types.USER:
            return { ...state, users: [...state.users, action.payload] }
        default: return state
    }
}