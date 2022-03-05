const express = require('express');
const router = express.Router();
const controller = require('../controllers');

//SECTION: Routes
//BASE URL: /note
router.route('/add').post(controller.noteController.addNote);
router.route('/:id').get(controller.noteController.getNote);
router.route('/:id').put(controller.noteController.editNote);
router.route('/:id').delete(controller.noteController.deleteNote);

//SECTION: Exports
module.exports = router