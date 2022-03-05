const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//SECTION: Methods

//BASE URL: /note
//POST: /add
const addQuestion = async (req, res) => {
    try{
        const addedQuestion = await prisma.question.create({
            data: {
                title: "What is the powerhouse of the cell",
                answer: "Mitochondria",
                quiz_id: 1
            }
        });
        res.send(addedQuestion);
    } catch (err) {
        console.log(err);
    }
}

//POST: /add/many
const addManyQuestions = async (req, res) => {
    try{
        // const fillQuiz = await prisma.question.createMany({
        //     data: []
        // });
        // res.send(fillQuiz);
        res.send('Fill quiz in progress');
    } catch (err) {
        console.log(err);
    }
}

//GET: /:id
const retrieveQuestion = async (req, res) => {
    try{
        const retrievedQuestion = await prisma.question.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(retrievedQuestion);
    } catch (err) {
        console.log(err);
    }
}

//PUT: /:id
const editQuestion = async (req, res) => {
    try{
        const editedQuestion = await prisma.question.update({
            where: {
                title: 'Edited question title',
                answer: 'edited question answer'
            }
        });
        res.send(editedQuestion)
    } catch (err) {
        console.log(err);
    }
}

//DELETE: /:id
const deleteQuestion = async (req, res) => {
    try{
        const deletedQuestion = await prisma.question.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(deletedQuestion);
    } catch (err) {
        console.log(err);
    }
}


//SECTION: Exports
module.exports = {
    addQuestion,
    addManyQuestions,
    editQuestion,
    retrieveQuestion,
    deleteQuestion
}