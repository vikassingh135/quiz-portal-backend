const Question = require("../models/question");
const dbErrorHandler = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  const question = new Question(req.body);
  question.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: dbErrorHandler.errorHandler(err),
      });
    }
    res.json({ data });
  });
};

exports.read = (req, res) => {
  return res.json(req.question);
};

exports.list = (req, res) => {
  Question.find().exec((err, data) => {
    if (err) {
      return res.staus(400).json({
        error: dbErrorHandler.errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.listByCategory = (req, res) => {
  console.log("Quesetion controller par aa hgye hain", req.params);
  Question.find({ quiz: req.params.quizId }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: dbErrorHandler.errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.remove = (req, res) => {
  console.log(req.params.questionId);
  Question.remove({ "_id": req.params.questionId }).then((err, data) => {
    if (err) {
      return res.status(400).json({
        error: dbErrorHandler.errorHandler(err),
      });
    }
    res.json({
      message: "Question deleted",
    });
  });
};
