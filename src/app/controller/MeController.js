const Course = require("../models/Course");

class MeController {
  //me/stored/course
  storedCourse(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()]).then(
      ([courses, deletedCount]) => {
        res.render("me/me", {
          courses: courses.map((course) => course.toObject()),
          deletedCount,
        });
      }
    );
  }
  //me/course/trash
  trash(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render("me/meTrash", {
          courses: courses.map((course) => {
            return course.toObject();
          }),
        });
      })
      .catch(next);
  }
}
module.exports = new MeController();
