const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//SECTION: Methods

//BASE URL: /student
//POST: /add
const addSubject = async (req, res) => {
    try{
        const createdSubject = await prisma.subject.create({
            data: {
                title: "Subject TEst title",
                owner_id: 1
            }
        });
        res.send(createdSubject);
    } catch(err) {
        console.log(err);
    }
}

//GET: /:id
const getSubject = async (req, res) => {
    try{
        const retrievedSubject = await prisma.subject.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(retrievedSubject);
    } catch(err) {
        console.log(err);
    }
}

//PUT: /:id
const editSubject = async (req, res) => {
    try{
        const editedSubject = await prisma.subject.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                title: 'Edited Subject Title'
            }
        });
        res.send(editedSubject);
    } catch(err) {
        console.log(err);
    }
}

//DELETE: /:id
const deleteSubject = async (req, res) => {
    try{
        const deletedSubject = await prisma.subject.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
    } catch(err) {
        console.log(err);
    }
}

//SECTION: Export
module.exports = {
    addSubject,
    getSubject,
    editSubject,
    deleteSubject
}