const express = require('express');
const router = express.Router();
const controller = require('../controllers');

//SECTION: Routes
//BASE URL: /subject
router.route('/add').post(controller.subjectController.addSubject);
router.route('/:id').get(controller.subjectController.getSubject);
router.route('/:id').put(controller.subjectController.editSubject);
router.route('/:id').delete(controller.subjectController.deleteSubject);

//SECTION: Exports
module.exports = router