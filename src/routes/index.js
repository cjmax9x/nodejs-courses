const newsRouter = require("./news");
const siteRouters = require("./site");
const courseRouters = require("./course");
const meRouters = require("./me");

const route = (app) => {
  app.use("/news", newsRouter);
  app.use("/me", meRouters);
  app.use("/courses", courseRouters);
  app.use("/", siteRouters);
};

module.exports = route;
