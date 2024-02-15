const mongoose = require('mongoose')
const userSchema = require('./User')
const QuizSchema = require('./quiz')
const scoreSchema = require('./score')

const User = mongoose.model('User', userSchema)
const Quiz = mongoose.model('Quiz', QuizSchema)
const Score = mongoose.model('Score', scoreSchema);

module.exports = {
  User,
  Quiz,
  Score
}