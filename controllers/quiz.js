const express = require('express')
const axios = require('axios');
const {Quiz} = require ('../models');
const models = require('../models');

async function index(req, res, next) {

try {
    const quizType = req.query.type || 'animals'; 

    const quizTypeUrls = {
        geography: 'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple',
        history: 'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=boolean',
        art:'https://opentdb.com/api.php?amount=10&category=25&difficulty=medium&type=multiple',
        politics:'https://opentdb.com/api.php?amount=10&category=24&type=boolean',
        sports:'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=boolean',
        animals:'https://opentdb.com/api.php?amount=10&category=27&type=multiple',
        scienceNature:'https://opentdb.com/api.php?amount=10&category=17&type=multiple',
        computerScience:'https://opentdb.com/api.php?amount=10&category=18&type=multiple'

    };

    const apiUrl = quizTypeUrls[quizType];
    if (!apiUrl) {
      return res.status(400).json({ error: 'Invalid quiz type' });
    }

    const response = await axios.get(apiUrl);
    const externalQuizQuestions = response.data.results;
    await Quiz.insertMany(externalQuizQuestions);

    res.json({ results: externalQuizQuestions });
  } catch (error) {
    console.error('Error fetching and saving quiz questions:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
  

async function create (req,res,next) {
        try {

            res.json(await Quiz.create(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
}

async function show (req,res,next) {
    try {

        res.json(await Quiz.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

async function destroy(req,res,next) {
    try {
      // delete people by ID
      res.json(await Quiz.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // PEOPLE UPDATE ACTION
  async function update(req,res,next) {
    try {
      // update people by ID, provide the form data, and return the updated document.
      res.json(
        await Quiz.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  

module.exports = {
    create,
    show,
    index,
    delete: destroy,
    update
}



