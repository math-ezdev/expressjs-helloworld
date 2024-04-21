const express = require("express");
const router = express.Router();
const controller = require("./helloworld.controller");

router.get("/", controller.helloworld);

module.exports = router;
