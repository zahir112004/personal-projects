const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find(note => note.title === title)

    if(!duplicateNotes) {
        notes.push({
            title, 
            body
        })

        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title taken')
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const noteToBeRemoved = notes.findIndex(note => note.title === title)

    if(noteToBeRemoved === -1) return console.log('No note with this title found')

    notes.splice(noteToBeRemoved, 1)

    saveNotes(notes)
}

const readNotes = (title) => {
    const notes = loadNotes()
    const noteToBeRead = notes.find(note => note.title === title)
    console.log(`Title: ${noteToBeRead.title}\nBody: ${noteToBeRead.body}`)
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach(note => {
        console.log(`Title: ${note.title}\nBody: ${note.body}\n`)
    })
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

module.exports = {
    addNote,
    removeNotes,
    readNotes,
    listNotes
}