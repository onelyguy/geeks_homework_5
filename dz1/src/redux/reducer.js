const initialState = {
    number: 0
}

export default function reducer(state = initialState, action) {
    if (action.type === 'PLUS') {
        return { ...state, number: state.number + 1 }
    }
    else if (action.type === 'MINUS' && state.number > 0) {
        return { ...state, number: state.number - 1 }
    }
    else if (action.type === 'PLUS_TEN') {
        return { ...state, number: state.number + 10 }
    }
    else if (action.type === 'CLEAN') {
        return { ...state, number: 0 }
    }

    return state
}