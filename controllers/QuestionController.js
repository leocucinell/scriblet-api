const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//SECTION: Methods

//BASE URL: /note
//POST: /add
const addQuestion = async (req, res) => {

}

//POST: /add/many
const addManyQuestions = async (req, res) => {

}

//GET: /:id
const retrieveQuestion = async (req, res) => {

}

//PUT: /:id
const editQuestion = async (req, res) => {

}

//DELETE: /:id
const deleteQuestion = async (req, res) => {

}


//SECTION: Exports
module.exports = {
    addQuestion,
    addManyQuestions,
    editQuestion,
    retrieveQuestion,
    deleteQuestion
}