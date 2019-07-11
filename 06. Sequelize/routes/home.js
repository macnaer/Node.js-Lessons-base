const express = require("express");
const path = require("path");
const router = express.Router();
const bodyParser = require("body-parser");
const url = bodyParser.urlencoded({extended: false});

router.get('/', (req, res, next) => {
    
    res.render('home', {
        pageTitle: 'Node',
        path: '/'
    });
});

router.post("/", url, (req, res, next) => {
    // console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    console.log("Username = ", username, " password = ", password);
    res.send(req.body);
    //res.send("Rendering file")
});

module.exports = router;