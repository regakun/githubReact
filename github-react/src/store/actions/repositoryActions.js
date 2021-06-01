import { loadingStart, loadingDone } from './loadingActions'

export function setRepositories(payload) {
    return {
        type: 'repositories/set',
        payload
    }
}

export function setRepositoriesAsync(username) {
    return (dispatch) => {
        dispatch(loadingStart())
        fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(setRepositories(data.results))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(_ => {
          dispatch(loadingDone())
      })
    }
}
