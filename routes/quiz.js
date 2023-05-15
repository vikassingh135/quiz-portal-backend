const express = require('express');
const { create, read, list, quizByCategory } = require('../controllers/quiz');
const router = express.Router();

router.get("/byCategory/:categoryId", quizByCategory);
router.post("/create/", create);
router.get("/get/:quizId", read);
router.get("/showQuizzes",list);

module.exports = router;

