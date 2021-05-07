export let handleError = (promise) => {
    promise.catch(err => {
        alert(err)
    })
}