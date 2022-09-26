const Course = require("../models/Course");

class SitesController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: courses.map((course) => course.toObject()),
        });
      })
      .catch(next);
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SitesController();
