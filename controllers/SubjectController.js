//SECTION: Methods

//BASE URL: /student
//POST: /add
const addSubject = (req, res) => {
    res.send('Add a subject');
}

//GET: /:id
const getSubject = (req, res) => {
    res.send(`Get subject #${req.params.id}`);
}

//PUT: /:id
const editSubject = (req, res) => {
    res.send(`Edit subject #${req.params.id}`);
}

//DELETE: /:id
const deleteSubject = (req, res) => {
    res.send(`Delete subject #${req.params.id}`);
}

//SECTION: Export
module.exports = {
    addSubject,
    getSubject,
    editSubject,
    deleteSubject
}