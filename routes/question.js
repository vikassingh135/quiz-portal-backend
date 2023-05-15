const express = require('express');
const {create, read, list, listByCategory, remove} = require('../controllers/question');
const router = express.Router();

// router.get("/:categoryId", read);
// router.post("/create/:userId", requireSignin, isAuth, isAdmin, create);

router.get("/byQuiz/:quizId", listByCategory);
router.get("/getQuestions", list);

router.post("/create",create);

router.get("/:questionId", read);
router.delete("/:questionId", remove);
module.exports = router;