import { handleError } from './errorHandler.js'

import { validateInput } from './validateInput.js'




let addSongBtn = document.getElementById('add-song-btn')
let result = document.getElementById('results__here')
let clearListBtn = document.getElementById('clear-list')


class SongItem {
    constructor(name, author) {
        this.name = name
        this.author = author
    }
    //name and author
    combine() {
        const nameAuthor = {
            name: this.name,
            author: this.author
        }
        return nameAuthor
    }
}


class SongList {
    constructor(element) {
        this.listElement = element
        this.songAssembly = []
    }
    
    static createSongItem(song) {
        const li = document.createElement('li')
        li.textContent = song
        return li
    }

    update() {
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild)
        }

        for (let song of this.songAssembly) {
            this.listElement.appendChild(SongList.createSongItem(`${song.name} ${song.author}`))
        }
    }

    addSong(song) {
        this.songAssembly.push(song)
        this.update()
    }

    clearList() {
        this.songAssembly = []
        this.update()
    }

}

let songList = new SongList(result)


let addSong = async () => {
    await canProceed()
    
}



let createNewSong = ((name, author) => {
    let song = new SongItem(name, author).combine()
    return song
})

//global environment {
//functions: addSong, createNewSong, listHasItems, clearList, handleError, validateInput,
//vars: songList,addSongBtn, result, clearListBtn,
//classes: SongItem, SongList
//}
let canProceed = async () => {
    if (validateInput()) {
        let nameOfSong = document.getElementById('name-of-song').value
        let authorOfSong = document.getElementById('author-of-song').value
        let allowedToProceed =  new Promise((resolve, reject) => {
            if (confirm(`Do you wish to add song ${nameOfSong} by ${authorOfSong}?`)) {
                
                //outer lexical environment{
                //vars: nameOfSong, authorOfSong, allowedToProceed
                //}
                
                
                
                //inner lexical environment{
                //vars: songToBeAdded,
                //fn: resolve
                //}
                let songToBeAdded = createNewSong(nameOfSong, authorOfSong)
                songList.addSong(songToBeAdded)
                
                resolve('cool')
            }
            reject('song will not be added')
            
            
        })
        
        handleError(allowedToProceed)
    } else {
        alert('there are details missing')
    }
}

let listHasItems = (list) => {
    return (list.songAssembly.length !== 0 && confirm('Do you wish to clear the list?'))
}

let clearList = () => {
    
    if (listHasItems(songList)) {
        songList.clearList()
    }
    
    
}
    

clearListBtn.addEventListener('click', clearList)

addSongBtn.addEventListener('click', addSong)

