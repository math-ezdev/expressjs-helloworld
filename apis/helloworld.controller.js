const helloworld = (req, res, next) => {
  try {
    const data = {
      helloworld: "Hello World.",
    };
    const message = "Hello world successful.";
    res.apiSuccess(data, message);
  } catch (error) {
    next(error);
  }
};

module.exports = { helloworld };
