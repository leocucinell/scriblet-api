const express = require('express');
const router = express.Router();
const controller = require('../controllers');

//SECTION: Routes
//base route: /student
router.route('/add').post(controller.studentController.addStudent);
router.route('/:id').get(controller.studentController.getStudent);

//SECTION: Exports
module.exports = router;