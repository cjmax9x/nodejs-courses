const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const port = 4000;
const route = require("./routes");
const db = require("./config/db/index");

db.connect();

//public routes
app.use(express.static(path.join(__dirname, "public")));

//middleware body parse for post method
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

//http logger
app.use(morgan("combined"));

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views"));

//routes init
route(app);

// listening port
app.listen(port, () => {});
