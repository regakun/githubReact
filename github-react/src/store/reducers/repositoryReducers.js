
const initialState = {
    repositories: [],
}

function reducer(state = initialState, action) {
    const { type, payload } = action

    if (type === 'repositories/set') {
        return { ...state, repositories: payload }
    }
    return state
}

export default reducer