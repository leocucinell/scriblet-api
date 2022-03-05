//SECTION: Methods

//BASE URL: /student
//POST: /add
const addStudent = (req, res) => {
    res.send('Add a student');
}

//GET: /:id
const getStudent = (req, res) => {
    const studentId = req.params.id || 1
    res.send(`Retrieve student by id #${studentId}`);
}


//SECTION: Export
module.exports = {
    addStudent,
    getStudent
}