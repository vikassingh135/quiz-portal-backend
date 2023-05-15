const express = require("express");
const router = express.Router();

const {create, read} = require("../controllers/completed_test");

router.post("/save", create);
router.get("/view/:userId", read);

module.exports = router;