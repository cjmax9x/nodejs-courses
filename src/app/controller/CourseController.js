const Course = require("../models/Course");

class CourseController {
  detail(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        course
          ? res.render("course/courseDetail", { course: course.toObject() })
          : res.render("404NoFound");
      })
      .catch(next);
  }

  // Create UI
  create(req, res, next) {
    res.render("course/create");
  }

  // [POST] server
  store(req, res, next) {
    const formData = { ...req.body };
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }
  //--------------------------

  // Update UI
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        res.render("course/edit", { course: course.toObject() });
      })
      .catch(next);
  }
  // [PUT] server
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(res.redirect("/me/stored/course"))
      .catch(next);
  }
  //-------------

  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }

  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  // resotre course
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
}

module.exports = new CourseController();
