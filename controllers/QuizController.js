const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//SECTION: Methods

//BASE URL: /quiz
//POST: /add
const addQuiz = async (req, res) => {
    try{
        const createdQuiz = await prisma.quiz.create({
            data: {
                title: req.body.title,
                subject_id: req.body.subjectId,
                student_id: req.body.studentId
            }
        });
        res.send(createdQuiz);
    } catch(err) {
        console.log(err);
    }
}

//GET: all/:id - retrieve all quizes attached to a student
const retrieveStudentQuizes = async (req, res) => {
    try{

        const studentQuizes = await prisma.quiz.findMany({
            where: {
                student_id: parseInt(req.params.id)
            }
        });
        res.send(studentQuizes);

    } catch(err) {
        console.log(err);
        res.send('error loading student quizes');
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
    retrieveStudentQuizes,
    getQuiz,
    editQuiz,
    deleteQuiz
}