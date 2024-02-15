const express = require('express');
const router = express.Router();
const quizCtrl = require('../controllers/quiz');
const scoreCtrl = require('../controllers/score')

router.get('/:type', quizCtrl.index);
router.post('/', quizCtrl.create);
router.get('/:id', quizCtrl.show);
router.delete('/:id', quizCtrl.delete);
router.put('/:id', quizCtrl.update);
router.post('/save/:id', scoreCtrl.saveScore)
router.delete('/delete/:id', scoreCtrl.deleteScore);
router.get('/save/:id',scoreCtrl.getScoresByUser)

module.exports = router;