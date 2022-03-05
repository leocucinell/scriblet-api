const express = require('express');
const router = express.Router();
const controller = require('../controllers');

//SECTION: Routes
//BASE URL: /quiz
router.route('/add').post(controller.quizController.addQuiz);
router.route('/:id').get(controller.quizController.getQuiz);
router.route('/:id').put(controller.quizController.editQuiz);
router.route('/:id').delete(controller.quizController.deleteQuiz);

//SECTION: Exports
module.exports = router