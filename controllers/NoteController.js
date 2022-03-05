const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//SECTION: Methods

//BASE URL: /note
//POST: /add
const addNote = (req, res) => {
    
}

//GET: /:id
const getNote = (req, res) => {
    res.send(`Retrieve note by id #${req.params.id}`);
}

//PUT: /:id
const editNote = (req, res) => {
    res.send(`Edit note by id #${req.params.id}`);
}

//DELETE: /:id
const deleteNote = (req, res) => {
    res.send(`Delete note with id #${req.params.id}`);
}

//SECTION: Export
module.exports = {
    addNote,
    getNote,
    editNote,
    deleteNote
}