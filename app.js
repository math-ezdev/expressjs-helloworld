require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const database = require("./configs/database");

const responseMiddleware = require("./middlewares/response");
const errorHandlingMiddleware = require("./middlewares/errorHandling");

const helloworldApi = require("./apis/helloworld.api");
var indexRouter = require("./routes/index");

var app = express();
database.connect();
app.locals = {
  title: "My Awesome Website",
  navigations: {
    index: "/",
  },
};

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//# middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(responseMiddleware.respond);

//# routes
// apis
app.use("/api/helloworld", helloworldApi);
// web
app.use("/", indexRouter);

// middleware error handling
app.use(errorHandlingMiddleware.catchNotFound);
app.use(errorHandlingMiddleware.errorHandler);

module.exports = app;
