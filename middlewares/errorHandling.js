var createError = require("http-errors");

// catch 404 and forward to error handler
function catchNotFound(req, res, next) {
  next(createError(404));
}

// error handler
function errorHandler(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.locals.title = "Error";

  const isApiRequest = req.originalUrl.startsWith("/api");

  if (isApiRequest) {
    res.apiError(err);
  } else {
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  }
}

module.exports = {
  catchNotFound,
  errorHandler,
};
