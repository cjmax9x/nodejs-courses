const express = require("express");
const router = express.Router();

const newController = require("../app/controller/NewsController");

router.get("/:slug", newController.detail);

router.get("/", newController.index);

module.exports = router;
