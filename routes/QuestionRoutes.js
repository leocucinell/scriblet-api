const express = require('express');
const router = express.Router();
const controller = require('../controllers');

//SECTION: Routes
//BASE URL: /question
router.route('/add').post(controller.questionController.addQuestion);
router.route('/add/many').post(controller.questionController.addManyQuestions)
router.route('/:id').get(controller.questionController.retrieveQuestion);
router.route('/:id').put(controller.questionController.editQuestion);
router.route('/:id').delete(controller.questionController.deleteQuestion);

//SECTION: Exports
module.exports = router