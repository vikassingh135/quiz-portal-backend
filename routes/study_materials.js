const express = require("express");
const router = express.Router();
const { create, listAll, listBooksBySem, listStudyMaterialsBytype } = require('../controllers/study_materials');


router.post("/save", create);
router.get("/listAll",listAll);
router.get("/listBooksBySem/:semester", listBooksBySem);
router.get("/listStudyMaterialByType/:year/:type",listStudyMaterialsBytype);

module.exports = router;