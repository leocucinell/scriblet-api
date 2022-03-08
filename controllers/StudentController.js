const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

//SECTION: Methods

//BASE URL: /student
//POST: /add
const addStudent = async (req, res) => {
    try{
        const hashedPass = bcrypt.hash(req.body.password, 10, async (err, result) => {
            try{
                if(err){
                    console.log(err);
                    res.send('Error hashing user password');
                }
                const createdStudent = await prisma.student.create({
                    data: {
                        email: req.body.email,
                        password: result
                    }
                });
                await prisma.subject.create({
                    data: {
                        title: 'global', 
                        owner_id: createdStudent.id
                    }
                });
                res.send(createdStudent); //NOTE: student has been created!
            } catch (err) {
                console.log('INSIDE ERROR BLOCK AFTER BCRYPT HASH FOR SIGN UP')
                res.send('User with that email already exists')
            }
        });
    } catch(err) {
        console.log('INSIDE ERROR BLOCK FOR SIGN UP');
        console.log(err);
        res.send('Unable to hash password');
    }
}

//POST: /login
const authStudent = async (req, res) => {
    try{
        const retrievedStudent = await prisma.student.findUnique({
            where: {
                email: req.body.email
            }, 
            include: {
                subjects: true,
                quizes: true,
                notes: true
            }
        });
        if(retrievedStudent == null){
            return res.send('user does not exist');
        }
        const compareStudent = bcrypt.compare(req.body.password, retrievedStudent.password, (err, result) => {
            if(err || !result) {
                return res.send('Incorrect password');
            }
            const newStudentObj = {
                email: retrievedStudent.email,
                id: retrievedStudent.id
                //NOTE: Front end retrieves these sepperately
                // subjects: retrievedStudent.subjects,
                // quizes: retrievedStudent.quizes,
                // notes: retrievedStudent.notes
            }
            res.send(newStudentObj);
        });
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
    getStudent,
    authStudent
}