
// const express = require("express");
// const app = express();

// app.use("/about", (req, res, next) => {
//     res.send("<h1>About us</h1>");
//     //next();
// });

// app.use("/", (req, res, next) => {
//     res.send("<h1>Home page</h1>");
// });
// app.listen(3000);

////////////Body Parser

const bodyParser = require("body-parser");
const express = require("express");

const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');


const app = express();
app.use(aboutRoutes);
app.use(homeRoutes); 
app.use((req, res, next) =>{
    res.status(404).send("<h1>404 Not Found!</h1>");
} )



app.listen(3000);
