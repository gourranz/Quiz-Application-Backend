const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/quiz');

router.get('/:type', quizCtrl.index);
router.post('/', quizCtrl.create);
router.get('/:id', quizCtrl.show);
router.delete('/:id', quizCtrl.delete);
router.put('/:id', quizCtrl.update);

module.exports = router;