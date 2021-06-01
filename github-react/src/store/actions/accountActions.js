import { loadingStart, loadingDone } from './loadingActions'
import { useDispatch } from 'react-redux'
// const dispatch = useDispatch()

export function setAccount(payload) {
    return {
        type: 'accounts/set',
        payload
    }
}
export function selectAccount(payload) {
    return {
        type: 'account/select',
        payload
    }
}

export function setAccountAsync(username) {
    return (dispatch) => {
        dispatch(loadingStart())
        fetch(`https://api.github.com/search/users?q=${username}`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(setAccount(data.items))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
          dispatch(loadingDone())
      })
    }
}
