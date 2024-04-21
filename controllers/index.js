const helloworldPage = (req, res, next) => {
  try {
    res.locals = {
      title: "Hello World",
    };
    res.render("index");
  } catch (error) {
    next(error);
  }
};

const homePage = (req, res, next) => {
  try {
    res.locals = {
      title: "Home",
    };
    res.render("index");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  helloworldPage,
  homePage,
};
