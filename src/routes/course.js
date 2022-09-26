const express = require("express");
const router = express.Router();

const CourseController = require("../app/controller/CourseController");

router.get("/create", CourseController.create);
router.post("/store", CourseController.store);
router.get("/:id/edit", CourseController.edit);
router.put("/:id", CourseController.update);
router.patch("/:id/course", CourseController.restore);
router.delete("/:id", CourseController.destroy);
router.delete("/:id/force", CourseController.forceDestroy);
router.get("/:slug", CourseController.detail);

module.exports = router;
