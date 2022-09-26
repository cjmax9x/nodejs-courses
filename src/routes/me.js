const express = require("express");
const router = express.Router();

const meController = require("../app/controller/MeController");

router.get("/stored/course", meController.storedCourse);
router.get("/course/trash", meController.trash);

module.exports = router;
