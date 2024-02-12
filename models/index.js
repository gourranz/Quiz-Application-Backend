const mongoose = require('mongoose')
const userSchema = require('./User')
const QuizSchema = require('./quiz')

const User = mongoose.model('User', userSchema)
const Quiz = mongoose.model('Quiz', QuizSchema)

module.exports = {
  User,
  Quiz
}