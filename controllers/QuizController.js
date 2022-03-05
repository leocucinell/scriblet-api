const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//SECTION: Methods

//BASE URL: /quiz
//POST: /add
const addQuiz = async (req, res) => {
    try{
        const createdQuiz = await prisma.quiz.create({
            data: {
                title: "Test Quiz title",
                subject_id: 1,
                student_id: 2
            }
        });
        res.send(createdQuiz);
    } catch(err) {
        console.log(err);
    }
}

//GET: /:id
const getQuiz = async (req, res) => {
    try{
        const retrievedQuiz = await prisma.quiz.findUnique({
            where: {
                id: parseInt(req.params.id)
            },
            include: {
                questions: true
            }
        });
        res.send(retrievedQuiz);
    } catch(err) {
        console.log(err);
    }
}

//PUT: /:id
const editQuiz = async (req, res) => {
    try{
        const editedQuiz = await prisma.quiz.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                title: 'updated Quiz Title'
                //last_accessed: 'Update me to include a new datetime object'
            }
        });
        res.send(editedQuiz);
    } catch(err) {
        console.log(err);
    }
}

//DELETE: /:id
const deleteQuiz = async (req, res) => {
    try{
        const deletedQuiz = await prisma.quiz.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(deletedQuiz);
    } catch(err) {
        console.log(err);
    }
}

//SECTION: Export
module.exports = {
    addQuiz,
    getQuiz,
    editQuiz,
    deleteQuiz
}