
export let validateInput = async () => {
    let nameOfSong = document.getElementById('name-of-song').value
    let authorOfSong = document.getElementById('author-of-song').value

    if (nameOfSong !== '' && authorOfSong !== '') {
        return true
    }
    return false
}

