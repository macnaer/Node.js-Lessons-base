const express = require("express");
const app = express();
const path =  require("path");
const bodyParser = require("body-parser");
const sequelize = require('./model/db');
const Users = require('./model/users');


app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
app.use(aboutRoutes);
app.use(homeRoutes); 
app.use((req, res, next) =>{
    res.status(404).send("<h1>404 Not Found!</h1>");
} )



Users
.sync()
    .then(result => {
        console.log(result);
        app.listen(3000);
    })
    .catch(error => console.log(error));

// sequelize
// .sync()
// .then(result => {
//     console.log(result);
//     app.listen(3000);
// })
// .catch(error => console.log(error));

