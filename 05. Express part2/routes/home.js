const express = require("express");
const path = require("path");

const router = express.Router();

const HomeController = require('../controller/home');   

router.get("/", HomeController.HomePage);

module.exports = router;