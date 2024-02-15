const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  totalScore: {
    type: Number,
  },
  quizType: [{
    type: String,
    
  }],
  scores: [{
    type: Number,
    required: true,
  }],
});


module.exports = scoreSchema;
