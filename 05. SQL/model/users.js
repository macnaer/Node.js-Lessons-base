const db = require("./config");

function GetAllUsers(){
    return db.execute("SELECT * FROM users");  
}

module.exports = GetAllUsers;
