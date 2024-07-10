const express = require("express");
const { getStudentsByYear } = require("../controllers/student");

const studentRouter = express.Router();

studentRouter.route("/:year").post(getStudentsByYear);
module.exports = studentRouter;