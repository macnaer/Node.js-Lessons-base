
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

const path = require("path");
const express = require("express");
const rootDir = require("./helpers/path");


const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');

const app = express();
app.set('view engine', "pug");
app.set("views", "views");


app.use(express.static(path.join(__dirname, "public")));
app.use(aboutRoutes);
app.use(homeRoutes); 
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
} )
app.listen(3000);
