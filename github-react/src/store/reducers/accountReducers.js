
const initialState = {
    accounts: [],
    selectedAccount: ''
}

function reducer(state = initialState, action) {
    const { type, payload } = action

    if (type === 'accounts/set') {
        return { ...state, accounts: payload }
    }
    else if (type === 'account/select') {
        return { ...state, selectedAccount: payload }
    }
    return state
}

export default reducer