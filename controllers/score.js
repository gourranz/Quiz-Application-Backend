const {Score} = require('../models');
console.log(Score)

async function saveScore(req, res) {
  try {
   const { id, scores,quizType } = req.body;
   const newScore = {user:id,scores, quizType}

  
    await Score.create(newScore)
    res.status(201).json({ message: 'Score saved successfully' });
  } catch (error) {
    console.error('Error saving score:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async function deleteScore(req, res) {
  try {
      const { id } = req.params;
      const deletedScore = await Score.findOneAndDelete({ _id: id }); // Use _id instead of id

      if (!deletedScore) {
          return res.status(404).json({ message: 'Score not found' });
      }

      res.json({ message: 'Score deleted successfully' });
  } catch (error) {
      console.error('Error deleting score:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
}

  async function getScoresByUser(req, res) {
    try {
      const { id } = req.params;
      const scores = await Score.find({ user: id });
  
      res.json(scores);
    } catch (error) {
      console.error('Error fetching scores:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  module.exports = { saveScore, deleteScore, getScoresByUser};