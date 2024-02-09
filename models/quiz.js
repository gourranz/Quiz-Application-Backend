const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  type: String,
  difficulty: String,
  category: String,
  question: String,
  correct_answer: String,
  incorrect_answers: [String],
}, { timestamps: true });

module.exports = mongoose.model("Quiz", QuizSchema);