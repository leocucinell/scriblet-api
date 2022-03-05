//SECTION: Methods

//BASE URL: /quiz
//POST: /add
const addQuiz = (req, res) => {
    res.send('Add a quiz')
}

//GET: /:id
const getQuiz = (req, res) => {
    res.send(`Retrieve quiz #${req.params.id}`);
}

//PUT: /:id
const editQuiz = (req, res) => {
    res.send(`Edit quiz #${req.params.id}`);
}

//DELETE: /:id
const deleteQuiz = (req, res) => {
    res.send(`Delete quiz #${req.params.id}`);
}

//SECTION: Export
module.exports = {
    addQuiz,
    getQuiz,
    editQuiz,
    deleteQuiz
}