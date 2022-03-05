const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//SECTION: Methods

//BASE URL: /student
//POST: /add
const addStudent = async (req, res) => {
    try{
        const createdStudent = await prisma.student.create({
            data: {
                email: 'test@editme.com',
                password: 'password'
            }
        });
        res.send(createdStudent);
    } catch(err) {
        console.log(err);
    }
}

//GET: /:id
const getStudent = async (req, res) => {
    try {
        const retrievedStudent = await prisma.student.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send(retrievedStudent);
    } catch(err) {
        console.log(err);
    }
}


//SECTION: Export
module.exports = {
    addStudent,
    getStudent
}