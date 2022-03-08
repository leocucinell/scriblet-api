const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//SECTION: Methods

//BASE URL: /note
//POST: /add
const addNote = async (req, res) => {
    try{
        const createdNote = await prisma.note.create({
            data: {
                title: "TEST",
                body: "This is a test note",
                student_id: 2,
                subject_id: 1
            }
        });
        res.send(createdNote);
    } catch(err) {
        console.log(err);
    }
}

//GET: /all/:id - retrieve all student notes
const retrieveStudentNotes = async (req, res) => {
    try {
        const studentNotes = await prisma.note.findMany({
            where: {
                student_id: parseInt(req.params.id)
            }
        });
        res.send(studentNotes);
    } catch(err) {
        console.log(err)
        res.send('Unable to load student notes');
    }
}

//GET: /:id
const getNote = async (req, res) => {
    try{
        const retrievedNote = await prisma.note.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(retrievedNote);
    } catch(err) {
        console.log(err);
    }
}

//PUT: /:id
const editNote = async (req, res) => {
    try{
        const editedNote = await prisma.note.update({
            where: {
                id: parseInt(req.params.id)
            }, 
            data: {
                title: "TEST",
                body: "This note has been edited",
                subject_id: 1
            }
        });
        res.send(editedNote);
    } catch(err) {
        console.log(err);
    }
}

//DELETE: /:id
const deleteNote = async (req, res) => {
    try{
        const deletedNote = await prisma.note.delete({
            where: {
                id:parseInt(req.params.id)
            }
        });
        res.send(deletedNote);
    } catch(err) {
        console.log(err);
    }
}

//SECTION: Export
module.exports = {
    addNote,
    retrieveStudentNotes,
    getNote,
    editNote,
    deleteNote
}