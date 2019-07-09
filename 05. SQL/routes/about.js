const express = require("express");

const router = express.Router();

router.get("/about", (req, res, next) => {
    res.send("<h1>About us page</h1>");
});

module.exports = router;