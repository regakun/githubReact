
const initialState = {
    repositories: [],
}

function reducer(state = initialState, action) {
    const { type, payload } = action

    if (type === 'repositories/set') {
        return { ...state, accounts: payload }
    }
    return state
}

export default reducer